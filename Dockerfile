FROM node:alpine
ARG NEO_USER
ARG NEO_PASS
ENV GRAPH_URI="https://ripplescope.com/api/graph/"
ENV NEO_URI="neo4j://108.61.54.26:7687/"
ENV NEO_USER=$NEO_USER
ENV NEO_PASS=$NEO_PASS
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
RUN npm run startup
ENTRYPOINT ["npm", "start"]
