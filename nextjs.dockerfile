FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm i && npm i pm2 -g
COPY . .
RUN npm run build
CMD [ "pm2-runtime", "npm", "--", "start" ]