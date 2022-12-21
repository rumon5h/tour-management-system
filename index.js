const express = require('express');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());
app.use(cors());

// Home route
app.get('/', (req, res, next) => {
    res.send('Hello World');
})

// app.get('*', (req, res, next) =>{
//     res.status(400).send('This route is not exists!')
// })

module.exports = app;