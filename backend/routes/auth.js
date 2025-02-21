const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const router = express.Router();

// Register Route
// router.post("/register", async (req, res) => {
//   const your_jwt_secret = "harry";
//   const { email, password } = req.body;

//   try {
//     // Check if the user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: "User already exists. Please log in." });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       email,
//       password: hashedPassword,
//     });

//     await newUser.save();
//     res.status(201).json({ message: "User created successfully! Please log in." });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Server error" });
//   }
// });


router.post("/register", async (req, res) => {
  const your_jwt_secret = "harry";
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists. Please log in." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User created successfully! Please log in." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});



// Login Route
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if the user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: "User not found. Please register first." });
//     }
//     // Compare the password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: "Invalid credentials." });
//     }
//     else{
//       res.status(200).json({ message: "Login successful" });
//       localStorage.setItem("token", response.data.token); // Store the token
//     }
//     // Generate JWT token
//     const token = jwt.sign({ userId: user._id }, your_jwt_secret, { expiresIn: "1h" });
//     res.status(200).json({
//       message: "Login successful",
//       token,
//     });
//   } catch (err) {
//     // console.error(err);
//     res.status(200).json({ message: "login successfully" });
//   }
// // }
//   });

// module.exports = router;


router.post("/login", async (req, res) => {
  const your_jwt_secret = "harry";
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found. Please register first." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user._id }, your_jwt_secret, { expiresIn: "1h" });

    // ✅ Ensure only one response is sent
    return res.status(200).json({
      message: "Login successful",
      token,
      user: { email: user.email }, // Send user details if needed
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;