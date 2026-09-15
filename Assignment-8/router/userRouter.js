const express = require("express");
const User = require("../model/userModel");

const router = express.Router();

router.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        console.log("User added successfully");

        res.status(201).json({
            message: "User added successfully",
            user: savedUser
        });
    } catch (error) {
        console.error("Error adding user:", error.message);

        res.status(500).json({
            message: "Failed to add user",
            error: error.message
        });
    }
});

router.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        console.log("Users retrieved successfully");

        res.status(200).json(users);
    } catch (error) {
        console.error("Error retrieving users:", error.message);

        res.status(500).json({
            message: "Failed to retrieve users",
            error: error.message
        });
    }
});

module.exports = router;