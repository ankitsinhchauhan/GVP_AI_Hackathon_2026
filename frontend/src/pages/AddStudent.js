import React, { useState } from 'react';
import apiService from '../services/apiService';
import '../styles/Pages.css';

export default function AddStudent() {
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    semester: '',
  });
  const [message, setMessage] = useState('');
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

    try {
      const response = await apiService.addStudent({
        rollNo: formData.rollNo,
        name: formData.name,
        semester: parseInt(formData.semester),
      });

      if (response.data.success) {
        setMessage(`Success: ${response.data.message}`);
        setFormData({ rollNo: '', name: '', semester: '' });
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
        <h1>Add New Student</h1>
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
            <label htmlFor="name">Student Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="semester">Semester:</label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              required
            >
              <option value="">Select Semester</option>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                <option key={sem} value={sem}>
                  Semester {sem}
                </option>
              ))}
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Student'}
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
      </div>
    </div>
  );
}
