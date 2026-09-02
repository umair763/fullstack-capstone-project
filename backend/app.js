// app.js
const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./db');
const giftRoutes = require('./routes/giftRoutes');
const searchRoutes = require('./routes/searchRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 3060;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/gifts', giftRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
    res.send("GiftLink Express Server is up and running!");
});

if (require.main === module) {
    connectToDatabase().then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }).catch(err => {
        console.error("Failed to start server:", err);
    });
}

module.exports = app;
