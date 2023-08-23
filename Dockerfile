FROM node:alpine

WORKDIR /app

COPY package.json package.json

RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "dev"]