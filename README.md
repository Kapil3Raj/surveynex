📝 SurveyNex – User Registration Waitlist
A full-stack user registration system for SurveyNex internship task. Built with React frontend and Express + MongoDB backend, with real-time CSV export of all registrants.

🚀 Features
✅ Responsive registration form

✅ Form animations with Framer Motion

✅ Data storage in MongoDB

✅ Automatic CSV file creation & updating

✅ Field validations

✅ Success message & error handling

🖥️ Tech Stack
Layer	Technology
Frontend	React, Framer Motion
Backend	Express.js, Node.js
Database	MongoDB + Mongoose
File Storage	CSV via fs module

📂 Folder Structure
surveynex/
├── client/           # React frontend
│   └── RegisterForm.jsx
├── server/           # Node.js backend
│   ├── models/User.js
│   ├── routes/register.js
│   ├── utils/writeToCSV.js
│   └── index.js
└── users.csv         # Auto-generated file
🛠️ Getting Started
1. Clone the Repository
git clone https://github.com/yourusername/surveynex.git
cd surveynex

3. Setup Backend
cd server
npm install

Create a .env file with your MongoDB URI:   MONGO_URI=your_mongodb_connection_string

Start the backend:
npm start

3. Setup Frontend

cd ../client
npm install
npm run dev

📄 Output
User data will be saved to both MongoDB and users.csv file (auto-created if not present).
