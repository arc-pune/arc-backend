FROM node:16.9.1
WORKDIR /app
COPY ../package-lock.json /app
COPY ../package.json /app
RUN npm install -g nodemon && npm install
EXPOSE 4000
CMD [ "npm", "run", "start" ]
