import React, { useState } from 'react';
import apiService from '../services/apiService';
import '../styles/Pages.css';

export default function EnterMarks() {
  const [formData, setFormData] = useState({
    rollNo: '',
    marks: '',
  });
  const [message, setMessage] = useState('');
  const [performanceRemark, setPerformanceRemark] = useState('');
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
    setPerformanceRemark('');

    try {
      const response = await apiService.updateMarks(formData.rollNo, {
        marks: parseInt(formData.marks),
      });

      if (response.data.success) {
        setMessage(`Success: ${response.data.message}`);
        setPerformanceRemark(
          `Performance Remark: ${response.data.performanceRemark}`
        );
        setFormData({ rollNo: '', marks: '' });
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
        <h1>Enter Marks</h1>
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
            <label htmlFor="marks">Marks (out of 100):</label>
            <input
              type="number"
              id="marks"
              name="marks"
              value={formData.marks}
              onChange={handleChange}
              required
              min="0"
              max="100"
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Marks'}
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

        {performanceRemark && (
          <div className="message info">
            {performanceRemark}
          </div>
        )}
      </div>
    </div>
  );
}
