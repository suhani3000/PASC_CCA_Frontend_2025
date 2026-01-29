# Frontend Setup Guide

This guide details the steps to set up the **Frontend** application locally.

## Prerequisites
- **Node.js**: (v18 or higher recommended)
- **npm** or **yarn** or **pnpm**

---

## Setup & Running

The frontend is a Next.js application running on Port **3001**.

### 1. Installation
Navigate to the project directory and install dependencies:
```bash
npm install
```

### 2. Running Locally
Start the development server:
```bash
npm run dev
```
- The application will run on: **http://localhost:3001**

### 3. Environment Variables
Ensure you have a `.env.local` file (if required) to point to the backend:
```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api
```
*(Note: Backend port defaults to 4000)*
