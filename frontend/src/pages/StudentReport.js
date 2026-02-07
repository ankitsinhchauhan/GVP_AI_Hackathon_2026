import React, { useState } from 'react';
import apiService from '../services/apiService';
import '../styles/Pages.css';

export default function StudentReport() {
  const [rollNo, setRollNo] = useState('');
  const [report, setReport] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setRollNo(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setReport(null);

    try {
      const response = await apiService.getStudentReport(rollNo);

      if (response.data.success) {
        setReport(response.data.report);
        setMessage('');
      }
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
      setReport(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h1>Student Report</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="rollNo">Roll Number:</label>
            <input
              type="text"
              id="rollNo"
              value={rollNo}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Fetching...' : 'Get Report'}
          </button>
        </form>

        {message && (
          <div className="message error">
            {message}
          </div>
        )}

        {report && (
          <div className="report-container">
            <h2>Student Information</h2>
            <div className="report-grid">
              <div className="report-item">
                <span className="label">Roll Number:</span>
                <span className="value">{report.rollNo}</span>
              </div>
              <div className="report-item">
                <span className="label">Name:</span>
                <span className="value">{report.name}</span>
              </div>
              <div className="report-item">
                <span className="label">Semester:</span>
                <span className="value">{report.semester}</span>
              </div>

              <h3 className="section-title">Attendance Details</h3>
              <div className="report-item">
                <span className="label">Total Lectures:</span>
                <span className="value">{report.totalLectures}</span>
              </div>
              <div className="report-item">
                <span className="label">Attended Lectures:</span>
                <span className="value">{report.attendedLectures}</span>
              </div>
              <div className="report-item">
                <span className="label">Attendance Percentage:</span>
                <span className="value">{report.attendancePercentage}%</span>
              </div>
              <div
                className={`report-item ${
                  report.attendanceWarning === 'Attendance Shortage'
                    ? 'warning-item'
                    : ''
                }`}
              >
                <span className="label">Attendance Status:</span>
                <span className="value">{report.attendanceWarning}</span>
              </div>

              <h3 className="section-title">Performance Details</h3>
              <div className="report-item">
                <span className="label">Marks:</span>
                <span className="value">{report.marks}/100</span>
              </div>
              <div className="report-item">
                <span className="label">Performance Remark:</span>
                <span
                  className={`value remark-${report.performanceRemark.toLowerCase()}`}
                >
                  {report.performanceRemark}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
