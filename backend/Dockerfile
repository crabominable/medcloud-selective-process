FROM node:lts

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node package*.json ./

RUN npm install

COPY --chown=node . .

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}

RUN npx prisma generate

CMD ["npm", "run", "dev"]