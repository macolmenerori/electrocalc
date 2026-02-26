# Stage 1: build project
FROM node:24-alpine as builder
LABEL app="electrocalc" stack.binary="node" stack.version="24-alpine"

RUN corepack enable

WORKDIR /usr/app

COPY src src
COPY public public
COPY package.json package.json
COPY pnpm-lock.yaml pnpm-lock.yaml
COPY index.html index.html
COPY .prettierrc .prettierrc
COPY .prettierignore .prettierignore
COPY eslint.config.js eslint.config.js
COPY jest.config.ts jest.config.ts
COPY nginx.conf nginx.conf
COPY postcss.config.js postcss.config.js
COPY tsconfig.json tsconfig.json
COPY vite.config.ts vite.config.ts

RUN pnpm i --frozen-lockfile
RUN pnpm build

# Stage 2: serve project
FROM nginx:1.29.4-alpine3.23
LABEL app="electrocalc" stack.binary="nginx" stack.version="stable-alpine"

COPY --from=builder /usr/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
