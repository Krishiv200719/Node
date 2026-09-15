const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api", userRouter);

// MongoDB Connection
mongoose
    .connect("mongodb://127.0.0.1:27017/userDB")
    .then(() => {
        console.log("MongoDB connected successfully");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error.message);
    });