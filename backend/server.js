// server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const workout=require("./routes/workout");
const leaderboardRoutes = require("./routes/leaderboard");
dotenv.config();

const app = express();

// Middleware
app.use(express.json()); // To parse JSON data
app.use(cors()); // Enable CORS
app.use("/api/auth", authRoutes);
app.use("/api/leaderboard", leaderboardRoutes);
app.use("/api/users", userRoutes);
app.use("/api/workout",workout);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Routes


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});