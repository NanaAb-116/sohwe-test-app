# Sohwe test app

Tiny Node HTTP server for testing [Sohwe](https://github.com/) (or similar) deploys: **Dockerfile at repo root**, listens on **0.0.0.0:3000**.

## Run locally

```bash
node server.js
# open http://127.0.0.1:3000
```

## Run with Docker

```bash
docker build -t sohwe-test-app .
docker run --rm -p 3000:3000 sohwe-test-app
```

## Use in Sohwe

Create an app with this repo’s **public** URL, branch `main`, container port **3000**.
