const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Users data
let users = [
    {
        id: 1,
        name: "Krishiv",
        email: "krishiv@example.com"
    }
];

// GET Route - Get all users
app.get("/users", (req, res) => {
    res.status(200).json({
        message: "Users fetched successfully",
        users: users
    });
});

// POST Route - Create a new user
app.post("/users", (req, res) => {
    const { name, email } = req.body;

    const newUser = {
        id: users.length + 1,
        name: name,
        email: email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});