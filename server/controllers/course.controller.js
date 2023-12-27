const { Course } = require("../model/course.model");
const { Space } = require("../model/space.model");

exports.getAllCourses = async (req, res, next) => {
    try {
        const courses = await Course.find({});
        res.send(courses);
    } catch (error) {
        next(error)
    }
}

exports.getInfoCourse = async (req, res, next) => {
    try {
        const { id } = req.params;
        const courseInfo = await Course.findOne({ _id: id });
        res.send(courseInfo);
    } catch (error) {
        next(error)
    }
}


exports.addCourse = async (req, res, next) => {

    try {
        req.body.ownerUser = res.locals.user_id;
        
        const { courseName, typeCourse, permission, lessons, description, ownerCourse, ownerUser} = req.body;

        // Create a new course instance
        const newCourse = new Course({
            ownerUser,
            courseName,
            typeCourse,
            permission,
            lessons,
            description,
            ownerCourse
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

    const userId = res.locals.user_id;

    try {
        let course = await Course.findOne({ _id: delId })


        if (String(course.ownerUser) !== String(userId)) {
            throw new Error("you are not auther")
        }
        course = await Course.findByIdAndDelete(delId);
        // res.send(course);
        res.send({ message: 'The course deleted successfully' });
    }
    catch (error) {
      next(error)
    }
}
    exports.patchCourse = async (req, res, next) => {
    
        const { idEdit } = req.params;
        const userId = res.locals.user_id;
        const body = req.body;
        try {
            let patchCourse = await Course.findOne({_id: idEdit});
            if(!patchCourse){
                throw new Error("the course is not exist")
            }
    
            if (String(patchCourse.ownerUser) !== String(userId)) {
                throw new Error("you are not the auther")
            }
            patchCourse = await Course.findByIdAndUpdate(idEdit, body, { new: true });
            res.send(patchCourse)
        } catch (error) {
            next(error)
        }
    
    }