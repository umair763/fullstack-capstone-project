// searchRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('../db');

// Search route with category filtering
router.get('/', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const collection = db.collection("gifts");

        let query = {};

        // Filter results based on category
        if (req.query.category && req.query.category !== 'all') {
            query.category = req.query.category;
        }

        // Optional search parameters: name, age_years
        if (req.query.name) {
            query.name = { $regex: req.query.name, $options: "i" };
        }

        if (req.query.age_years) {
            query.age_years = { $lte: parseInt(req.query.age_years) };
        }

        const gifts = await collection.find(query).toArray();
        res.json(gifts);
    } catch (e) {
        console.error("Error searching items:", e);
        res.status(500).send("Error searching items");
    }
});

module.exports = router;
