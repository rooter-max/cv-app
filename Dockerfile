FROM node:16.6.1-alpine3.13 as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/

# Stage 2: Serve app with nginx server
FROM nginx:1.21.1-alpine
COPY --from=build /usr/local/app/dist/cv-app /usr/share/nginx/html
EXPOSE 80
