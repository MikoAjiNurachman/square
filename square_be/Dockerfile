FROM node:20.6

WORKDIR /usr/src/app

COPY square_be/package*.json ./

RUN npm install

COPY square_be/ ./

COPY square_be/entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod +x /usr/src/app/entrypoint.sh

EXPOSE 3001

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
