FROM node:18

# use pnpm instead of npm
RUN npm install -g pnpm

WORKDIR /usr/src/app

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY prisma/schema.prisma ./prisma/
RUN pnpx prisma generate

# copy rest of the files
COPY . .

EXPOSE 8080
CMD ["pnpm", "start"]
