import React, { useState } from 'react';
import apiService from '../services/apiService';
import '../styles/Pages.css';

export default function MarkAttendance() {
  const [formData, setFormData] = useState({
    rollNo: '',
    totalLectures: '',
    attendedLectures: '',
  });
  const [message, setMessage] = useState('');
  const [attendanceWarning, setAttendanceWarning] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setAttendanceWarning('');

    try {
      const response = await apiService.updateAttendance(formData.rollNo, {
        totalLectures: parseInt(formData.totalLectures),
        attendedLectures: parseInt(formData.attendedLectures),
      });

      if (response.data.success) {
        setMessage(`Success: ${response.data.message}`);
        setAttendanceWarning(`Attendance: ${response.data.attendancePercentage}% - ${response.data.attendanceWarning}`);
        setFormData({ rollNo: '', totalLectures: '', attendedLectures: '' });
        setTimeout(() => setMessage(''), 3000);
      }
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="form-card">
        <h1>Mark Attendance</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="rollNo">Roll Number:</label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="totalLectures">Total Lectures:</label>
            <input
              type="number"
              id="totalLectures"
              name="totalLectures"
              value={formData.totalLectures}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <div className="form-group">
            <label htmlFor="attendedLectures">Attended Lectures:</label>
            <input
              type="number"
              id="attendedLectures"
              name="attendedLectures"
              value={formData.attendedLectures}
              onChange={handleChange}
              required
              min="0"
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Attendance'}
          </button>
        </form>

        {message && (
          <div
            className={`message ${
              message.startsWith('Success') ? 'success' : 'error'
            }`}
          >
            {message}
          </div>
        )}

        {attendanceWarning && (
          <div className={`message ${attendanceWarning.includes('Shortage') ? 'warning' : 'info'}`}>
            {attendanceWarning}
          </div>
        )}
      </div>
    </div>
  );
}
