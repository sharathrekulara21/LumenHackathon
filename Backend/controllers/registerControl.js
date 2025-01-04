const registerControl = async (req, res) => {
	const { username, email, password, role } = req.body;

	// Ensure all required fields are provided
	if (!username || !email || !password || !role) {
		return res.status(400).json({ message: "All fields are required" });
	}

	// Extract the JWT token from the request header
	const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

	if (!token) {
		return res.status(401).json({ message: "Authorization required" });
	}

	try {
		// Decode the token to get the role of the logged-in user
		const decoded = jwt.verify(token, SECRET_KEY);

		// Check if the user is an admin
		if (decoded.role !== "admin") {
			return res.status(403).json({ message: "Only admins can assign roles" });
		}

		// Check if the user already exists
		connection.query(
			"SELECT * FROM users WHERE email = ?",
			[email],
			async (err, results) => {
				if (err) {
					return res
						.status(500)
						.json({ message: "Database error", error: err.message });
				}

				if (results.length > 0) {
					return res.status(400).json({ message: "User already exists" });
				}

				// Hash the password
				const salt = await bcrypt.genSalt(10);
				const hashedPassword = await bcrypt.hash(password, salt);

				// Insert user into the database
				connection.query(
					"INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
					[username, email, hashedPassword, role],
					(insertErr, result) => {
						if (insertErr) {
							return res.status(500).json({
								message: "Error registering user",
								error: insertErr.message,
							});
						}

						res.status(201).json({
							message: "registered successfully",
							userId: result.insertId,
						});
					}
				);
			}
		);
	} catch (error) {
		// Handle any errors in the process
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

module.exports = registerControl;
