FROM node:alpine

WORKDIR /app

EXPOSE 5001

COPY package* ./

RUN npm i

COPY . ./

CMD ["npm", "start"]