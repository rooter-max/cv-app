#!/bin/sh
set -m

node /usr/local/app/dist/server/main.js &
sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/nginx.conf && nginx -g 'daemon off;'

fg %1

