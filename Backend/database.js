const express = require("express");
const mysql = require("mysql");
const app = express();

// Create a connection to the MySQL database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
});

// Connect to MySQL database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: ", err);
        return;
    }
    console.log("Connected to the MySQL database");
});
// Create new user (Admin can create users with different roles)
app.post("/admin/users", (req, res) => {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) return res.status(500).json({ message: "Error hashing password" });

        const sql = "INSERT INTO Users (username, email, password, role) VALUES (?, ?, ?, ?)";
        db.query(sql, [username, email, hashedPassword, role], (err, result) => {
            if (err) return res.status(500).json({ message: "Error creating user" });

            res.status(201).json({ message: "User created successfully", userId: result.insertId });
        });
    });
});

// Define the route to fetch students 
app.get("/admin/users", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Database query failed" });
        }
        return res.status(200).json(data);
    });
});
// Update user information
app.put("/admin/users/:id", (req, res) => {
    const { username, email, role } = req.body;
    const userId = req.params.id;

    const sql = "UPDATE Users SET username = ?, email = ?, role = ? WHERE user_id = ?";
    db.query(sql, [username, email, role, userId], (err, result) => {
        if (err) return res.status(500).json({ message: "Error updating user" });

        if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User updated successfully" });
    });
});
// Delete a user
app.delete("/admin/users/:id", (req, res) => {
    const userId = req.params.id;

    const sql = "DELETE FROM Users WHERE user_id = ?";
    db.query(sql, [userId], (err, result) => {
        if (err) return res.status(500).json({ message: "Error deleting user" });

        if (result.affectedRows === 0) return res.status(404).json({ message: "User not found" });

        res.json({ message: "User deleted successfully" });
    });
});

app.get('/products', (req, res) => {
    const query = 'SELECT * FROM Products'; // Replace with your actual table name
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).send({ error: err.message });
      } else {
        res.status(200).json(results); 
      }
    });
  });
// Get all products available in the system
app.get("/api/suppliers/products", (req, res) => {
    const sql = "SELECT * FROM products";
    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ message: "Error fetching products" });
        }
        return res.json(results);
    });
});

// Start the server
app.listen(3000, () => {
    console.log("Server has started on http://localhost:3000");
});
