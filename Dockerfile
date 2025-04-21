# === Base Image ===
FROM node:18 AS base

# === Create a working folder ===
WORKDIR /app

# === Install Backend Dependencies ===
FROM base AS backend-deps
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install

# === Install Frontend Dependencies ===
FROM base AS frontend-deps
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install

# === Build Frontend ===
FROM frontend-deps AS frontend-build
COPY frontend ./
RUN npm run build

# === Final Image to deploy (multi-stage build - Only copy what's absolutely needed to run the app in prod after building above)===
FROM base AS production
WORKDIR /app

# Copy backend
COPY --from=backend-deps /app/backend ./backend

# Copy frontend build output
COPY --from=frontend-build /app/frontend/out ./frontend/out

# Install backend dependencies
WORKDIR /app/backend

# Copy backend source
COPY backend ./

EXPOSE 5000

CMD ["npm", "start"]
