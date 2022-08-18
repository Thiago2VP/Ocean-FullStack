const express = require('express');
const { MongoClient } = require('mongodb');

//const url = 'mongodb://mongoAdmin:123456@localhost:27017';
//const dbName = 'ocean_fullstack_scores';
const url = "mongodb+srv://adminScoreGame:wxTsaWL46Rtbodio@fs-game-scores.yxbabzz.mongodb.net/";
const dbName = 'fs-game-scores';

async function main() {
    // Make the MongoClient connection
    // MOngoClient -> MongoDatabase -> MOngoCollection
    // It can spend time
    // Use Promises
    
    const client = await MongoClient.connect(url);
    const db = client.db(dbName);
    const collection = db.collection('scores');

    const app = express();

    // Advertise the use like JSON
    app.use(express.json());

    app.get('/', function (req, res) {
        res.send('Home');
    });

    app.get('/hey', function (req, res) {
        res.send('Hello World!');
    });

    // Endpoint READ ALL - [GET] /scores
    app.get('/scores', async function (req, res) {
        const items = await collection.find().toArray();
        res.send(items);
    });

    // Endpoint CREATE - [POST] /scores
    app.post('/scores', function (req, res) {
        // Catch the item
        const item = req.body;

        // Add item to the list
        collection.insertOne(item);

        res.send('Item successfully created');
    });

    app.listen(process.env.PORT || 3000);
}

//Execute main
main();
