FROM node:18

RUN mkdir -p /home/app

COPY . /home/app

COPY example.sql /docker-entrypoint-initdb.d/initdb.sql

EXPOSE 3000

CMD ["node", "/home/app/src/index.js"]

