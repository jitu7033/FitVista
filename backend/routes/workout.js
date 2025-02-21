// const express = require("express");
// const router = express.Router();
// const User = require("../models/user.js");

// Save Workout Summary
// router.post("/save-workout", async (req, res) => {
//   const { email, pushUps, caloriesBurned, intensityScore } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     user.workouts.push({ pushUps, caloriesBurned, intensityScore });
//     await user.save();

//     res.status(200).json({ message: "Workout saved successfully!" });
//   } catch (error) {
//     res.status(500).json({ message: "Error saving workout", error });
//   }
// });


// module.exports = router;



// Update user score and calories
// router.post("/update-score", async (req, res) => {
//   const { email, score, calories } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (user) {
//       // Update highest push-up score
//       user.score = Math.max(user.score || 0, score);
//       user.totalCalories += calories; // ✅ Add calories to total

//       await user.save();
//       return res.json({ message: "Score and calories updated successfully" });
//     }

//     return res.status(404).json({ error: "User not found" });
//   } catch (error) {
//     console.error("Error updating score:", error);
//     return res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Update user score and calories
router.post("/update-score", async (req, res) => {
  const { email, score, calories } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      user.score = Math.max(user.score || 0, score); // ✅ Update highest score
      user.totalCalories += calories; // ✅ Add calories burned

      await user.save();
      return res.json({ message: "Score and calories updated successfully" });
    }

    return res.status(404).json({ error: "User not found" });
  } catch (error) {
    console.error("Error updating score:", error);
    return res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
