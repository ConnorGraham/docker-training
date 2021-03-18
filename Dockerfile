FROM node:15

CMD bash
WORKDIR app 

COPY src src
COPY package.json .

RUN npm install

ARG PORT=8000
ENV PORT=$PORT
EXPOSE $PORT

CMD npm start