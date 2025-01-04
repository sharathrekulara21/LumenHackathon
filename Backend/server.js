const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // For handling cross-origin requests
const dotenv = require("dotenv");
const authRoutes = require("./authRoutes/login.js"); // Authentication routes
const connection = require("./config/database.js"); // MySQL connection using XAMPP

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse incoming JSON requests

// Routes
app.use("/auth", authRoutes); // Route for authentication

// Basic Health Check Route
app.get("/", (req, res) => {
	res.send("Server is connected to XAMPP MySQL and running!");
});

// Check MySQL Connection
connection.connect((err) => {
	if (err) {
		console.error("Error connecting to MySQL (XAMPP):", err.message);
	} else {
		console.log("Connected to MySQL database via XAMPP.");
	}
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
