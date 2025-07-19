# Subscription Tracker (Express.js)

A subscription management API built with **Node.js**, **Express.js**, and **MongoDB**.  
This application allows users to manage subscriptions, send email reminders, and track payment details.

---

## Features

- **User Authentication** (JWT-based login/signup)
- **Subscription Management**  
  - Create, update, delete, and fetch subscriptions.
- **Email Reminders** using **Nodemailer**.
- **MongoDB** for persistent storage.
- **Middleware Support** (Arcjet for security, error handlers).
- **Postman-ready REST API**.

---

## Tech Stack

- **Node.js** (Runtime)
- **Express.js** (API framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **Nodemailer** (Email notifications)
- **Day.js** (Date formatting)
- **dotenv** (Environment configuration)

---

## Folder Structure

subscription_express_js/
│
├── config/
│ ├── env.js
│ ├── nodemailer.js
│ ├── arcjet.js
│
├── controller/
│ ├── auth.controller.js
│ ├── subscription.controller.js
│ └── user.controller.js
│
├── middleware/
│ ├── arcjet.middleware.js
│ ├── auth.middleware.js
│ └── error.middleware.js
│
├── models/
│ ├── subscription.model.js
│ └── user.model.js
│
├── routes/
│ ├── auth.routes.js
│ ├── subscription.routes.js
│ └── user.routes.js
│
├── utils/
│ ├── email-template.js
│ └── send-email.js
│
├── app.js
├── package.json
└── README.md


---

## Getting Started

### **1. Clone the repository**
```bash
git clone https://github.com/likithaa01/subscription_express_js.git
cd subscription_express_js

install Dependencies
npm install
