ARG PORT=8000

FROM node:12.16.3

WORKDIR /usr/src/api

COPY package.json .

RUN npm install

EXPOSE ${PORT}

COPY . .

CMD [ "npm", "run", "build" ]
CMD [ "npm", "run", "server" ]
