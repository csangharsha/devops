FROM node:25-alpine3.22
WORKDIR /app

ENV NODE_ENV=development
COPY package.json package-lock.json* ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "production" ]; \
        then npm install --only=production; \
        else npm install; \
        fi

COPY . ./
EXPOSE 3000
CMD ["node", "index.js"]