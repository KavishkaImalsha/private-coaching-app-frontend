# Full-Stack Authentication & UI Implementation

This project is a full-stack application built to accurately replicate a provided UI/UX design while implementing a secure, robust backend. The system features a responsive frontend developed with Next.js and a Node.js/Express backend that handles user authentication via Google OAuth and JWT (JSON Web Tokens).

## 🚀 Live Demos

* **Frontend (Vercel):** https://private-coaching-app-frontend-hbkx.vercel.app/login
* **Backend (Render):** https://private-coaching-app-backend.onrender.com

## 🔗 Repositories

* **Frontend Repository:** https://github.com/KavishkaImalsha/private-coaching-app-frontend.git
* **Backend Repository:** https://github.com/KavishkaImalsha/private-coaching-app-backend.git

## ✨ Key Features

* **Pixel-Perfect UI:** Closely matches the provided design requirements with responsive behavior across mobile and desktop environments.
* **Secure Authentication:** Integrates Google Login/Signup flow for seamless user onboarding.
* **JWT Session Management:** The backend generates and securely transmits JSON Web Tokens to the frontend for stateless authentication handling.
* **Clean Architecture:** Built with modular, reusable components and best coding practices for maintainability.
* **Cross-Origin Resource Sharing (CORS):** Fully configured to allow seamless data flow between the Vercel frontend and Render backend.

## 🛠️ Technology Stack

**Frontend**
* Next.js
* Tailwindcss
* Flowbites UI

**Backend**
* Node.js & Express.js
* JSON Web Token (JWT) for authorization
* Google OAuth 2.0 (via Google Cloud Console)
* MongoDB
* Axios

---

## 💻 Local Setup Instructions

Follow these steps to get the project running locally on your machine.

### Prerequisites
* Node.js installed (v18+ recommended)
* npm or yarn package manager
* A Google Cloud Console project set up with OAuth credentials.

### 1. Frontend Setup

1. Clone the frontend repository:
```bash
   git clone https://github.com/KavishkaImalsha/private-coaching-app-frontend.git
   cd private-coaching-app-frontend

2. Install dependencies:
```bash
    npm install

3. Create a .env.local file in the root of the frontend directory:

    NEXT_PUBLIC_API_URL=http://localhost:5001
    NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
    
4. Start the development server:
```bash
    npm run dev

    The frontend should now be running on http://localhost:3000.

### 2. Backend Setup

1. Clone the backend repository:
```bash
   git clone https://github.com/KavishkaImalsha/private-coaching-app-backend.git
   cd private-coaching-app-backend

2. Install dependencies:
```bash
    npm install

3. Create a .env.local file in the root of the backend directory:
    PORT=5001
    JWT_SECRET=your_super_secret_jwt_key
    GOOGLE_CLIENT_ID=your_google_client_id
    MONGO_URI=your_database_connection_string
    
4. Start the development server:
```bash
    npm run dev

    The backend should now be running on http://localhost:5001.

