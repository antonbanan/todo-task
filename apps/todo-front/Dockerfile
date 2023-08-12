FROM node:lts-alpine
WORKDIR /app
COPY ./dist/apps/todo-front .
ENV PORT=3000
EXPOSE ${PORT}
RUN npm install --omit=dev
CMD ["npm", "start"]