# Use the official Node.js image as the base image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy all application files to the working directory
COPY . .

# Install live-server globally
RUN npm install -g live-server

# Expose the port the app runs on
EXPOSE 3000

# Start the application using live-server
CMD ["npx", "live-server", "--port=3000", "--host=0.0.0.0"]