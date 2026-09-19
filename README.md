# WINGS ENGINEERS ERP

Production-grade Manufacturing ERP tailored for WINGS ENGINEERS.

## Technology Stack

### Backend
* Java 21
* Spring Boot 3.3.x
* Spring Data JPA
* Spring Security (JWT based)
* PostgreSQL
* Flyway Migrations
* Maven
* OpenAPI (Swagger)

### Frontend
* React 18
* Vite
* TypeScript
* React Router DOM
* TanStack Query
* React Hook Form
* Axios
* Vanilla CSS / CSS Modules

## Setup Instructions

### Prerequisites
* Java 21+
* Node.js 18+
* PostgreSQL 15+
* Maven

### Database Setup
1. Create a PostgreSQL database named `wings_erp`
2. Create a user `postgres` with password `postgres` (or configure accordingly in `application-local.yml`).

### Backend Startup
1. Navigate to the `backend` directory: `cd backend`
2. Run the application: `mvn spring-boot:run -Dspring-boot.run.profiles=local`
3. Swagger UI will be available at: `http://localhost:8080/swagger-ui.html`

### Frontend Startup
1. Navigate to the `frontend` directory: `cd frontend`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. The application will be available at: `http://localhost:5173`

## Architecture & Coding Standards
* **Modular Backend Architecture:** Organized by business domains (e.g., `user`, `employee`, `auth`).
* **Strict Separation of Concerns:** Controllers handle HTTP and validation; Services handle business logic; Repositories handle persistence.
* **Standard API Responses:** All APIs return a consistent JSON structure (success, message, data).
* **Environment Variables:** Used for sensitive configurations (DB credentials, JWT secrets).

## Database Migrations
We use **Flyway**.
Never manually modify the production database structure.
All schema changes must be added as a new migration file in `backend/src/main/resources/db/migration/`.
