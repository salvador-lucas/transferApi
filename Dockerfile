FROM node:latest

WORKDIR /app
ADD package.json /app/
ADD package-lock.json /app/
RUN npm install
ADD . /app/
RUN npm run build
ENV NODE_ENV local
EXPOSE 3000

CMD npm start
