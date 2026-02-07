const express = require('express');
const {
  addStudent,
  getAllStudents,
  updateAttendance,
  updateMarks,
  getStudentReport,
} = require('../controllers/studentController');

const router = express.Router();

// Routes
router.post('/add', addStudent);
router.post('/attendance/:rollNo', updateAttendance);
router.post('/marks/:rollNo', updateMarks);
router.get('/report/:rollNo', getStudentReport);
router.get('/', getAllStudents);

module.exports = router;
