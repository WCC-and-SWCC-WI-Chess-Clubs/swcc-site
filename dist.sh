#!/bin/bash

# Deploy static website to S3
# Usage: ./dist.sh <bucket-name>
# Example: ./dist.sh my-website-bucket

set -e

BUCKET="${2}"
S3_TARGET="s3://${BUCKET}"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"


usage() {
  echo "Usage: $0 [local|docker|aws] <s3-bucket-name>"
  echo ""
  echo "  local   Build frontend and deploy to local nginx (/usr/local/nginx/html)"
  echo "  docker  Build fresh Docker image and run via docker-compose"
  echo "  aws     Build, tag, push Docker image and redeploy to AWS Amplify"
  echo ""
  echo "When deploying to AWS, first run:  aws login --profile s3_deploy"
  echo ""
  exit 1
}


# ── Build ────────────────────────────────────────────────────────────
function app_build() {
    rm -rf build
    mkdir -p build

    cp -a *.html build/
	# Upload content folders
	for FOLDER in css Database downloads games images js; do
	  if [ -d "${SCRIPT_DIR}/${FOLDER}" ]; then
	    echo "  publishing ${FOLDER}/..."
	    cp -a ${SCRIPT_DIR}/${FOLDER} build/
	  else
	    echo "  skipping ${FOLDER}/ (not found)"
	  fi
	done

    # cp -a css build/
    # cp -a Database build/
    # cp -a downloads build/
    # cp -a images build/
    # cp -a js build/
}

# ── Package ───────────────────────────────────────────────────────────────────
function app_package() {
    [[ ! -d "dist" ]] && { echo "Creating dist/"; mkdir dist; }
    [[ -f "dist/swcc.zip" ]] && { echo "Removing old zip"; rm dist/*.zip; }
    zip -r dist/swcc.zip css js index.html -x "js/index.js" -x "*.DS_Store"
}

# ── Deploy targets ────────────────────────────────────────────────────────────
function cmd_local() {
	app_build
    cp -a build/. /usr/local/nginx/html/
    echo "Deployed to local nginx"
}

function cmd_docker() {
	# app_build
	#     cp -a build/. /usr/local/nginx/html/
    echo "Deploy to Docker not yet implemented..."
}

function cmd_aws() {	
	if [[ -z "$BUCKET" ]]; then
		usage
	fi

	app_build
	echo "Deploying to ${S3_TARGET}..."

	# Upload root-level files (non-recursive, files only)
	aws s3 sync "${SCRIPT_DIR}/build" "${S3_TARGET}" \
	  --delete \
	  --profile s3_deploy

	echo "Deployed to AWS"
}

function cmd_aws_orig() {	
	if [[ -z "$BUCKET" ]]; then
		usage
	fi

	app_build
	echo "Deploying to ${S3_TARGET}..."

	# Upload root-level files (non-recursive, files only)
	aws s3 sync "${SCRIPT_DIR}" "${S3_TARGET}" \
	  --exclude "*" \
	  --include "*.html" \
	  --include "*.txt" \
	  --include "*.xml" \
	  --include "*.ico" \
	  --include "*.json" \
	  --delete \
	  --exclude "*/*" \
	  --profile s3_deploy

	# Upload content folders
	for FOLDER in css Database downloads games images js; do
	  if [ -d "${SCRIPT_DIR}/${FOLDER}" ]; then
	    echo "  Syncing ${FOLDER}/..."
	    aws s3 sync "${SCRIPT_DIR}/${FOLDER}" "${S3_TARGET}/${FOLDER}" --delete --profile s3_deploy
	  else
	    echo "  Skipping ${FOLDER}/ (not found)"
	  fi
	done

	echo "Deployed to AWS"
}

# ── Entry point ───────────────────────────────────────────────────────────────

case "$1" in
  local)  cmd_local  ;;
  docker) cmd_docker ;;
  aws)    cmd_aws    ;;
  *)      usage      ;;
esac
