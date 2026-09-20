const express = require("express");
const bcrypt = require("bcrypt");
const Teacher = require("../model/teacherModel");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password, subject } = req.body;

    // Check required fields
    if (!name || !email || !password || !subject) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ email });

    if (existingTeacher) {
      return res.status(409).json({
        message: "Teacher with this email already exists",
      });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create teacher
    const teacher = new Teacher({
      name,
      email,
      password: hashedPassword,
      subject,
    });

    await teacher.save();

    res.status(201).json({
      message: "Teacher registered successfully",
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        subject: teacher.subject,
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