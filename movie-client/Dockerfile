FROM node:16.13.2-alpine as deps


WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

# ARG REACT_APP_API_URL=http://127.0.0.1:8000/api

COPY . .

RUN npm run build

CMD ["echo", "Build complete"]