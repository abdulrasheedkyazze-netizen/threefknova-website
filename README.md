# ThreeFkNova Website

This repository contains the Next.js website for ThreeFkNova, along with the Docker-based deployment files used on the server.

## Local development

Install dependencies and start the development server:

```bash
npm ci
npm run dev
```

The site will be available at `http://localhost:3000`.

## Environment variables

The production app uses environment variables for email, OpenAI, and lead integrations.

1. Copy `.env.example` to `.env`
2. Fill in the real values

The real `.env` file is intentionally ignored by git so secrets do not get committed.

## Production deployment

This repo includes a production `docker-compose.yml` for the website container and Traefik routing.

Typical deployment flow:

```bash
docker compose build
docker compose up -d
```

The compose file expects an external Docker network named `proxy`.

## Notes

- `Dockerfile` builds the Next.js app in standalone mode.
- `proxy.ts` sets security headers for requests.
- `deploy/index.html` preserves the earlier static holding page as a fallback artifact.
