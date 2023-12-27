const express = require("express");
const { auth } = require("../middleWare/auth");
const { addCourse, deleteCourse } = require("../controllers/course.controller");



const router = express.Router();


router.post("/addCourse", auth(), addCourse);
router.delete("/deleteCourse/:delId",auth(),deleteCourse)

module.exports=router;