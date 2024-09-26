# Stage 1: Development
FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

# Stage 2: Build
FROM development AS build

RUN npm run build

# Stage 3: Production
FROM nginx:alpine AS production

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]