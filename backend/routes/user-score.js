const express = require("express");
const router = express.Router();
const User = require("../models/user"); // Import User model

router.post("/api/users/update-score", async (req, res) => {
  try {
    const { email, score, caloriesBurned } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user data
    user.workouts.push({ pushUps: score, caloriesBurned });
    user.totalCalories += caloriesBurned; // ✅ Accumulate calories

    await user.save();

    res.status(200).json({ message: "Workout data updated successfully" });
  } catch (error) {
    console.error("Error updating score:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
