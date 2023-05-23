const express = require('express');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb')
const app = express()


// mongoose.connect("", {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }).then((response) => {
//     console.log(response)
//     console.log("Mongodb connection successfull")
// }).catch(() => {
//     console.log("Unable to Connect")
// });

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function mongoConnection() {
    let connect = await client.connect();
    let dbName = connect.db("new-DB");
    
}
mongoConnection()





app.listen(5600, () => {
    console.log("Server is running")
})

//
// pass :

// mongodb+srv://booking_app:aEEMBZWSoN1kJyIx@cluster0.fm3mmwt.mongodb.net/booking-app?retryWrites=true&w=majority