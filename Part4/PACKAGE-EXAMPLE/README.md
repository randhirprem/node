## 📦 PACKAGE-EXAMPLES

### 📖 Overview
PACKAGE-EXAMPLES is a Node.js project that demonstrates how to use npm packages like axios to make HTTP requests. This project was built as part of an Udemy course to explore package management, dependency handling, and script execution using npm.

### 📂 Project Structure
pgsql
Copy
Edit
PACKAGE-EXAMPLES/
│── request.js
│── package.json
│── README.md
│── node_modules/ (generated when installing dependencies)

### 🛠️ Setup & Installation
**1️⃣ Clone the Repository**
sh
Copy
Edit
git clone <https://github.com/randhirprem/node.git>
cd package-example

**2️⃣ Install Dependencies**
Run the following command to install project dependencies:

sh
Copy
Edit
npm install
This will install:

axios → For making HTTP requests.
nodemon → For automatic server restarts during development.
🚀 Usage
🔹 Run the Project
sh
Copy
Edit
npm start
This executes:

sh
Copy
Edit
node request.js
**🔹 Run in Development Mode (with nodemon)**
sh
Copy
Edit
npm run dev
This automatically restarts the app whenever changes are detected.

### 📜 File Descriptions
**1️⃣ request.js (Handles HTTP Requests)**
This file uses axios to fetch data from a [URL](<https://www.google.com>) and logs the response.

**2️⃣ package.json (Project Metadata & Scripts)**
This file defines:

Project name, version, and description.
Dependencies (axios, nodemon).
Useful npm scripts (start, dev).
Key npm Scripts:
Command Description
npm start Runs request.js using Node.js.
npm run dev Runs request.js using nodemon for auto-restart.

### 📝 License
This project is licensed under the ISC License.
