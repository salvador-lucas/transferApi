FROM node:latest

WORKDIR /transferApi
COPY package.json .
RUN npm install
# RUN npm uninstall bcrypt
# RUN npm install bcrypt
COPY . .
RUN npm run build
EXPOSE 3000

CMD npm start

# WORKDIR /app
# ARG ENV
# ENV STAGE=$ENV
# ADD package.json /app/
# ADD package-lock.json /app/
# RUN npm install
# RUN npm uninstall bcrypt
# RUN npm install bcrypt
# ADD . /app/
# RUN rm -f /app/.npmrc
# RUN npm run build
# ENV NODE_ENV local
# EXPOSE 8080

# CMD ["node", "./dist/server.js"]