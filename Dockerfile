# Use Node 20 as the base image
FROM node:20

# Set working directory in the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the project
RUN npm run build

# Expose port 3000 (default for React)
EXPOSE 3000

# Start the React app using serve
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
