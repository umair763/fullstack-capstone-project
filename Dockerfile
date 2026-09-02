FROM node:18-alpine

WORKDIR /app

# Install backend dependencies
COPY backend/package*.json ./backend/
RUN npm install --prefix backend --production

# Copy backend source
COPY backend/ ./backend/

# Copy frontend build
COPY frontend/build/ ./frontend/build/

EXPOSE 3060

CMD ["node", "backend/app.js"]

