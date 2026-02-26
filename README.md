<div align="center">
  <h1>📚 Student Management CRUD Application</h1>
  <p>A full-stack MERN application for managing student records with complete CRUD functionality</p>
  
  <!-- Badges -->
  <p>
    <img src="https://img.shields.io/badge/MERN-Stack-blue?style=for-the-badge" alt="MERN Stack"/>
    <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react" alt="React"/>
    <img src="https://img.shields.io/badge/Node.js-22.0-339933?style=for-the-badge&logo=node.js" alt="Node.js"/>
    <img src="https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb" alt="MongoDB"/>
    <img src="https://img.shields.io/badge/Render-Deployed-46E3B7?style=for-the-badge&logo=render" alt="Render"/>
  </p>
  
  <!-- Live Demo Buttons -->
  <p>
    <a href="https://your-frontend-url.onrender.com" target="_blank">
      <img src="https://img.shields.io/badge/LIVE_DEMO-Frontend-4285F4?style=for-the-badge" alt="Frontend Demo"/>
    </a>
    <a href="https://your-backend-url.onrender.com" target="_blank">
      <img src="https://img.shields.io/badge/API-Backend-34A853?style=for-the-badge" alt="Backend API"/>
    </a>
    <a href="https://github.com/ImtiazAdar7/crud-app" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub"/>
    </a>
  </p>
</div>

---

## 👨‍💻 About The Developer

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="https://ui-avatars.com/api/?name=Imtiaz+Ahmed+Adar&size=100&background=0D8F81&color=fff&rounded=true" width="100px" alt="Developer"/>
      </td>
    </tr>
    <tr>
      <td align="center">
        <h3>Imtiaz Ahmed Adar</h3>
        <p>Full Stack Developer | MERN Specialist</p>
        <p>
          <a href="https://linkedin.com/in/imtiaz-ahmed-adar" target="_blank">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin" alt="LinkedIn"/>
          </a>
          <a href="https://github.com/ImtiazAdar7" target="_blank">
            <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github" alt="GitHub"/>
          </a>
          <a href="mailto:imtiazadarofficial@gmail.com">
            <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail" alt="Email"/>
          </a>
        </p>
      </td>
    </tr>
  </table>
</div>

---

## 📋 Project Overview

A comprehensive **Student Management System** that demonstrates full CRUD (Create, Read, Update, Delete) operations with a clean, responsive interface.

### ✨ Key Features

| Feature | Description |
|---------|-------------|
| **➕ Create** | Add new students with complete details |
| **📖 Read** | View all students in a sortable table |
| **✏️ Update** | Edit existing student information |
| **❌ Delete** | Remove student records |
| **🔍 Search** | Filter by first name, last name, or email |
| **📱 Responsive** | Works perfectly on all devices |

---

## 🏗️ Architecture

```mermaid
graph LR
    A[React Frontend] -->|API Calls| B[Node.js Backend]
    B -->|Mongoose ODM| C[(MongoDB Atlas)]
    style A fill:#61DAFB,stroke:#333,stroke-width:2px
    style B fill:#339933,stroke:#333,stroke-width:2px
    style C fill:#47A248,stroke:#333,stroke-width:2px
```

### 🛠️ Technology Stack
Backend Technologies  
├── 🟢 Node.js - JavaScript runtime environment  
├── ⚡ Express.js - Web application framework  
├── 🍃 MongoDB Atlas - Cloud database service  
├── 📦 Mongoose - MongoDB object modeling  
├── 🔐 UUID - Unique identifier generation  
├── 🔗 CORS - Cross-Origin Resource Sharing  
└── 🌐 dotenv - Environment variable management  

Frontend Technologies  
├── ⚛️ React 19 - UI library  
├── 🏃 Vite - Build tool and dev server  
├── 🚦 React Router DOM - Navigation and routing  
├── 📡 Axios - HTTP client for API requests  
└── 🎨 CSS3 - Styling and responsive design  

### 📁 Project Structure
📦 crud-app  
├── 📂 backend  
│   ├── 📂 config  
│   │   └── 📄 database.js  
│   ├── 📂 controllers  
│   │   └── 📄 student_controller.js  
│   ├── 📂 models  
│   │   └── 📄 student_model.js  
│   ├── 📂 routes  
│   │   └── 📄 student_routes.js  
│   ├── 📄 app.js  
│   ├── 📄 server.js  
│   └── 📄 package.json  
│
└── 📂 frontend  
    ├── 📂 src  
    │   ├── 📂 api  
    │   │   └── 📄 api.js  
    │   ├── 📂 pages  
    │   │   ├── 📄 AddStudent.jsx  
    │   │   ├── 📄 StudentList.jsx  
    │   │   └── 📄 UpdateStudent.jsx  
    │   ├── 📄 App.jsx  
    │   ├── 📄 main.jsx  
    │   └── 📄 index.css  
    ├── 📄 index.html  
    └── 📄 package.json  


### 🧪 Testing Your Deployed App
Test All CRUD Operations
| Operation | How to Test | Expected Result |
|-----------|-------------|-----------------|
| Create | Click "Add Student", fill form, submit | New student appears in list |
| Read | Load homepage | All students displayed |
| Update | Click "Update" on any student, modify, save | Changes reflected |
| Delete | Click "Delete" on any student | Student removed from list |
| Search | Type in search fields | List filters in real-time |


### 🔒 Security Best Practices
✅ Environment variables stored securely in Render

✅ .env files excluded from version control

✅ MongoDB connection string secured

✅ CORS properly configured

✅ Input validation on backend

### 📝 API Documentation
Base URL
```
https://your-backend-url.onrender.com/api
```

Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
|GET | /students | Get all students |
| GET | /students/:ID | Get single student |
| POST | /students | Add new student |
| PUT | /students/:ID | Update student |
| DELETE | /students/:ID | Delete student |

Sample Student Object
```
{
  "ID": "550e8400-e29b-41d4-a716-446655440000",
  "firstName": "Imtiaz",
  "lastName": "Adar",
  "email": "imtiazadar@example.com",
  "age": 25,
  "gender": "Male",
  "designation": "Software Engineer"
}
```

### 📄 License
<div align="center"> 
Copyright © 2026 Imtiaz Ahmed Adar

</div>

### 📞 Contact & Support
<div align="center"> <table> <tr> <td align="center"> <a href="https://linkedin.com/in/imtiaz-ahmed-adar"> <img src="https://img.shields.io/badge/Connect_on-LinkedIn-0077B5?style=for-the-badge&logo=linkedin" alt="LinkedIn"/> </a> </td> <td align="center"> <a href="https://github.com/ImtiazAdar7"> <img src="https://img.shields.io/badge/Follow_on-GitHub-181717?style=for-the-badge&logo=github" alt="GitHub"/> </a> </td> <td align="center"> <a href="mailto:imtiazadarofficial@gmail.com"> <img src="https://img.shields.io/badge/Send_Email-D14836?style=for-the-badge&logo=gmail" alt="Email"/> </a> </td> </tr> </table> <p>⭐ Star this repository if you found it helpful!</p> </div>
<div align="center"> <h3>🚀 Happy Coding!</h3> <p>Built with ❤️ by <strong>Imtiaz Ahmed Adar</strong></p> <p>© 2026 All Rights Reserved</p> </div>