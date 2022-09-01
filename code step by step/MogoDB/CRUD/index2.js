// MongoDB Package
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017/';
const DBName = 'State';

const client = new MongoClient(url);


async function dbconnect() {
    let result = await client.connect();
    let db = result.db(DBName);          //database name
    let data = db.collection('Capitals');
    data = await data.find().toArray();
    console.log(data)

}

dbconnect()