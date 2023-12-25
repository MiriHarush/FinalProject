const mongoose= require("mongoose");

 const lessonSchema= new mongoose.Schema({
    

 })

 const Lesson =mongoose.model("Lesson" , lessonSchema);
 module.exports.Lesson= Lesson;