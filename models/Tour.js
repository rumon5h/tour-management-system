const mongoose = require('mongoose');

// Schema design for  tour management system
const tourSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, 'Name must be at least 3 characters long.'],
        maxLength: [30, 'Name cannot more than 30 characters long.']
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        trim: true,
        minLength: [5, "Description must be at least 5 characters long."],
        maxLength: [300, 'Description cannot be more than 300 characters long.']
    },
    price: {
        type: Number,
        required: [true, 'Price is required.'],
        min: [10, 'Price must be at least $10']
    }, 
    image: {
        type: String,
        required: [true, 'Image is required.'],
    },
    views: {
        type: Number
    }
});

const Tour = mongoose.model('tour', tourSchema);

module.exports = Tour;