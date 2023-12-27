const express = require("express");
const { auth } = require("../middleWare/auth");
const { addCourse } = require("../controllers/course.controller");



const router = express.Router();


router.post("/addCourse", auth(), addCourse);


module.exports=router;