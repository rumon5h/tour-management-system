const Tour = require("../models/Tour")

exports.createTourService = async (data) => {
    const result = await Tour.create(data);
    return result;
}