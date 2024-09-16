FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile 


COPY . .
RUN pnpm db:generate
RUN pnpm db:migrate

RUN pnpm build

EXPOSE 8001

CMD [ "pnpm", "start" ]
