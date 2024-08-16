FROM node:20.6

WORKDIR /usr/src/app

COPY square_fe/package*.json ./

RUN npm install

COPY square_fe/ ./

RUN npm run build

RUN npm install -g serve
CMD ["serve", "-s", "dist"]

EXPOSE 5713
