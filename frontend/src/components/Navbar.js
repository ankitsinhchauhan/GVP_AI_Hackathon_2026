import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📊 AI Attendance Tracker
        </Link>
        <div className="nav-menu">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/add-student" className="nav-link">
            Add Student
          </Link>
          <Link to="/mark-attendance" className="nav-link">
            Mark Attendance
          </Link>
          <Link to="/enter-marks" className="nav-link">
            Enter Marks
          </Link>
          <Link to="/student-report" className="nav-link">
            Student Report
          </Link>
          <Link to="/all-students" className="nav-link">
            View Students
          </Link>
        </div>
      </div>
    </nav>
  );
}
