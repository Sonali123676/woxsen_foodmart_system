// routes/userRoutes.js
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");

// POST /api/signup
router.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ email, password, name });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/login
// server.js (continuation)

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    } else {
      return res.status(200).json({
        message: "Login success",
      });
    }

    // Generate and send a JWT token upon successful login
    // const token = jwt.sign({ userId: user._id }, "YOUR_SECRET_KEY", {
    //   expiresIn: "1h",
    // });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add more user-related routes if needed

module.exports = router;
