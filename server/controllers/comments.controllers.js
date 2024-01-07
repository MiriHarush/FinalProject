const { Comments } = require("../model/comments.model");
const { User } = require("../model/user.model");


exports.getAllComments = async (req, res, next) => {
    try {
        const allComments = await Comments.find({})
        console.log(allComments);
        res.send(allComments)
    }
    catch (error) {
        next(error)
    }

}

exports.createComments = async (req, res, next) => {
    try {
        const { email, contentComment } = req.body;
        let user = await User.findOne({ email })
        const newComments = new Comments({
            email,
            userName: user.userName,
            contentComment,
            ownerUser: user._id,
            profileImage: user.profileImage
        })
        const savedComment = await newComments.save();
        res.status(201).json(savedComment)
    }
    catch (error) {
        next(error)
    }
}

exports.patchCommentToReply = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { email, comment } = req.body;
        const user = await User.findOne({ email })

        let message = await Comments.findByIdAndUpdate(
            { _id: id },
            { $push: { reply: { userName: user.userName, comment: comment, profileImage: user.profileImage } } }
        )
        res.send(message)
    }
    catch (error) {
        next(error)
    }
}

exports.deleteComments = async (req, res, next) => {
    const { delId } = req.params;
    const userId = res.locals.user_id;
    try {
        let comment = await Comments.findOne({ _id: delId })
        if (String(comment.ownerUser) !== String(userId)) {
            throw new Error("you are not auther")
        }
        comment = await Comments.findByIdAndDelete(delId);
        res.send({ message: 'The comment deleted successfully' });
    }
    catch (error) {
        next(error)
    }
}

exports.updateLike = async (req, res, next) => {
    const { id } = req.params;
    const { like } = req.body;
    try {
        console.log(body)
        let likeComments = await Comments.findByIdAndUpdate({ _id: id }, { like })
         res.send(likeComments)
    }
    catch (error) {
        next(error)
    }

}
exports.updateDisLike = async (req, res, next) => {
    const { id } = req.params;
    const { disLike } = req.body;

    try {
        console.log(req.body)

        let likeComments = await Comments.findByIdAndUpdate({ _id: id }, { disLike })
         res.send(likeComments)
    }
    catch (error) {
        next(error)
    }

}

