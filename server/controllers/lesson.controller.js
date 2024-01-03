// controllers/lessonController.js
const { Types } = require("mongoose");
const { Lesson } = require("../model/lesson.model");
const cloudinary = require("../utils/cloudinary");

exports.getAllLesson = async (req, res, next) => {
  try {
    const { idLesson } = req.params;
    const lesones = await Lesson.find({ ownerLesson: idLesson });
    
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

exports.uploadFile = async (req, res, next) => {
  const { lesId } = req.params;
  const userId = res.locals.user_id;
  try {
    console.log("mirii")
    let upload = await Lesson.findOne({ _id: lesId });
    if (!upload) {
      throw new Error("the lesson is not exist")
    }

    if (String(upload.ownerUser) !== String(userId)) {
      throw new Error("you are not the auther")
    }

    console.log("mirii2222222")
    const url = []
    for (let i = 0; i < req.files?.length; i++) {
      const file = req.files[i].path
      const result = await cloudinary.uploader.upload(file, { resource_type: "auto" })
      url[i] = result.url;
    }

    console.log("mirii333333")
    //  upload = await Lesson.findByIdAndUpdate(lesId, body, { new: true });
    upload = await Lesson.findByIdAndUpdate(
      { _id: lesId },
      { $push: { content: url } }
    )
    console.log("mirii")
    res.send(upload)
  } catch (error) {
    next(error)
  }

}

exports.createLesson = async (req, res, next) => {
  req.body.ownerUser = res.locals.user_id;

  const url = []
  for (let i = 0; i < req.files?.length; i++) {
    const file = req.files[i].path
    const result = await cloudinary.uploader.upload(file, { resource_type: "auto" })
    url[i] = result.url;
  }

  const { ownerLesson, lessonName, descerption, ownerUser } = req.body;
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

exports.deleteFile = async (req, res, next) => {
  const url = req.query.url;
  console.log(url)
  const urlArray = url.split('/')
  console.log(urlArray)
  const file = urlArray[urlArray.length - 1]
  console.log(file)
  const fileName = file.split('.')[0]
  console.log(fileName)

  const { delId } = req.query;
  let files = await Lesson.findOneAndUpdate({ _id: delId }, { $pull: { content: { $in: [url] } } })

  await cloudinary.uploader.destroy(fileName)


  res.status(200).json({ message: 'sucsses' })


}


exports.deleteLesson = async (req, res, next) => {

  // const url = req.query.url;
  // console.log(url)


  // const { delId } = req.query;
  const { delId } = req.params;
  const userId = res.locals.user_id;
  try {
    console.log("miri")
    let lesson = await Lesson.findOne({ _id: delId })
    console.log(lesson)
    
        console.log("miri11111")
        if (String(lesson.ownerUser) !== String(userId)) {
          throw new Error("you are not auther")
        }

    lesson.content.map(async (url) => {
      const urlArray = url.split('/')
      console.log(urlArray)
      const file = urlArray[urlArray.length - 1]
      console.log(file)
      const fileName = file.split('.')[0]
      console.log(fileName)
      await cloudinary.uploader.destroy(fileName)

    })
    // console.log(lesson)
    lesson = await Lesson.findByIdAndDelete(delId)
    // .then(result => {
    //   cloudinary.uploader.destroy(fileName, (err, result) => {
    //     console.log(err, result)
    //   })
    //   res.status(200).json({ message: result })
    // });


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
    let patchLesson = await Lesson.findOne({ _id: idEdit });
    if (!patchLesson) {
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



