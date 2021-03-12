FROM node:15

ARG PORT=8000
ENV PORT=$PORT

#/app
WORKDIR app 

#/app/src
COPY src src
COPY package.json .

RUN npm install
EXPOSE $PORT
# CMD npm start