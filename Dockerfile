# syntax=docker/dockerfile:1

# ---- Stage 1: build the static site ----
FROM node:24-alpine AS build
WORKDIR /app

# Formspree form id is baked into the client bundle at build time (Vite inlines VITE_* vars).
# It's a public id, not a secret — pass with: docker build --build-arg VITE_FORMSPREE_ID=xxxx
ARG VITE_FORMSPREE_ID=""
ENV VITE_FORMSPREE_ID=$VITE_FORMSPREE_ID

COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# ---- Stage 2: serve with nginx ----
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
