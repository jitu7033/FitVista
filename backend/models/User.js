
const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  pushUps: Number,
  caloriesBurned: Number,
  date: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  totalCalories: { type: Number, default: 0 }, 
  workouts: [workoutSchema],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
