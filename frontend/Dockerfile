FROM node:20-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Install dockerize to wait for backend to be ready
RUN apk add --no-cache wget \
  && wget -q https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-v0.6.1.tar.gz \
  && rm dockerize-linux-amd64-v0.6.1.tar.gz


# Build the Next.js app
RUN npm run build

# Wait for backend to be ready, then start frontend
CMD dockerize -wait tcp://workvite-backend:8080 -timeout 20s npm start
