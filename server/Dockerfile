FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN yarn
RUN yarn global add nodemon

COPY . ./

EXPOSE 8000

# Change to yarn start for deploy
CMD ["nodemon"]