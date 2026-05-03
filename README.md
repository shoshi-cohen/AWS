
# Riact-Node-Project 🌐

A Full Stack application built with React (frontend) and Node.js + Express (backend), using MongoDB as the database.

## 🧩 Technologies Used

### Frontend:

* React
* Axios
* CSS/HTML

### Backend:

* Node.js
* Express
* MongoDB
* Mongoose

## ✨ Features

* User interface built with React
* RESTful API built with Express
* Create, Read, Update, Delete (CRUD) functionality
* Persistent data storage using MongoDB
* Modular folder structure

## 📁 Project Structure

```
Riact-Node-Project/
│
├── client/           # React app (Frontend)
│   ├── src/
│   │   ├── components/
│   │   └── App.js
│   └── package.json
│
├── server/           # Express server (Backend)
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

## ▶️ Getting Started

### Prerequisites

* Node.js
* npm or yarn
* MongoDB installed locally or MongoDB Atlas

### 1. Clone the repository

```bash
git clone https://github.com/Racheli2/Riact-Node-Project.git
cd Riact-Node-Project
```

### 2. Install dependencies

For the **backend**:

```bash
cd server
npm install
```

For the **frontend**:

```bash
cd ../client
npm install
```

### 3. Set up MongoDB

Make sure MongoDB is running locally, or update the connection string in `server/server.js` to your MongoDB Atlas URI.

### 4. Run the project

In **two terminals**, run:

**Backend**:

```bash
cd server
npm start
```

**Frontend**:

```bash
cd client
npm start
```

The frontend will be available at `http://localhost:3000`
The backend will run on `http://localhost:5000` (or as configured)

## 🛠 Future Improvements

* Add user authentication (JWT)
* Improve UI/UX with styled-components or Material UI
* Add deployment scripts for Heroku/Vercel
* Form validation and error handling

## 📄 License

This project is licensed under the MIT License.
