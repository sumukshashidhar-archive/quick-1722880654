FROM node:latest AS builder

WORKDIR /usr/src/app

COPY *.json ./

COPY ./src ./src

RUN npm ci --quiet && npm run build

### PRODUCTION

FROM node:latest AS prod 

WORKDIR /app

COPY package*.json ./

COPY production-orm.json ./ormconfig.json

RUN npm ci --quiet --only=production && npm install -g pm2

COPY --from=builder /usr/src/app/dist ./

EXPOSE 4000

CMD ["pm2-runtime", "index.js"]
