const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tour.controllers');

router.route('/trending').get(tourController.getTrendingTours)
router.route('/cheapest').get(tourController.getCheapestTours)

router.route('/')
.get(tourController.getAllTour)
.post(tourController.createTour)

router.route('/:id')
.get(tourController.getATourById)
.patch(tourController.updateTourById)

module.exports = router;