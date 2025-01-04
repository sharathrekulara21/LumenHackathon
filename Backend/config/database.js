const mysql = require("mysql2");
require("dotenv").config();

// MySQL connection configuration for XAMPP
const connection = mysql.createConnection({
	host: process.env.DB_HOST || "localhost", // Default XAMPP host
	user: process.env.DB_USER || "root", // Default XAMPP user
	password: process.env.DB_PASSWORD || "", // Default is empty
	database: process.env.DB_NAME || "telecom_inventory", // Your database name
	port: process.env.DB_PORT || 3306, // XAMPP MySQL port (default is 3306)
});

module.exports = connection;
