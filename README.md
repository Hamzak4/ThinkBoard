# 📝 MERN-ThinkBoard

MERN-ThinkBoard is a full-stack note-taking application built with the **MERN Stack (MongoDB, Express.js, React, Node.js)**. It allows users to create, view, update, and delete notes with a clean and responsive user interface powered by **Tailwind CSS** and **DaisyUI**.

To improve security and prevent abuse, the backend implements **Upstash Redis Rate Limiting**.

---

## ✨ Features

- 📄 Create, Read, Update, and Delete (CRUD) notes
- 📝 Notes contain a title and content
- 🎨 Modern UI built with Tailwind CSS & DaisyUI
- ⚡ Fast React frontend using Vite
- 🌐 RESTful API with Express.js
- 🍃 MongoDB database integration
- 🚦 Upstash Redis rate limiting to prevent API abuse
- 📱 Responsive design for desktop and mobile

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- DaisyUI
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis
- dotenv

---

## 📁 Project Structure

```
MERN-ThinkBoard/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/MERN-ThinkBoard.git

cd MERN-ThinkBoard
```

---

### 2. Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=5001

MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url

UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token

NODE_ENV=development
```

---

## ▶️ Running the Application

### Start the backend

```bash
cd backend
npm run dev
```

Backend runs on:

```
http://localhost:5001
```

---

### Start the frontend

Open another terminal.

```bash
cd frontend
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 📌 API Endpoints

| Method | Endpoint | Description |
|----------|----------------|------------------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a single note |
| POST | `/api/notes` | Create a note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

---

## 🚦 Rate Limiting

The backend uses **Upstash Redis** to limit excessive API requests and protect the application from abuse.

---

## 📦 Build for Production

### Frontend

```bash
npm run build
```

### Backend

```bash
npm start
```

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push to GitHub

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Hamza Khalid**
