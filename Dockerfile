FROM node:alpine
ENV GRAPH_URI="https://ripplescope.com/api/graph/"
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm run pre-populate-database
ENTRYPOINT ["npm", "start"]
