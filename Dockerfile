FROM node:alpine AS ARTIFACT

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install
COPY . /app


FROM node:alpine

WORKDIR /app
COPY --from=ARTIFACT /app/ ./
EXPOSE 3000

CMD ["yarn", "dev"]