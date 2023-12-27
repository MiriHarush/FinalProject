const { Lesson } = require("../model/lesson.model");


// Controller function to add a lesson
const addLesson = async (req, res) => {
  try {
    // Extract lesson data from the request body
    const { ownerLesson, lessonName, description, content } = req.body;

    // Create arrays to store different file types
    const images = [];
    const pdf = [];
    const youTube = [];
    const zip = [];
    const links = [];

    // Iterate over content and categorize files
    content.forEach(file => {
      switch (file.type) {
        case 'image':
          images.push(file);
          break;
        case 'pdf':
          pdf.push(file);
          break;
        case 'youTube':
          youTube.push(file);
          break;
        case 'zip':
          zip.push(file);
          break;
        case 'link':
          links.push(file);
          break;
      }
    });

    // Create a new lesson instance
    const newLesson = new Lesson({
      ownerLesson,
      lessonName,
      description,
      content: {
        images,
        pdf,
        youTube,
        zip,
        links,
      },
    });

    // Save the lesson to the database
    const savedLesson = await newLesson.save();

    // Respond with the saved lesson
    res.status(201).json(savedLesson);
  } catch (error) {
    // Handle errors
    console.error('Error adding lesson:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { addLesson };
