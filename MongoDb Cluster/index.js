const express = require('express');
const mongoose = require('mongoose');
const app = express()


mongoose.connect("mongodb+srv://booking_app:aEEMBZWSoN1kJyIx@cluster0.fm3mmwt.mongodb.net/booking-app?retryWrites=true&w=majority", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}).then((response) => {
    console.log("Mongodb connection successfull")
}).catch(() => {
    console.log("Unable to Connect")
})
app.listen(5600,()=>{
    console.log("Server is running")
})

// 
// pass :

// mongodb+srv://booking_app:aEEMBZWSoN1kJyIx@cluster0.fm3mmwt.mongodb.net/booking-app?retryWrites=true&w=majority