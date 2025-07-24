FROM node:alpine

RUN npm install -g pnpm

WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

COPY ./src /app/src

EXPOSE 8080

CMD ["node", "src/index.ts"]