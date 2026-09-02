// db.js
const { MongoClient } = require('mongodb');

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = 'giftlink';

let dbInstance = null;
let client = new MongoClient(url);

async function connectToDatabase() {
    if (dbInstance) {
        return dbInstance;
    }

    try {
        // Connect the client to the server (optional starting in v4.7)
        await client.connect();
        console.log("Connected successfully to MongoDB server");
        dbInstance = client.db(dbName);
        return dbInstance;
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error);
        throw error;
    }
}

module.exports = connectToDatabase;
