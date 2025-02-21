const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Update user score
router.post("/update-score", async (req, res) => {
  const { email, score } = req.body;

  try {
    const user = await User.findOne({ email });
    if (user) {
      user.score = Math.max(user.score, score); // Store highest score
      await user.save();
      res.json({ message: "Score updated successfully" });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
