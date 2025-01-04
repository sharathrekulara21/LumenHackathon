const jwt = require("jsonwebtoken");
require("dotenv").config();

const authorize = (requiredRoles) => (req, res, next) => {
	const token = req.headers.authorization?.split(" ")[1];

	if (!token) return res.status(401).json({ message: "No token provided" });

	try {
		// Verify and decode the JWT token
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Allow access only if the role is in the allowed list of roles
		if (!requiredRoles.includes(decoded.role)) {
			return res
				.status(403)
				.json({ message: `Access denied for ${decoded.role}` });
		}

		// Pass the decoded user data into the request object
		req.user = decoded;
		next();
	} catch (err) {
		if (err.name === "TokenExpiredError") {
			return res.status(401).json({ message: "Token expired" });
		}
		return res.status(401).json({ message: "Invalid or expired token" });
	}
};

module.exports = authorize;
