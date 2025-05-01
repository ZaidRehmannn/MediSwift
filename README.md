# MediSwift

## 🩺 Project Description

**MediSwift** is a full-stack web application designed to revolutionize how people access essential medications. The platform offers a seamless online experience for browsing, ordering, and securely purchasing medicines, delivering them directly to users’ doorsteps. 

Built with the MERN stack, MediSwift simplifies the traditional pharmacy experience by removing physical barriers, improving accessibility, and ensuring convenience. From secure user authentication to real-time order management, the system is designed with a strong focus on performance, usability, and data security. It supports both customers and administrators through tailored interfaces and role-based access controls.

---

## ✅ Features & Functionalities

### 🔐 User Authentication & Authorization
- Secure sign-up and login with password hashing (`bcrypt`)
- Role-based access: Customer vs. Admin
- JWT-based session management

### 🛒 Medicine Store & Product Management
- Browse a full catalog of medicines with images, prices, and descriptions
- Admins can add, edit, delete, and manage medicine listings (CRUD)

### 🧺 Shopping Cart & Checkout
- Add items to a cart with quantity controls
- View total cost before checkout
- Modify or remove cart items

### 💳 Online Payments
- Stripe integration for secure payment processing
- Payment summary and confirmation

### 📦 Order History & Admin Control
- Users can view past orders and details
- Admins can manage all user orders and update statuses

### 🌐 Responsive User Interface
- Clean, mobile-first design using Tailwind CSS
- Consistent layout across all device sizes

### ☁️ Media & Image Handling
- Cloudinary integration for product image upload and storage

### 🔔 Notifications
- Real-time feedback using React Toastify (e.g., login success, order confirmation)

---

## 🧰 Technology Stack

### 💻 Frontend
- **React.js** – Component-based UI library
- **React Router** – SPA routing and navigation
- **Tailwind CSS** – Utility-first responsive design
- **Axios** – HTTP client for frontend-backend communication
- **React Toastify** – Toast message notification system

### 🖥️ Backend
- **Node.js** – JavaScript runtime environment
- **Express.js** – Web framework for building RESTful APIs

### 🗃️ Database
- **MongoDB** – NoSQL database for storing user, product, and order data
- **Mongoose** – ODM for schema-based data modeling

### 🔐 Authentication & Security
- **JWT (JSON Web Tokens)** – Token-based session and access control
- **bcrypt.js** – Password hashing
- **dotenv** – Environment variable configuration

### ☁️ Cloud Services
- **Cloudinary** – Image upload, storage, and optimization
- **Stripe API** – Online payment processing

---

## 🌍 Live Demo

- 🚀 **Live Site**: [https://mediswift.vercel.app](https://mediswift.vercel.app)

---

