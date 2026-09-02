// giftRoutes.js
const express = require('express');
const router = express.Router();
const connectToDatabase = require('./db');

// Route serving /api/gifts - Get all items
router.get('/', async (req, res) => {
    try {
        // Connect to MongoDB using connectToDatabase()
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const gifts = await collection.find({}).toArray();
        res.json(gifts);
    } catch (e) {
        console.error("Error fetching gifts:", e);
        res.status(500).send("Error fetching gifts");
    }
});

// Route serving /api/gifts/:id - Get item details by ID
router.get('/:id', async (req, res) => {
    try {
        // Connect to MongoDB using connectToDatabase()
        const db = await connectToDatabase();
        const collection = db.collection("gifts");
        const id = req.params.id;

        const gift = await collection.findOne({ id: id });

        if (!gift) {
            return res.status(404).send("Gift not found");
        }

        res.json(gift);
    } catch (e) {
        console.error("Error fetching gift detail:", e);
        res.status(500).send("Error fetching gift detail");
    }
});

module.exports = router;
