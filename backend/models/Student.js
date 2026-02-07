const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    rollNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    semester: {
      type: Number,
      required: true,
    },
    totalLectures: {
      type: Number,
      default: 0,
    },
    attendedLectures: {
      type: Number,
      default: 0,
    },
    marks: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Student', studentSchema);
