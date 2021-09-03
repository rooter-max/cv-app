# Use official node image as the base image
FROM node:16-alpine3.14

COPY ./dist /usr/local/app/dist
EXPOSE 4000

ENTRYPOINT ["node", "/usr/local/app/dist/server/main.js"]
