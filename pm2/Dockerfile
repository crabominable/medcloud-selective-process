# our base image
FROM node:14

# specify the port number the container should expose
EXPOSE 3001

# User user as root
USER root

# Create App
RUN mkdir /app

# Update Linux Packages
RUN apt-get update && apt-get upgrade -y
RUN apt-get install default-mysql-client -y

# Run update and Strongloop install
RUN npm install -g npm
RUN npm install -g pm2
RUN pm2 install pm2-logrotate
RUN pm2 start /app/pm2/config/pm2-production.json

RUN tail -f /dev/null