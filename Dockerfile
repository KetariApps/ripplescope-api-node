FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm run pre-populate-database
ENTRYPOINT ["npm", "start"]
