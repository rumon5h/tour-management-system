const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const app = require('./index.js');
const PORT = process.env.PORT || 5000;

// Database configuration
mongoose.connect(process.env.DATABASE).then(() => {
    console.log('Successfully connected the database');
})

app.listen(PORT, () => {
    console.log('Server is running at ', PORT);
})