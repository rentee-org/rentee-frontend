# Rentee System Backend

## Overview
The **Rentee System Backend** is a **NestJS-based monolithic API** for a peer-to-peer rental marketplace. Built with **Node.js (NestJS, TypeScript), PostgreSQL, and Docker**, it supports **scalable deployments on DigitalOcean** with **GitHub Actions for CI/CD**.

---

## Project Structure
```
rentee-backend/
│── src/                      # Source code
│   ├── auth/                 # Authentication & Authorization
│   ├── common/               # Common utilities, DTOs, interfaces
│   ├── config/               # Configuration & environment management
│   ├── database/             # Database connection & migrations
│   ├── modules/              # Feature modules (users, rentals, payments, etc.)
│   ├── app.module.ts         # Root module
│   ├── main.ts               # Entry point
│── test/                     # Tests
│── docker-compose.yml        # Docker setup
│── .github/workflows/ci-cd.yml  # GitHub Actions
│── .env                      # Environment variables
│── .gitignore                # Ignore files
│── Dockerfile                # Docker build config
│── package.json              # Dependencies
│── yarn.lock                 # Yarn lock file
│── tsconfig.json             # TypeScript config
│── nest-cli.json             # NestJS config
```

---

## Getting Started
### Prerequisites
- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Docker & Docker Compose](https://docs.docker.com/get-docker/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Git](https://git-scm.com/downloads)

### Setup & Run
```sh
git clone https://github.com/king1edy/rentee.git
cd rentee-backend
yarn install
cp .env.example .env
```
Edit `.env` to configure database credentials.

Run the project locally:
```sh
yarn start:dev
```

Run with Docker:
```sh
docker-compose up --build
```
Apply database migrations:
```sh
docker-compose exec rentee-api yarn typeorm migration:run
```

---

## Testing
```sh
yarn test
```

---

## CI/CD with GitHub Actions
### Deployment
1. Push changes to `main` or `develop` to trigger CI/CD.
```sh
git push origin main
```
2. GitHub Actions builds, tests, and pushes a Docker image.
3. Image is deployed to **DigitalOcean Droplet**.

### DigitalOcean Setup
1. Create a DigitalOcean Droplet (Ubuntu 22.04).
2. Install Docker & Docker Compose:
```sh
sudo apt update && sudo apt install docker.io docker-compose -y
```

---

## API Documentation
- **Swagger UI**: [http://localhost:4000/swagger](http://localhost:4000/swagger)

---

## Contribution Guide
1. **Fork the repository**.
2. **Create a feature branch**:
```sh
git checkout -b feature-name
```
3. **Make changes and commit**:
```sh
git commit -m "Added feature XYZ"
```
4. **Push and create a Pull Request**.

---

## Contact & Support
For issues or feature requests, create an issue on GitHub. 🚀

