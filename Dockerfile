FROM node:alpine
ENV GRAPH_URI="https://ripplescope.com/api/graph/"
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm run startup
ENTRYPOINT ["npm", "start"]
