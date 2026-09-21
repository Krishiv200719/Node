const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/users", (req, res) => {
    res.status(200).json({
        message: "Users fetched successfully",
        users: [
            {
                id: 1,
                name: "Krishiv",
                email: "krishiv@example.com"
            }
        ]
    });
});

app.post("/users", (req, res) => {
    const { name, email } = req.body;

    res.status(201).json({
        message: "User created successfully",
        user: {
            name: name,
            email: email
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});