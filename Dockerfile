# Use a base image
FROM node:18.18.0
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .
RUN npm run build

# Expose the port
EXPOSE 3000

# Run the app
CMD [ "npm", "start" ]