FROM node:24-alpine AS build
WORKDIR /app
RUN corepack enable && corepack prepare pnpm@10 --activate
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /app/
RUN pnpm install --frozen-lockfile --prod
COPY ./ /app/

EXPOSE 3000

# CMD ["node", "src/index.ts"]
CMD ["pnpm", "dlx", "esno", "src/index.ts"]