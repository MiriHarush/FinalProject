// controllers/lessonController.js
const { Lesson } = require("../model/lesson.model");

exports.createLesson = async (req, res) => {
    try {
        const lessonData = {
            ownerLesson: req.body.ownerLesson,
            lessonName: req.body.lessonName,
            descerption: req.body.descerption,
            content: {
                pdf: req.files.pdf[0].path,
                zip: req.files.zip[0].path,
                images: req.files.images.map((image) => image.path),
                youTube: req.body.youTube,
                links: req.body.links,
            },
        };

        const newLesson = new Lesson(lessonData);
        const savedLesson = await newLesson.save();

        res.status(201).json(savedLesson);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

