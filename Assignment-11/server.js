const express = require("express");
const mongoose = require("mongoose");

const teacherRouter = require("./router/teacherRouter");
const studentRouter = require("./router/studentRouter");

const app = express();

app.use(express.json());

app.use("/teacher", teacherRouter);
app.use("/student", studentRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/teacherStudentDB")
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(3000, () => {
      console.log("Server running on http://localhost:3000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });