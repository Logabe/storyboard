# Use official Node.js image to install dependencies
FROM node:20 AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .

# Build step (if you have a build process, uncomment below)
# RUN npm run build

# Use official Nginx image for serving static files
FROM nginx:alpine
COPY --from=build /app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
