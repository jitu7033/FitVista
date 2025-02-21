// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");


// // Get top 10 users
// router.get("/top", async (req, res) => {
//   try {
//     console.log("Hit");
//     const topUsers = await User.find().sort({ score: -1 }).limit(10);
//     res.json(topUsers);
//   } catch (error) {
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;

// const express = require("express");
// const router = express.Router();
// const User = require("../models/user");

// // Get top 10 users by calories burned
// router.get("/leaderboard", async (req, res) => {
//   try {
//     const topUsers = await User.find({}, { email: 1, totalCalories: 1 }) // Only fetch necessary fields
//       .sort({ totalCalories: -1 }) // ✅ Sort by calories burned (highest first)
//       .limit(10); // ✅ Limit to top 10

//     res.json(topUsers);
//   } catch (error) {
//     console.error("Error fetching leaderboard:", error);
//     res.status(500).json({ error: "Server error" });
//   }
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Get top 10 users by calories burned
router.get("/leaderboard", async (req, res) => {
  try {
    const topUsers = await User.find({}, { email: 1, totalCalories: 1 }) // Fetch only necessary fields
      .sort({ totalCalories: -1 }) // ✅ Sort by highest calories burned
      .limit(10); // ✅ Get top 10 users

    res.json(topUsers);
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
