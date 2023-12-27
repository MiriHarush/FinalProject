const { Space } = require("../model/space.model");
const { User } = require("../model/user.model");

exports.getSpaces = async (req, res, next) => {
    try {
        const spaces = await Space.find({});
        res.send(spaces);
    } catch (error) {
        next(error)
    }
}

exports.getInfoSpace = async (req, res, next) => {
    try {
        const { id } = req.params;
        const spaceInfo = await Space.findOne({ _id: id });
        res.send(spaceInfo);
    } catch (error) {
        next(error)
    }
}

exports.addSpace = async (req, res, next) => {
    try {
        req.body.ownerSpace = res.locals.user_id;
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
            { new: true }
        );

        res.status(201).json(savedSpace);
    } catch (error) {
        next(error)
    }
}

exports.deleteSpace = async (req, res, next) => {
    const { idDelete } = req.params;
    const userId = res.locals.user_id;
    try {
        let deleteSpace = await Space.findOne({ _id: idDelete });
        if (!deleteSpace) {
            throw new Error("the space is not exist")
        }
        
        if (String(deleteSpace.ownerSpace) !== String(userId)) {
            throw new Error("you are not the auther")
        }

        deleteSpace = await Space.findOneAndDelete({ _id: idDelete });
        res.send(deleteSpace)
    } catch (error) {
        next(error)
    }

}


exports.updateSpace = async (req, res, next) => {
    const { editId } = req.params;
    const update = req.body;
    const userId = res.locals.user_id;
    try {

        // const validate = joiSchema.update.validate(update);
        // if (validate.error)
        //     throw Error(validate.error);

        let space = await Space.findOne({ _id: editId });

        if (!space) {
            return res.status(404).send({ msg: "space not exsist" });
        }

        if (String(space.ownerSpace) !== String(userId))
            return res.status(404).send({ msg: "You cannot update this space beacouse you are not auther" });
        space = await Space.findByIdAndUpdate(editId, update, { new: true });
        // res.send(toy);
        res.send({ message: 'The space update successfully' });


    }
    catch (error) {
        next(error);
    }
};

