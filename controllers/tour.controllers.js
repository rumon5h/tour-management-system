const { createTourService } = require("../services/tour.services")


exports.createTour = async (req, res, next) => {
    try {
        const result = await createTourService(req.body);
        res.status(200).json({
            status: 'Success',
            message: 'Successfully created new tour',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'Failed',
            message: 'Failed to create new tour',
            error: error.message
        })
    }
}