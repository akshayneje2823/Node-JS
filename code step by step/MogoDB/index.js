// MongoDB Package
const { MongoClient } = require('mongodb');


// Step 2 : Give path and database name
const url = 'mongodb://localhost:27017';
const DBName = 'State';


// Step 3 : Pass the Url to mongoClient
const client = new MongoClient(url);


// step 4 : Conncet to mongo server
async function getData() {
    let result = await client.connect();
    let db = result.db(DBName);          //database name
    let collection = db.collection('Capitals');
    let response = await collection.find({}).toArray()
    console.log(response);



}
getData()