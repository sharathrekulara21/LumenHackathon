const loginControl = async (req, res) => {
	const { email, password } = req.body;

	// Validate input
	if (!email || !password) {
		return res.status(400).json({ message: "Email and password are required" });
	}

	try {
		// Query the database to find the user
		connection.query(
			"SELECT * FROM users WHERE email = ?",
			[email],
			async (err, results) => {
				if (err) {
					return res
						.status(500)
						.json({ message: "Database error", error: err.message });
				}

				if (results.length === 0) {
					return res.status(404).json({ message: "User not found" });
				}

				const user = results[0];

				// Compare input password with stored hash
				const isMatch = await bcrypt.compare(password, user.password); // Ensure column name matches schema
				if (!isMatch) {
					return res.status(401).json({ message: "Invalid credentials" });
				}

				// Generate a token
				const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, {
					expiresIn: "1h",
				});

				res.json({ token, message: `Welcome, ${user.role}!` });
			}
		);
	} catch (error) {
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

module.exports = loginControl;