FROM node:14-slim  
RUN mkdir /server 
WORKDIR /server  
COPY . .  
RUN npm install  
EXPOSE 5000 
CMD npm run dev