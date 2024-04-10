# Install npm dependencies
FROM node:21-alpine AS deps
MAINTAINER Madison Pratt <madisonpratt@imarc.com>

WORKDIR /usr/src/headless-wp-next
ADD package.json package-lock.json ./

RUN npm ci

# Build next app
FROM node:21-alpine AS builder

## Copy dependencies
WORKDIR /usr/src/headless-wp-next
COPY --from=deps /usr/src/headless-wp-next/package.json \
    /usr/src/headless-wp-next/package-lock.json \
    ./
COPY --from=deps /usr/src/headless-wp-next/node_modules \
    ./node_modules

## Copy source
COPY ./src ./src
COPY tsconfig.json \
    next.config.mjs \
    next-env.d.ts \
    ./

ENV NODE_ENV='production'
RUN npm run build

# Copy build artifact and configure environment
FROM node:21-alpine AS runner

## Copy dependencies
WORKDIR /usr/src/headless-wp-next
COPY --from=deps /usr/src/headless-wp-next/package.json \
    /usr/src/headless-wp-next/package-lock.json \
    ./
COPY --from=deps /usr/src/headless-wp-next/node_modules \
    ./node_modules

## Copy build artifact
COPY --from=builder /usr/src/headless-wp-next/.next \
    ./.next

## Copy non-built public assets
COPY ./public ./public

RUN ls -la

ENV NODE_ENV="production"

EXPOSE 3000

ENTRYPOINT ["npm", "run", "start"]