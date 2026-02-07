const Student = require('../models/Student');
const {
  calculateAttendancePercentage,
  checkAttendanceWarning,
  getPerformanceRemark,
  generateStudentReport,
} = require('../helpers/studentHelper');

// Add a new student
exports.addStudent = async (req, res) => {
  try {
    const { rollNo, name, semester } = req.body;

    // Validation
    if (!rollNo || !name || !semester) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: rollNo, name, semester',
      });
    }

    // Check if student already exists
    const existingStudent = await Student.findOne({ rollNo });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: 'Student with this roll number already exists',
      });
    }

    // Create new student
    const student = new Student({
      rollNo,
      name,
      semester,
      totalLectures: 0,
      attendedLectures: 0,
      marks: 0,
    });

    await student.save();

    res.status(201).json({
      success: true,
      message: 'Student added successfully',
      student,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    if (students.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No students found',
        students: [],
      });
    }

    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      students,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update attendance for a student
exports.updateAttendance = async (req, res) => {
  try {
    const { rollNo } = req.params;
    const { totalLectures, attendedLectures } = req.body;

    // Validation
    if (
      typeof totalLectures === 'undefined' ||
      typeof attendedLectures === 'undefined'
    ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide totalLectures and attendedLectures',
      });
    }

    // Find student
    const student = await Student.findOne({ rollNo });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Update attendance
    student.totalLectures = totalLectures;
    student.attendedLectures = attendedLectures;

    await student.save();

    // Calculate attendance percentage and check warning
    const attendancePercentage = calculateAttendancePercentage(
      attendedLectures,
      totalLectures
    );
    const attendanceWarning = checkAttendanceWarning(attendancePercentage);

    res.status(200).json({
      success: true,
      message: 'Attendance updated successfully',
      student,
      attendancePercentage: parseFloat(attendancePercentage),
      attendanceWarning: attendanceWarning.message,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update marks for a student
exports.updateMarks = async (req, res) => {
  try {
    const { rollNo } = req.params;
    const { marks } = req.body;

    // Validation
    if (typeof marks === 'undefined') {
      return res.status(400).json({
        success: false,
        message: 'Please provide marks',
      });
    }

    if (marks < 0 || marks > 100) {
      return res.status(400).json({
        success: false,
        message: 'Marks should be between 0 and 100',
      });
    }

    // Find student
    const student = await Student.findOne({ rollNo });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Update marks
    student.marks = marks;
    await student.save();

    // Get performance remark
    const performanceRemark = getPerformanceRemark(marks);

    res.status(200).json({
      success: true,
      message: 'Marks updated successfully',
      student,
      performanceRemark,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get student report
exports.getStudentReport = async (req, res) => {
  try {
    const { rollNo } = req.params;

    // Find student
    const student = await Student.findOne({ rollNo });
    if (!student) {
      return res.status(404).json({
        success: false,
        message: 'Student not found',
      });
    }

    // Generate complete report
    const report = generateStudentReport(student);

    res.status(200).json({
      success: true,
      message: 'Student report fetched successfully',
      report,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
