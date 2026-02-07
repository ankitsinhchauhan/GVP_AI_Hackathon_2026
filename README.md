# AI Smart Attendance & Performance Tracker

A comprehensive MERN stack web application designed to manage student attendance and performance with AI-assisted logic. This system automatically calculates attendance percentages, warns about attendance shortages, and provides performance remarks based on marks.

## 🎯 Features

### 1. **Student Management**
- Add new students with Roll Number, Name, and Semester
- View complete list of all registered students
- Store and manage student information efficiently

### 2. **Attendance Management**
- Track total lectures and attended lectures for each student
- Automatically calculate attendance percentage
- AI-assisted warning system: Shows "Attendance Shortage" warning if attendance < 75%

### 3. **Performance Management**
- Record student marks (out of 100)
- AI-assisted performance remark system:
  - **≥ 75 marks** → "Good"
  - **50-74 marks** → "Average"
  - **< 50 marks** → "Needs Improvement"

### 4. **Comprehensive Reporting**
- View detailed student reports with:
  - Student information
  - Attendance details with percentage and status
  - Performance marks and remarks
  - All data in a clean, organized format

## 🏗️ Technology Stack

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing
- **Nodemon** - Development tool for auto-reload

### Frontend
- **React.js** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with gradients and animations

## 📁 Folder Structure

```
GVP_AI_Hackathon_2026/
│
├── backend/
│   ├── config/
│   │   └── database.js           # MongoDB connection configuration
│   ├── models/
│   │   └── Student.js            # Student schema
│   ├── controllers/
│   │   └── studentController.js  # Business logic and request handlers
│   ├── routes/
│   │   └── studentRoutes.js      # API endpoints
│   ├── helpers/
│   │   └── studentHelper.js      # AI logic helper functions
│   ├── server.js                 # Main server file
│   ├── package.json              # Backend dependencies
│   └── .env                      # Environment variables
│
└── frontend/
    ├── public/
    │   ├── index.html
    │   └── manifest.json
    ├── src/
    │   ├── components/
    │   │   └── Navbar.js          # Navigation component
    │   ├── pages/
    │   │   ├── Home.js                # Landing page
    │   │   ├── AddStudent.js          # Add student form
    │   │   ├── MarkAttendance.js      # Mark attendance form
    │   │   ├── EnterMarks.js          # Enter marks form
    │   │   ├── StudentReport.js       # View student report
    │   │   └── ViewAllStudents.js     # View all students
    │   ├── services/
    │   │   └── apiService.js      # Axios API call wrapper
    │   ├── styles/
    │   │   ├── App.css
    │   │   ├── Navbar.css         # Navigation styles
    │   │   ├── Pages.css          # Form and report styles
    │   │   └── Home.css           # Home page styles
    │   ├── App.js                 # Main app with routes
    │   ├── App.css
    │   ├── index.js
    │   └── index.css
    ├── package.json               # Frontend dependencies
    ├── .env                       # Environment variables
    └── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running locally or connection string ready)
- npm or yarn

### Backend Setup

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables:**
   - Open `.env` file and verify MongoDB URI:
   ```env
   MONGO_URI=mongodb://localhost:27017/gvp_ai_attendance
   PORT=5000
   NODE_ENV=development
   ```

4. **Start the backend server:**
   ```bash
   npm run dev
   ```
   - Server will run on `http://localhost:5000`
   - Health check endpoint: `http://localhost:5000/api/health`

### Frontend Setup

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure environment variables (optional):**
   - `.env` file is configured for `http://localhost:5000/api`

4. **Start the development server:**
   ```bash
   npm start
   ```
   - Application will open on `http://localhost:3000`

## 📚 API Endpoints

### Base URL
```
http://localhost:5000/api
```

### Student Management

#### 1. Add a New Student
- **Endpoint:** `POST /students/add`
- **Body:**
  ```json
  {
    "rollNo": "001",
    "name": "John Doe",
    "semester": 4
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Student added successfully",
    "student": { /* student object */ }
  }
  ```

