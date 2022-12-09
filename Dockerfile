FROM node:16

WORKDIR /urs/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8086

CMD [ "yarn","dev" ]
