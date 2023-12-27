const { Course } = require("../model/course.model");
const { Space } = require("../model/space.model");

exports.addCourse = async (req, res, next) => {
    try {
        const { courseName, typeCourse, permission, lessons, description, ownerCourse } = req.body;

        // Create a new course instance
        const newCourse = new Course({
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

exports.deleteCourse = async (req, res, next) => {
        const { delId } = req.params;

       
        try {
            let course = await Course.findOne({ _id: delId })

            // if (String(toy.user_id) !== String(userId)) {
            //     throw new Error("you are not auther")
            // }
            course = await Course.findByIdAndDelete(delId);
            // res.send(course);
            res.send({ message: 'The course deleted successfully' });
        }
        catch (error) {
            console.log(error);
            res.sendStatus(400);
        }
    }
    
