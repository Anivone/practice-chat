import { MongoClient } from "mongodb";
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {
    if (err) throw err;

    const db = client.db('practice-chat-test');
    db.dropDatabase().then(() => {
        console.log('Test database has been dropped !')
        process.exit(0);
    });
})