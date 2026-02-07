import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import AddStudent from './pages/AddStudent';
import MarkAttendance from './pages/MarkAttendance';
import EnterMarks from './pages/EnterMarks';
import StudentReport from './pages/StudentReport';
import ViewAllStudents from './pages/ViewAllStudents';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/mark-attendance" element={<MarkAttendance />} />
        <Route path="/enter-marks" element={<EnterMarks />} />
        <Route path="/student-report" element={<StudentReport />} />
        <Route path="/all-students" element={<ViewAllStudents />} />
      </Routes>
    </Router>
  );
}

export default App;

