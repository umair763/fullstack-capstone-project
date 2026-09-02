// authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const connectToDatabase = require('../db');

const JWT_SECRET = process.env.JWT_SECRET || 'giftlink_secret_key_12345';

// User Registration API
router.post('/register', async (req, res) => {
    try {
        const { email, password, name } = req.body;
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // Use findOne to check if user exists
        const existingUser = await collection.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ error: "User with this email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = {
            email,
            password: hashedPassword,
            name,
            createdAt: new Date()
        };

        const result = await collection.insertOne(newUser);
        const token = jwt.sign({ email: email, id: result.insertedId }, JWT_SECRET, { expiresIn: '1h' });

        res.status(201).json({
            message: "User registered successfully",
            authtoken: token,
            email: email
        });
    } catch (e) {
        console.error("Registration error:", e);
        res.status(500).json({ error: "Server error during registration" });
    }
});

// User Login API
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // Call collection's findOne method to locate the current user in the database
        const user = await collection.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }

        const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({
            message: "Login successful",
            authtoken: token,
            email: user.email,
            userName: user.name
        });
    } catch (e) {
        console.error("Login error:", e);
        res.status(500).json({ error: "Server error during login" });
    }
});

// Update User Profile API
router.put('/update', async (req, res) => {
    try {
        const { email, name, newPassword } = req.body;
        const db = await connectToDatabase();
        const collection = db.collection("users");

        // Call collection's findOne method to locate current user in database
        const user = await collection.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        let updateFields = {};
        if (name) updateFields.name = name;
        if (newPassword) {
            updateFields.password = await bcrypt.hash(newPassword, 10);
        }

        await collection.updateOne({ email: email }, { $set: updateFields });

        res.status(200).json({ message: "User profile updated successfully" });
    } catch (e) {
        console.error("Update user error:", e);
        res.status(500).json({ error: "Server error during user update" });
    }
});

module.exports = router;
