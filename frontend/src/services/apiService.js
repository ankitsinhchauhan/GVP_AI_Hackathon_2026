import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiService = {
  // Add a new student
  addStudent: (data) => {
    return axios.post(`${API_BASE_URL}/students/add`, data);
  },

  // Get all students
  getAllStudents: () => {
    return axios.get(`${API_BASE_URL}/students`);
  },

  // Update attendance for a student
  updateAttendance: (rollNo, data) => {
    return axios.post(`${API_BASE_URL}/students/attendance/${rollNo}`, data);
  },

  // Update marks for a student
  updateMarks: (rollNo, data) => {
    return axios.post(`${API_BASE_URL}/students/marks/${rollNo}`, data);
  },

  // Get student report
  getStudentReport: (rollNo) => {
    return axios.get(`${API_BASE_URL}/students/report/${rollNo}`);
  },
};

export default apiService;
