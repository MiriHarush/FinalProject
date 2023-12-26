const { Space } = require("../model/space.model");
const { User } = require("../model/user.model");

exports.getInfoSpace = async (req, res, next) => {
    try {
        const { id } = req.params;
        const spaceInfo = await Space.findOne({_id: id});
        res.send(spaceInfo);
    } catch (error) {
        next(error)
    }
}

exports.addSpace = async (req, res, next) => { 
    try {
        req.body.ownerSpace= res.locals.user_id;
        const { nameSpace, courses, ownerSpace } = req.body;

        const newSpace = new Space({
            nameSpace,
            courses,
            ownerSpace,
        });

        const savedSpace = await newSpace.save();

        await User.findByIdAndUpdate(
            res.locals.user_id,
            { $push: { spaces: savedSpace._id } },
            { new: true } // This option returns the modified document
        );

        res.status(201).json(savedSpace);
    } catch (error) {
        next(error)
    }
}