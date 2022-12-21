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

// Routes
const tourRoutes = require('./routes/tour.route');


app.use('/api/v1/tour', tourRoutes)

module.exports = app;