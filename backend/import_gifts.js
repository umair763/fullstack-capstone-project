// import_gifts.js
const { MongoClient } = require('mongodb');
const giftsData = require('./sample_gifts.json');

const url = process.env.MONGO_URL || 'mongodb://localhost:27017';
const dbName = 'giftlink';

async function importGifts() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB server");
        const db = client.db(dbName);
        const collection = db.collection("gifts");

        // Clear existing items
        await collection.deleteMany({});

        // Insert 16 documents into MongoDB
        const result = await collection.insertMany(giftsData);
        console.log(`Successfully imported ${result.insertedCount} documents into MongoDB 'gifts' collection.`);
        console.log("MongoDB Data Import completed successfully!");
    } catch (error) {
        console.error("Error importing gifts:", error);
    } finally {
        await client.close();
    }
}

importGifts();
