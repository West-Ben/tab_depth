# Use Node.js LTS version as the base image
FROM node:20-slim

# Set working directory
WORKDIR /app

# Install OpenSSL for certificate generation
RUN apt-get update && apt-get install -y openssl

# Create SSL certificate
RUN mkdir -p /app/certificates && \
    openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /app/certificates/private.key \
    -out /app/certificates/certificate.crt \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["npm", "run", "dev"]
