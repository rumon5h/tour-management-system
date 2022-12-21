const Tour = require("../models/Tour")


exports.getAllTourService = async (filters, queries) => {
    const result = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);
    const total = await Tour.countDocuments(filters);
    const pages = Math.ceil(total / queries.limit);
    return { total, pages, result};
}

exports.createTourService = async (data) => {
    const result = await Tour.create(data);
    return result;
}
