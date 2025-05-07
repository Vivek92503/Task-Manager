
# Task Management System

A full-stack Task Management System for small teams to manage, assign, and track tasks efficiently. Built using **Next.js**, **Express.js**, and **MongoDB** with features like authentication, task CRUD, user assignment, and filtering.


# 📝 Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Deployment](#deployment)
- [Notes](#notes)
- [License](#license)
- [Acknowledgements](aAcknowledgements)

# 📌 Introduction

This application is designed to help teams organize tasks, assign responsibilities, track deadlines, and streamline collaboration in a simple yet effective interface. It supports user authentication, team-based task assignments, and customizable filters for improved task visibility.


# 🚀 Features

- 🔐 User Authentication (Register/Login)
- 🧾 Full CRUD for Tasks (Create, Read, Update, Delete)
- 📤 Assign Tasks to Other Team Members
- 🔔 Notification on Task Assignment
- 📋 Dashboard with Created, Assigned & Overdue Tasks
- 🔍 Search by Title/Description
- 🧰 Filter by Status, Priority, Due Date


# 🛠️ Technologies Used

- Frontend: **Next.js**, **Tailwind CSS**
- Backend: **Node.js**, **Express.js**
- Database: **MongoDB**
- Hosting: **Vercel (Frontend)**, **Render (Backend)**


# 🧱 Tech Stack

| Layer      | Technology       |
|------------|------------------|
| Frontend   | Next.js, React, Tailwind CSS |
| Backend    | Express.js (Node.js) |
| Database   | MongoDB (via Mongoose) |
| Auth       | JWT (JSON Web Tokens) |
| Hosting    | Vercel (FE), Render (BE) |


# 📁 Folder Structure

```
task-manager-fullstack/
│
├── backend/
│   ├── server.js
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   └── .env.example
│
├── frontend/
│   ├── pages/
│   ├── components/
│   ├── styles/
│   ├── public/
│   └── .env.local.example
│
└── README.md
```


# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/task-manager-fullstack.git
cd task-manager-fullstack
```

## 2. Backend Setup (Express.js)

```bash
cd backend
npm install
```

* Create `.env` file from `.env.example` and fill in:

```env
PORT=10000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

* Start backend server:

```bash
node server.js
```

## 3. Frontend Setup (Next.js)

```bash
cd frontend
npm install
```

* Create `.env.local` file from `.env.local.example` and fill in:

```env
NEXT_PUBLIC_API_URL=http://localhost:10000
```

* Start frontend:

```bash
npm run dev
```

---

# ☁️ Deployment

## Backend (Render)

1. Create a new Web Service.
2. Link GitHub repo → backend folder.
3. Set environment variables: `MONGODB_URI`, `PORT`, `JWT_SECRET`.
4. Build command: `npm install`
5. Start command: `node server.js`

## Frontend (Vercel)

1. Create a new Vercel project from the repo → frontend folder.
2. Add `NEXT_PUBLIC_API_URL` as the Render backend URL.
3. Deploy!


# 📝 Note

* This project is built with a fresher-friendly architecture and simple implementation.
* AI tools were used to generate boilerplate and enhance productivity.
* Further improvements like RBAC, WebSocket notifications, and tests can be added later.


# 🧾 License

This project is licensed under the MIT License — you're free to use, modify, and distribute it.


# 🙌 Acknowledgements

* OpenAI for code assistance
* MongoDB Atlas for DB hosting
* Render and Vercel for free deployments
