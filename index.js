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


// app.get('*', (req, res, next) =>{
//     res.write('<h1>This route is not exists!</h1>')
//     res.end();
// })

app.use('/api/v1/tour', tourRoutes)

module.exports = app;