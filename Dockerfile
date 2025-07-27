# Fetching the minified node image on apline linux
FROM node:20-slim

# Setting up the work directory
WORKDIR /app

# Copying dependencies files in our project
COPY package.json .

# Installing dependencies
RUN npm install

# Copying dependencies files in our project
COPY . .

# Build the code
RUN npm run build

# Starting our application
CMD [ "node", "build/index.js" ]
