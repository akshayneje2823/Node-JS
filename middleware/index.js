import express from 'express';
import { middleware } from './middleware.js';

const PORT = 8989
const app = express();

// Using Middleware
// app.use(middleware);



app.get('/home',middleware, (req, res) => {
    res.send("<h1>Fuck You</h1>")
});

app.get('/about', (req, res) => {
    res.send("<h1>This About Page</h1>")
})


app.listen(PORT, (err) => {
    if (err) throw err;

    console.log("server is running on port " + PORT)
})