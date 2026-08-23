# ── Stage 1: Build ────────────────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies first (cached layer)
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# Standalone site — build once at the root (base=/)
RUN npm run build -- --base=/ && \
    mkdir -p build && \
    cp -r dist/. build/ && \
    rm -rf dist

# ── Stage 2: Serve ────────────────────────────────────────────────────────────
FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
