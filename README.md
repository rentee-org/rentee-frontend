# Rentee System

Rentee is a platform that allows users to rent out items such as generators and other infrequently used equipment. This monorepo contains both the backend and frontend applications.

---

## 📁 Project Structure

```
/
├── backend/        # NestJS backend with PostgreSQL and Docker
├── frontend/       # React + Vite + TypeScript + Tailwind frontend
├── .gitignore
├── README.md
└── docker-compose.yml (if applicable)
```

---

## 🛠 Tech Stack

### Backend
- Node.js with NestJS (TypeScript)
- PostgreSQL
- TypeORM
- Docker
- JWT Authentication
- Role-based Access Control (RBAC)

### Frontend
- (Coming Soon) React or other frontend framework

---

## 🚀 Getting Started

### Backend

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Start the development server:
   ```bash
   yarn start:dev
   ```

4. Run Docker (if applicable):
   ```bash
   docker-compose up --build
   ```

### Frontend

_(To be added)_

---

## ⚙️ Environment Variables

- The backend uses a `.env` file to manage environment-specific variables.
- Example `.env` (located in `/backend/.env`):

  ```env
  DATABASE_URL=postgres://user:password@localhost:5432/rentee
  JWT_SECRET=your_secret
  ```

---

## 📦 CI/CD

- GitHub Actions used for continuous integration.
- Dockerized deployment planned for DigitalOcean.

---

## 🧠 Author

- **Godswill David** – Backend & DevOps Lead

**Built with ❤️ by the Rentee Team**

---

## 📄 License

This project is licensed under the MIT License.

