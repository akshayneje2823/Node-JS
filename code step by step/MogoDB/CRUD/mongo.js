// MongoDB Package
const { MongoClient } = require('mongodb');


// Step 2 : Give path and database name
const url = 'mongodb://127.0.0.1:27017/';
const DBName = 'State';


// Step 3 : Pass the Url to mongoClient
const client = new MongoClient(url);


// step 4 : Conncet to mongo server
async function dbconnect() {
    let result = await client.connect();
    let db = result.db(DBName);          //database name
    return db.collection('Capitals');
}

module.exports = dbconnect