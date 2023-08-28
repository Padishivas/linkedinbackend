const { MongoClient } = require("mongodb");

const client = new MongoClient(
    `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@padishivas.1tqvkkg.mongodb.net/linkedin`,
    { useUnifiedTopology: true },
    { useNewUrlParser: true },
    { connectTimeoutMS: 30000 },
    { keepAlive: 1 }
);

const db = client.db();

const Users = db.collection("Users");

module.exports = { Users };