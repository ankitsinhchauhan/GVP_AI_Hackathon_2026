import React, { useState, useEffect } from 'react';
import apiService from '../services/apiService';
import '../styles/Pages.css';

export default function ViewAllStudents() {
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await apiService.getAllStudents();

      if (response.data.success) {
        setStudents(response.data.students);
        if (response.data.students.length === 0) {
          setMessage('No students found. Add students to get started.');
        }
      }
    } catch (error) {
      setMessage(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">
      <div className="students-card">
        <h1>All Students</h1>
        
        <button className="refresh-btn" onClick={fetchStudents} disabled={loading}>
          {loading ? 'Loading...' : 'Refresh'}
        </button>

        {message && <div className="message info">{message}</div>}

        {students.length > 0 && !loading && (
          <div className="table-container">
            <table className="students-table">
              <thead>
                <tr>
                  <th>Roll Number</th>
                  <th>Name</th>
                  <th>Semester</th>
                  <th>Total Lectures</th>
                  <th>Attended</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student._id} className="table-row">
                    <td>{student.rollNo}</td>
                    <td>{student.name}</td>
                    <td>{student.semester}</td>
                    <td>{student.totalLectures}</td>
                    <td>{student.attendedLectures}</td>
                    <td>{student.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {loading && <div className="loading">Loading students...</div>}
      </div>
    </div>
  );
}
