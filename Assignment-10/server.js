const express = require("express");
const userRouter = require("./router/userRouter");

// Initialize Express
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRouter);

// Default route
app.get("/", (req, res) => {
  res.json({
    message: "Express Firebase Firestore API is running"
  });
});

// Start server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});