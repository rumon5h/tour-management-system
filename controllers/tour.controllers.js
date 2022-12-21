const {
  createTourService,
  getAllTourService,
  getATourByIdService,
  getTrendingToursService,
  getCheapestToursService,
  updateTourByIdService,
} = require("../services/tour.services");

exports.getAllTour = async (req, res, next) => {
  try {
    // http://localhost:5000/api/v1/tour?sort=price&fields=name, &limit=4&page=1

    let filters = { ...req.query };
    const excludeField = ["sort", "page", "limit"];

    excludeField.forEach((field) => delete filters[field]);

    // gt, lt, gte, lte
    let filtersString = JSON.stringify(filters);
    filtersString = filtersString.replace(
      /\b(gt|lt|gte|lte)\b/g,
      (match) => `$${match}`
    );
    filters = JSON.parse(filtersString);

    const queries = {};

    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    // Pagination
    if (req.query.page) {
      const { page = 1, limit = 10 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    // To get all products
    const result = await getAllTourService(filters, queries);

    res.status(200).json({
      status: "Success",
      message: "Successfully retrieved all tour",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to retrieve all tour",
      error: error.message,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);
    res.status(200).json({
      status: "Success",
      message: "Successfully created new tour",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Failed to create new tour",
      error: error.message,
    });
  }
};

exports.getATourById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const result = await getATourByIdService(id);

        res.status(200).json({
            status: "Success",
            message: "Successfully get the tour",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the tour.",
            error: error.message
        })
    }
}

exports.getTrendingTours = async (req, res, next) => {
    try {
        const result = await getTrendingToursService();

        res.status(200).json({
            statusbar: "Success",
            message: "Successfully get the trending tours",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the Trending Tours",
            error: error.message
        })
    }
}


exports.getCheapestTours = async (req, res, next) => {
    try {
        const result = await getCheapestToursService();
        
        res.status(200).json({
            statusbar: "Success",
            message: "Successfully get the cheapest tours",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to get the cheapest Tours",
            error: error.message
        })
    }
}

exports.updateTourById = async (req, res, next) => {
    try {
        const {id} = req.params;
        const data = req.body;

        const result = await updateTourByIdService(data, id);

        res.status(200).json({
            status: "Success",
            message: "Successfully updated the tour",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: "Failed to update tour",
            error: error.message
        })
    }
}