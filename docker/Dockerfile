FROM node:16.9.1
WORKDIR /app
COPY .env.example .env
RUN npm install -g nodemon
EXPOSE 3000
CMD [ "nodemon" ]
