FROM node:latest

WORKDIR /server

RUN apt-get update

COPY package*.json yarn.lock ./

RUN yarn
RUN yarn global add nodemon

COPY . .

EXPOSE 8080

# Change to yarn start for deploy
CMD ["nodemon"]