const express = require("express");
const { auth } = require("../middleWare/auth");
const { addCourse, deleteCourse, patchCourse, getAllCourses, getInfoCourse, getAcceptCourses } = require("../controllers/course.controller");



const router = express.Router();

router.get("/getAllCourses/:id",auth(), getAllCourses);
router.get("/getInfoCourse/:id", auth(), getInfoCourse);
router.post("/addCourse", auth(), addCourse);
router.delete("/deleteCourse/:delId",auth(),deleteCourse)
router.patch("/updateCourse/:idEdit", auth(), patchCourse);


module.exports=router;