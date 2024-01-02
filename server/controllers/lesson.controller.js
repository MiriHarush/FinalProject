// controllers/lessonController.js
const { Lesson } = require("../model/lesson.model");
const cloudinary = require("../utils/cloudinary");

exports.getAllLesson = async (req, res, next) => {
  try {
    const { ownerLesson } = req.body;
    const lesones = await Lesson.find({ownerLesson: ownerLesson});
    res.send(lesones);
} catch (error) {
    next(error)
}
}

exports.getLesson = async (req, res, next) => {
  try {
      const { id } = req.params;
      const oneLesson = await Lesson.findOne({ _id: id });
      res.send(oneLesson);
  } catch (error) {
      next(error)
  }
}


exports.createLesson = async (req, res) => {
  req.body.ownerUser = res.locals.user_id;

  const url = []
  for (let i = 0; i < req.files?.length; i++) {
    const file = req.files[i].path
    const result = await cloudinary.uploader.upload(file, { resource_type: "auto" })
    url[i] = result.url;
  }

  const { ownerLesson, lessonName, descerption,ownerUser} = req.body;
  const newLesson = new Lesson({
    ownerLesson,
    lessonName,
    descerption,
    content: url,
    ownerUser
  });
  const savedLesson = await newLesson.save();

  try {
    res.status(201).json(savedLesson);
  }
  catch (error) {
    // console.error(error);
    // res.status(500).json({ error: "Internal Server Error" });
    next(error)
  }
};



exports.deleteLesson = async (req, res, next) => {
  const { delId } = req.params;
  const userId = res.locals.user_id;
  try {
      let lesson = await Lesson.findOne({ _id: delId })
      console.log(lesson)
      if (String(lesson.ownerUser) !== String(userId)) {
          throw new Error("you are not auther")
      }
      lesson = await Lesson.findByIdAndDelete(delId);
      // res.send(course);
      res.send({ message: 'The lesson deleted successfully' });
  }
  catch (error) {
    next(error)
  }
}

exports.patchLesson = async (req, res, next) => {

  const { idEdit } = req.params;
  const userId = res.locals.user_id;
  const body = req.body;
  try {
      let patchLesson = await Lesson.findOne({_id: idEdit});
      if(!patchLesson){
          throw new Error("the lesson is not exist")
      }

      if (String(patchLesson.ownerUser) !== String(userId)) {
          throw new Error("you are not the auther")
      }
      patchLesson = await Lesson.findByIdAndUpdate(idEdit, body, { new: true });
      res.send(patchLesson)
  } catch (error) {
      next(error)
  }

}
  


