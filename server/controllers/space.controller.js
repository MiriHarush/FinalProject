const { Space } = require("../model/space.model");

exports.addSpace = async (req, res, next) => { 
    try {

        const { nameSpace, courses, ownerSpace } = req.body;

        const newSpace = new Space({
            nameSpace,
            courses,
            ownerSpace,
        });

        const savedSpace = await newSpace.save();

        res.status(201).json(savedSpace);
    } catch (error) {
        next(error)
    }
}