FROM node:18 as build

EXPOSE 3000

WORKDIR /app

# Copy package json and install dependencies
COPY ./package*.json ./

RUN npm install

# Copy source code to container
COPY . .

# Build source code
RUN npm run build

FROM node:18 as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json ./

RUN npm install --only=production

COPY . .

COPY --from=build ./app/dist ./dist

# Start server with production build
CMD ["node", "dist/main.js"]