const express = require("express");
const cors = require("cors");
const path= require("path");
const userRoutes= require("./routes/user.routes")
const spaceRoutes= require("./routes/space.routes")
const courseRoutes= require("./routes/course.routes")
const lessonRoutes= require("./routes/lesson.routes")
const invitationRoutes= require("./routes/invitation.routes")
const contactUsRoutes= require("./routes/contactUs.routes")
const commentsRoutes= require("./routes/comments.routes")

const app = express();
app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname,"public")))

app.use("/users", userRoutes);
app.use("/spaces", spaceRoutes);
app.use("/courses", courseRoutes);
app.use("/lesson", lessonRoutes);
app.use("/invitations", invitationRoutes);
app.use("/contact", contactUsRoutes);
app.use("/comments", commentsRoutes);

app.use((err,req,res,next)=>{
    res.status(400).json({
        status:"fail",
        message:err.message
    });
})

module.exports.app= app;