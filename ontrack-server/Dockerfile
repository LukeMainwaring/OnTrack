FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
# If you are running your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080

# TODO: consider running the following for production, requires research
# CMD ["node", "src/index.js"]
CMD ["nodemon", "src/index.js"]