# Build

FROM node:lts-alpine

RUN apk add --no-cache curl

WORKDIR /server

# Acquire dependencies

COPY package*.json ./

RUN npm ci --omit=dev

# Copy server source code

COPY . .

# Deploy

ENV NODE_ENV=production
EXPOSE 4000

CMD ["npm", "start"]
