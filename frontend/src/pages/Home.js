import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>🎓 AI Smart Attendance & Performance Tracker</h1>
        <p className="subtitle">
          Manage student attendance and performance with AI-assisted logic
        </p>

        <div className="features-grid">
          <div className="feature-card">
            <h3>👥 Student Management</h3>
            <p>Add and manage student information with roll number, name, and semester details.</p>
            <Link to="/add-student" className="feature-link">
              Add Student →
            </Link>
          </div>

          <div className="feature-card">
            <h3>📋 Attendance Tracking</h3>
            <p>Track total and attended lectures with automatic percentage calculation and shortage warnings.</p>
            <Link to="/mark-attendance" className="feature-link">
              Mark Attendance →
            </Link>
          </div>

          <div className="feature-card">
            <h3>📊 Performance Tracking</h3>
            <p>Record marks out of 100 with automatic performance remarks (Good, Average, Needs Improvement).</p>
            <Link to="/enter-marks" className="feature-link">
              Enter Marks →
            </Link>
          </div>

          <div className="feature-card">
            <h3>📈 Detailed Reports</h3>
            <p>Generate comprehensive student reports with attendance and performance metrics.</p>
            <Link to="/student-report" className="feature-link">
              View Report →
            </Link>
          </div>

          <div className="feature-card">
            <h3>👁️ View All Students</h3>
            <p>See a complete list of all registered students with their basic information.</p>
            <Link to="/all-students" className="feature-link">
              View All →
            </Link>
          </div>
        </div>

        <div className="info-section">
          <h2>How It Works</h2>
          <div className="steps">
            <div className="step">
              <span className="step-number">1</span>
              <p>Add student details (Roll Number, Name, Semester)</p>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <p>Mark attendance for each lecture</p>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <p>Enter student marks</p>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <p>Generate comprehensive reports with AI-assisted insights</p>
            </div>
          </div>
        </div>

        <div className="rules-section">
          <h2>Evaluation Criteria</h2>
          <div className="rules-grid">
            <div className="rule">
              <h4>📌 Attendance</h4>
              <ul>
                <li>≥ 75% → Normal</li>
                <li>&lt; 75% → Shortage Warning</li>
              </ul>
            </div>
            <div className="rule">
              <h4>📌 Performance</h4>
              <ul>
                <li>≥ 75 → Good</li>
                <li>50-74 → Average</li>
                <li>&lt; 50 → Needs Improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
