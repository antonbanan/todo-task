FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/todo-app .
ENV PORT=3200
EXPOSE ${PORT}
RUN npm install --omit=dev
RUN npm install vim
CMD [ "node", "./main.js" ]
