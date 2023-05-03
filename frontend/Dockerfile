FROM node:18-alpine
WORKDIR /app/frontend
COPY package.json package-lock.json tsconfig.json ./
# RUN npm i yarn
RUN yarn install --production --legacy-peer-deps
COPY . .
# CMD ["yarn", "start"]