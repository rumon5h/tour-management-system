const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Database configuration
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Successfully connected the database');
})

// Home route
app.get('/', (req, res, next) => {
    res.send('Hello World');
})

// Routes
const tourRoutes = require('./routes/tour.route');


app.use('/api/v1/tour', tourRoutes)


app.listen(PORT, () => {
    console.log('Server is running at ', PORT);
})

module.exports = app;