const express = require("express");
const bcrypt = require("bcrypt");
const Student = require("../model/studentModel");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, course, age } = req.body;

    // Check required fields
    if (!name || !email || !password || !course || !age) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if student already exists
    const existingStudent = await Student.findOne({ email });

    if (existingStudent) {
      return res.status(409).json({
        message: "Student with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create student
    const student = new Student({
      name,
      email,
      password: hashedPassword,
      course,
      age,
    });

    await student.save();

    res.status(201).json({
      message: "Student registered successfully",
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        course: student.course,
        age: student.age,
      },
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});

module.exports = router;