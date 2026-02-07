// Helper function to calculate attendance percentage
const calculateAttendancePercentage = (attendedLectures, totalLectures) => {
  if (totalLectures === 0) {
    return 0;
  }
  return ((attendedLectures / totalLectures) * 100).toFixed(2);
};

// Helper function to check attendance warning
const checkAttendanceWarning = (attendancePercentage) => {
  if (attendancePercentage < 75) {
    return {
      status: true,
      message: "Attendance Shortage",
    };
  }
  return {
    status: false,
    message: "Attendance is good",
  };
};

// Helper function to get performance remark
const getPerformanceRemark = (marks) => {
  if (marks >= 75) {
    return "Good";
  } else if (marks >= 50 && marks < 75) {
    return "Average";
  } else {
    return "Needs Improvement";
  }
};

// Helper function to generate complete student report
const generateStudentReport = (student) => {
  const attendancePercentage = calculateAttendancePercentage(
    student.attendedLectures,
    student.totalLectures,
  );

  const attendanceWarning = checkAttendanceWarning(attendancePercentage);
  const performanceRemark = getPerformanceRemark(student.marks);

  return {
    rollNo: student.rollNo,
    name: student.name,
    semester: student.semester,
    totalLectures: student.totalLectures,
    attendedLectures: student.attendedLectures,
    attendancePercentage: parseFloat(attendancePercentage),
    attendanceWarning: attendanceWarning.message,
    marks: student.marks,
    performanceRemark: performanceRemark,
  };
};

module.exports = {
  calculateAttendancePercentage,
  checkAttendanceWarning,
  getPerformanceRemark,
  generateStudentReport,
};
