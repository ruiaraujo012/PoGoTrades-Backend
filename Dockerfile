FROM node:lts

WORKDIR /backend

RUN apt-get update

COPY package.json yarn.lock ./

RUN yarn
RUN yarn global add nodemon

COPY . .

EXPOSE 8000

# Change to yarn start for deploy
CMD ["nodemon"]
