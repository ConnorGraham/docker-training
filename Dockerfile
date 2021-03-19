FROM node:15-alpine as prod

CMD bash
WORKDIR app 

COPY src src
COPY package.json .

RUN npm install --only=prod

ARG PORT=8000
ENV PORT=$PORT
EXPOSE $PORT

CMD npm run start:prod

FROM prod as dev
RUN npm install --only=dev
CMD npm start

FROM dev as test
COPY test test
CMD npm test