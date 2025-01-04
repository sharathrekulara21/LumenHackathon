const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../config/database.js");
const registerControl = require("../controllers/registerControl.js");
const loginControl = require("../controllers/loginControl.js");
const router = express.Router();

const SECRET_KEY = process.env.JWT_SECRET || "lumen"; // Secret key for JWT

/** LOGIN ROUTE */
router.post("/login", loginControl);
router.post("/register", registerControl);

module.exports = router;
