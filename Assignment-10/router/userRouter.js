const express = require("express");
const db = require("../config/firebase");
const userSchema = require("../schema/userSchema");

const router = express.Router();

// POST /api/users
router.post("/", async (req, res) => {
  try {
    // Validate received data
    const { error, value } = userSchema.validate(req.body, {
      abortEarly: false
    });

    // Return validation errors
    if (error) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: error.details.map((detail) => detail.message)
      });
    }

    // Store validated data in Firestore
    const userRef = await db.collection("users").add({
      ...value,
      createdAt: new Date()
    });

    // Success response
    return res.status(201).json({
      success: true,
      message: "User stored successfully",
      userId: userRef.id,
      data: value
    });

  } catch (error) {
    console.error("Error storing user:", error);

    return res.status(500).json({
      success: false,
      message: "Failed to store user",
      error: error.message
    });
  }
});

module.exports = router;