#### 2. Get All Students
- **Endpoint:** `GET /students`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Students fetched successfully",
    "students": [ /* array of students */ ]
  }
  ```

#### 3. Update Attendance
- **Endpoint:** `POST /students/attendance/:rollNo`
- **Body:**
  ```json
  {
    "totalLectures": 30,
    "attendedLectures": 25
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Attendance updated successfully",
    "attendancePercentage": 83.33,
    "attendanceWarning": "Attendance is good"
  }
  ```

#### 4. Update Marks
- **Endpoint:** `POST /students/marks/:rollNo`
- **Body:**
  ```json
  {
    "marks": 85
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "message": "Marks updated successfully",
    "performanceRemark": "Good"
  }
  ```

#### 5. Get Student Report
- **Endpoint:** `GET /students/report/:rollNo`
- **Response:**
  ```json
  {
    "success": true,
    "message": "Student report fetched successfully",
    "report": {
      "rollNo": "001",
      "name": "John Doe",
      "semester": 4,
      "totalLectures": 30,
      "attendedLectures": 25,
      "attendancePercentage": 83.33,
      "attendanceWarning": "Attendance is good",
      "marks": 85,
      "performanceRemark": "Good"
    }
  }
  ```

## 🎨 Frontend Pages

### 1. **Home Page**
- Landing page with feature overview
- Navigation cards to different sections
- Information about the system
- Evaluation criteria

### 2. **Add Student**
- Form to add new students
- Fields: Roll Number, Name, Semester
- Success/error messages

### 3. **Mark Attendance**
- Form to update attendance for a student
- Fields: Roll Number, Total Lectures, Attended Lectures
- Displays attendance percentage and warning if needed

### 4. **Enter Marks**
- Form to record student marks
- Fields: Roll Number, Marks (0-100)
- Displays performance remark automatically

### 5. **Student Report**
- Search student by roll number
- Displays comprehensive report with:
  - Student info
  - Attendance details
  - Performance metrics

### 6. **View All Students**
- Table view of all registered students
- Shows basic information
- Refresh button to reload data

## 🧠 AI Logic Implementation

### Attendance Warning Logic
```javascript
if (attendancePercentage < 75) {
  return "Attendance Shortage"
} else {
  return "Attendance is good"
}
```

### Performance Remark Logic
```javascript
if (marks >= 75) {
  return "Good"
} else if (marks >= 50 && marks < 75) {
  return "Average"
} else {
  return "Needs Improvement"
}
```

## 🔧 Development

### Running Backend in Development
```bash
cd backend
npm run dev
```
Uses Nodemon for auto-reload on file changes.

### Running Frontend in Development
```bash
cd frontend
npm start
```
Uses React Scripts for development with hot reload.

### Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```
Creates optimized build in `build/` folder.

## 🐛 Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running on `localhost:27017`
- Check MONGO_URI in backend `.env` file
- Verify MongoDB service is active

### API Connection Failed
- Backend must be running on port 5000
- Check `REACT_APP_API_BASE_URL` in frontend `.env`
- Verify CORS is enabled in backend

### Port Already in Use
- Change port in backend `.env` file
- Update API URL in frontend `.env` accordingly

## 📝 Data Model

### Student Schema
```javascript
{
  rollNo: String (unique, required),
  name: String (required),
  semester: Number (required),
  totalLectures: Number (default: 0),
  attendedLectures: Number (default: 0),
  marks: Number (0-100, default: 0),
  timestamps: true
}
```

## 🎓 Usage Example

1. **Access the application** at `http://localhost:3000`
2. **Click "Add Student"** to register a new student with rollNo "001", name "John Doe", semester 4
3. **Click "Mark Attendance"** to update: Total 30, Attended 25 (83.33%)
4. **Click "Enter Marks"** to record: 85 marks
5. **Click "Student Report"** to view the complete report with all metrics
6. **Click "View Students"** to see all registered students in a table

## 📄 License

This project is created for GVP AI Hackathon 2026.

## 👨‍💻 Author

Created with ❤️ for AI Smart Attendance & Performance Tracking System

---

**Happy Tracking! 📊**
