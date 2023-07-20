FROM node:alpine

# ARG BUILD_ENV=production 

# ENV NODE_ENV=$BUILD_ENV

WORKDIR /app

COPY package.json package.json

RUN yarn install

COPY . /app

EXPOSE 3000

# RUN if ["$BUILD_ENV" = "development"]; \
# 	then yarn dev \
# 	else yarn build \
# 	fi 
CMD ["yarn", "dev"]