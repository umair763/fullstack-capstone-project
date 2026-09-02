// sentiment/index.js
const express = require('express');
const natural = require('natural'); // Line importing the natural npm package

const app = express();
const PORT = process.env.PORT || 3050;

app.use(express.json());

// Initialize Sentiment Analyzer using natural package
const Analyzer = natural.SentimentAnalyzer;
const stemmer = natural.PorterStemmer;
const analyzer = new Analyzer("English", stemmer, "afinn");

app.post('/api/sentiment', (req, res) => {
    const { sentence } = req.body;
    if (!sentence) {
        return res.status(400).json({ error: "No sentence provided for sentiment analysis" });
    }

    const tokenizer = new natural.WordTokenizer();
    const tokens = tokenizer.tokenize(sentence);
    const score = analyzer.getSentiment(tokens);

    let sentiment = "neutral";
    if (score > 0) sentiment = "positive";
    if (score < 0) sentiment = "negative";

    res.json({ sentence, score, sentiment });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Sentiment microservice listening on port ${PORT}`);
    });
}

module.exports = app;
