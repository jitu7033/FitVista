const express = require("express");
const dotenv = require("dotenv");
const mongoose =  require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth");


dotenv.config({ path: path.resolve(__dirname, '../.env') });

const PORT = process.env.PORT || 5000; // Fallback to 5000 if .env is missing
const app = express();

// middle ware 
app.use(express.json());  // to parse json data



const allowedOrigins = ["http://localhost:5173"]; // Extend this for production
app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());
app.use(cookieParser());

app.listen(PORT, () => {
    console.log("Server is running at:", PORT);
});
