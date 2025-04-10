# Use Node.js as base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Expose port 5173 (Vite's default dev port)
EXPOSE 3000

# Set host to allow external connections
ENV HOST=0.0.0.0

# Start dev server
CMD ["npm", "run", "dev"]