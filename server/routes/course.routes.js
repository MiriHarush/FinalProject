const express = require("express");
const { auth } = require("../middleWare/auth");
const { addCourse, deleteCourse } = require("../controllers/course.controller");



const router = express.Router();


router.post("/addCourse", addCourse);
router.delete("/deleteCourse/:delId", deleteCourse)


module.exports=router;