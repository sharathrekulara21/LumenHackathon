const express = require("express");
const mysql = require("mysql");
const app = express();


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
