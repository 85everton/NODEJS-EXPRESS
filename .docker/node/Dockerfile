#imagem a ser usada
FROM node:20.11.1-alpine3.19

RUN ls -la
#instalando o bash
RUN apk add --no-cache bash

#setando uma enviroment
ENV NODE_ENV=development

#qual diretório vai executar
WORKDIR /home/node/app

COPY . .