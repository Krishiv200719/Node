const express = require("express");
const mongoose = require("mongoose");
const User = require("../model/userModel");

const router = express.Router();

// POST /api/users - Add a new user
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

        if (error.name === "ValidationError" || error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid request data",
                error: error.message
            });
        }

        res.status(500).json({
            message: "Failed to add user",
            error: error.message
        });
    }
});

// GET /api/users - Retrieve all users
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

// PATCH /api/users/:id - Update an existing user
router.patch("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the MongoDB document ID first
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid MongoDB ID"
            });
        }

        // Validate that request data is present
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: "Invalid request data"
            });
        }

        // Only allow fields defined in the existing user schema
        const allowedFields = ["name", "email", "age", "course"];
        const updateData = {};

        for (const field of allowedFields) {
            if (Object.prototype.hasOwnProperty.call(req.body, field)) {
                updateData[field] = req.body[field];
            }
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({
                message: "Invalid request data"
            });
        }

        // Find the user using the MongoDB document ID
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Update only the supplied fields
        Object.assign(user, updateData);
        await user.save();

        console.log("User updated successfully");

        res.status(200).json({
            message: "User updated successfully"
        });
    } catch (error) {
        console.error("Error updating user:", error.message);

        if (error.name === "ValidationError" || error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid request data",
                error: error.message
            });
        }

        res.status(500).json({
            message: "Failed to update user",
            error: error.message
        });
    }
});

// DELETE /api/users/:id - Delete an existing user
router.delete("/users/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Validate the MongoDB document ID first
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).json({
                message: "Invalid MongoDB ID"
            });
        }

        // Find the user using the MongoDB document ID
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Delete the user from MongoDB
        await User.findByIdAndDelete(id);

        console.log("User deleted successfully");

        res.status(200).json({
            message: "User deleted successfully"
        });
    } catch (error) {
        console.error("Error deleting user:", error.message);

        res.status(500).json({
            message: "Failed to delete user",
            error: error.message
        });
    }
});

module.exports = router;
