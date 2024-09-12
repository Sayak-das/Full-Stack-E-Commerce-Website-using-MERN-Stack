# 🛒 Full-Stack E-Commerce Platform (MERN Stack)

This repository contains a full-featured **e-commerce platform** built using the **MERN stack** (MongoDB, Express, React, Node.js). The project includes customer and admin interfaces with seamless interaction between frontend and backend, and real-time updates.

## 🌟 Features

- **User Authentication**: JWT-based secure login/registration.
- **Product Management**: Browse, filter, and search products.
- **Shopping Cart & Checkout**: Add items to cart, secure checkout process.
- **Admin Dashboard**: Manage products, users, and orders.
- **Responsive Design**: Optimized for both desktop and mobile.
- **Payment Integration**: Secure payment processing.

## 🛠️ Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT
- **State Management**: Redux

## 🚀 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sayak-das/Full-Stack-E-Commerce-Website-using-MERN-Stack.git
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   # Frontend
   cd frontend
   npm install

   # Backend
   cd ../backend
   npm install
   ```

3. Set up environment variables in `backend/.env`:

   ```bash
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

4. Run the development servers:

   ```bash
   # Backend
   npm run dev

   # Frontend
   cd ../frontend
   npm start
   ```

5. Open `http://localhost:3000` to view the app.

## 📂 Project Structure

```bash
Full-Stack-E-Commerce/
├── admin/             # Admin panel built with React
├── backend/           # Express backend API
├── frontend/          # React frontend for users
└── README.md
```

## 🤝 Contributing

Feel free to submit issues or pull requests. Contributions are welcome!


