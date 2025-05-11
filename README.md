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

## 🚀 Live Demo

Explore the live version of MediSwift:

- **Frontend:** [Live Link](https://medi-swift-frontend.vercel.app)
- **Admin Panel:** [Live Link](https://medi-swift-admin.vercel.app)

> **Note:** Use the following credentials to access the Admin Panel:  
> - **Email:** admin@gmail.com  
> - **Password:** admin123

---

## 🛠️ Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (local or cloud, e.g., MongoDB Atlas)
- Cloudinary account (for image hosting)
- Stripe account (for payment processing)

### Clone the Repository
```bash
git clone https://github.com/ZaidRehmannn/MediSwift.git
cd MediSwift
```

### Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the backend directory with the following variables:
```
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```
Run the backend server:
```bash
npm run server
```

### Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
```

### Access the Application
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000`
- Admin Panel: `http://localhost:5174`
