FROM node as builder-base
COPY . /app/
WORKDIR /app
RUN npm install
RUN npm run ng -- build --prod

FROM nginx
COPY --from=builder-base /app/dist /usr/share/nginx/html