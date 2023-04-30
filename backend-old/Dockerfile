FROM node:18-alpine
WORKDIR /app/backend
COPY package.json package-lock.json ./
RUN yarn install --production
COPY . .
# CMD ["yarn", "start"]