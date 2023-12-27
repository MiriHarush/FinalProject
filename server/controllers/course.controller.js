const { Course } = require("../model/course.model");
const { Space } = require("../model/space.model");

exports.addCourse = async (req, res, next) => {

    try {
        req.body.ownerUser = res.locals.user_id;
        console.log(req.body.ownerUser);

        const { courseName, typeCourse, permission, lessons, description, ownerCourse, ownerUser} = req.body;

        // Create a new course instance
        const newCourse = new Course({
            ownerUser,
            courseName,
            typeCourse,
            permission,
            lessons,
            description,
            ownerCourse,
        });

        // Save the new course to the database
        const savedCourse = await newCourse.save();

        await Space.findByIdAndUpdate(
            { _id: ownerCourse },  
            { $push: { courses: savedCourse._id } }
        );

        res.status(201).json(savedCourse);
    } catch (error) {
        next(error)
    }
}