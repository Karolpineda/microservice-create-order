FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

EXPOSE 8098

CMD ["npm", "start"]
