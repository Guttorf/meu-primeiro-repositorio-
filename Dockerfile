FROM node 

COPY main.js /home/node/app/

WORKDIR /home/node/app/

COPY . .

VOLUME . /home/node/app/