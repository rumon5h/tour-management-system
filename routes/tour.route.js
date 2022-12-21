const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controllers');

router.route('/')
.get(tourController.getAllTour)
.post(tourController.createTour)

router.route('/:id').get(tourController.getATourById)

module.exports = router;