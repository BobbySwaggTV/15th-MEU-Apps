# Build

FROM node:lts-alpine

RUN apk add --no-cache curl wget

WORKDIR /client

# Acquire dependencies

COPY package*.json ./

RUN npm ci

# Copy source code

COPY . .

# Build at startup so Compose environment values are available to Next.js.
# Compose waits for the healthy server before starting this container.
ENV NODE_ENV=production
EXPOSE 3000
CMD ["/bin/sh", "-c", "npm run build && exec npm run start"]
