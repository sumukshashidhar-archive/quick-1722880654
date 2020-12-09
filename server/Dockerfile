FROM node:15.3.0-alpine3.10 AS builder

WORKDIR /usr/src/app

COPY *.json ./

COPY ./src ./src

RUN npm ci --quiet && npm run build

### PRODUCTION

FROM node:15.3.0-alpine3.10 AS prod 

WORKDIR /app

RUN npm ci --quiet --only=production && npm install -g pm2

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 4000

CMD ["pm2-runtime", "./dist/index.js"]