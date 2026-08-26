#!/bin/bash
# Usage:
#   ./build.sh               — build only (root-based, for Amplify / Docker / local nginx)
#   ./build.sh local         — build + deploy to local nginx at /usr/local/nginx/html/
#   ./build.sh docker        — build Docker image + run at http://localhost:8080
#   ./build.sh aws           — build + deploy to AWS Amplify
#   ./build.sh pkg           — build the distribution zip
#
# Docker image:
#   docker build -t swcc .
#   docker run -p 8080:80 swcc
#   (The Dockerfile runs this same build internally.)
#
# Standalone site: deployed at the root of its own webserver, so this is
# a single `vite build` with base=/ — no sub-site path stripping needed.

set -e

DEPLOY="${1:-}"
AMPLIFY_APP_ID="d23z0fmfoc7k57"   # set this (or export it) before using `aws`
AMPLIFY_BRANCH="production"
AWS_PROFILE="swcc"
LOCAL_PORT="8080"
NGINX_HTML="${NGINX_HTML:-/usr/local/nginx/html}"

usage() {
  echo "Usage: $0 [local|docker|aws|pkg]"
  echo ""
  echo "  clean   Cleans up; you will need to run 'npm install' before building"
  echo "  local   Build frontend and deploy to local nginx (${NGINX_HTML})"
  echo "  docker  Build fresh Docker image and run it"
  echo "  aws     Build, package, and redeploy to AWS Amplify"
  echo "  pkg     Build the distribution zip"
  echo ""
  echo "When deploying to AWS, first run:  aws login --profile $AWS_PROFILE"
  echo ""
  exit 1
}

# ── Build ────────────────────────────────────────────────────────────
function app_build() {
    rm -rf build
    echo "Building SWCC site (base=/)..."
    npm run build -- --base=/
    # cp -a preserves source file modes, which can be owner-only (e.g. 600)
    # depending on how this repo was checked out. Normalize to world-readable
    # so the webserver's own user (nginx, docker, etc.) can actually serve
    # everything — otherwise static assets like PDFs 403 even though the
    # SPA shell (index.html) loads fine via try_files.
    find build -type d -exec chmod 755 {} \;
    find build -type f -exec chmod 644 {} \;
}

# ── Package ───────────────────────────────────────────────────────────
function cmd_package() {
    app_build
    echo "Zipping build/ -> dist/swcc.zip..."
    rm -rf dist
    mkdir -p dist
    (cd build && zip -qr ../dist/swcc.zip .)
}

# ── Deploy targets ───────────────────────────────────────────────────
function cmd_clean() {
    rm -rf build
    rm -rf dist
    rm -rf node_modules
}
function cmd_local() {
    app_build
    cp -a build/. "${NGINX_HTML}"/
    echo "Deployed to local nginx"
}

function cmd_docker() {
    docker build -t swcc .
    docker rm -f swcc 2>/dev/null || true
    docker run -d -p $LOCAL_PORT:80 --name swcc swcc
    echo "Running at http://localhost:$LOCAL_PORT"
}

function cmd_aws() {
    AMPLIFY_APP_ID="${AMPLIFY_APP_ID:?Need AMPLIFY_APP_ID}"

    echo "Creating Amplify deployment..."
    cmd_package
    DEPLOY_JSON=$(aws amplify create-deployment \
        --app-id "$AMPLIFY_APP_ID" \
        --branch-name "$AMPLIFY_BRANCH" \
        --profile $AWS_PROFILE \
        --output json)

    JOB_ID=$(echo "$DEPLOY_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['jobId'])")
    ZIP_UPLOAD_URL=$(echo "$DEPLOY_JSON" | python3 -c "import sys,json; print(json.load(sys.stdin)['zipUploadUrl'])")

    echo "Uploading dist/swcc.zip (job $JOB_ID)..."
    curl -s -w "\nHTTP %{http_code}\n" \
        -H "Content-Type: application/zip" \
        --upload-file dist/swcc.zip \
        "$ZIP_UPLOAD_URL"

    echo "Starting deployment..."
    aws amplify start-deployment \
        --app-id "$AMPLIFY_APP_ID" \
        --branch-name "$AMPLIFY_BRANCH" \
        --job-id "$JOB_ID" \
        --profile $AWS_PROFILE \
        --output json

    echo "Deployment started (job $JOB_ID)!"
}

# ── Entry point ──────────────────────────────────────────────────────
[[ $# -ne 1 ]] && usage

case "$1" in
  clean)  cmd_clean   ;;
  local)  cmd_local   ;;
  docker) cmd_docker  ;;
  aws)    cmd_aws     ;;
  pkg)    cmd_package ;;
  *)      usage       ;;
esac
