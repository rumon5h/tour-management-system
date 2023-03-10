const Tour = require("../models/Tour")


exports.getAllTourService = async (filters, queries) => {
    const result = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

    const total = await Tour.countDocuments(filters);
    const totalPages = Math.ceil(total / queries.limit);

    return { total, totalPages, result};
}

exports.createTourService = async (data) => {
    const result = await Tour.create(data);

    return result;
}

exports.getATourByIdService = async (id) => {
    const newViews = await Tour.updateOne({_id: id}, {$inc: {views: 1}});
    const result = await Tour.findById({_id: id});

    return result;
}

exports.getTrendingToursService = async () => {
    const result = await Tour.find({}).sort({views: -1}).limit(3);
    return result;
}

exports.getCheapestToursService = async () => {
    const result = await Tour.find({}).sort({price: 1}).limit(3);
    return result;
}

exports.updateTourByIdService = async (data, id) => {
    
    const result = await Tour.updateOne({_id: id}, {$set: data}, {
        runValidators: true
    });
    return result;
}