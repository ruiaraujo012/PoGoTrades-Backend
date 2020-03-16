FROM node:latest

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN yarn
RUN yarn global add react-scripts

COPY . ./

EXPOSE 3000

CMD ["yarn", "start"]
