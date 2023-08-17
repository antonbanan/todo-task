FROM node:lts-alpine

# Create and change to the app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm","run", "todo-front:dev:docker"]
# CMD ["npm","run", "start-todo-front"]
