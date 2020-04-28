
# Docker image with node in version 8.10 
FROM node:8.10

# Copy React app to Container
COPY ./frontend/ .

# Intalll node Packages
RUN npm install
 
# Finally runs the application
CMD [ "npm", "start" ]
