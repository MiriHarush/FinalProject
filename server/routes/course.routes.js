const express = require("express");
const { auth } = require("../middleWare/auth");
const { addCourse, deleteCourse, patchCourse, getAllCourses, getInfoCourse } = require("../controllers/course.controller");



const router = express.Router();

router.get("/getAllCourses", auth(), getAllCourses);

router.post("/addCourse", auth(), addCourse);
router.patch("/updateCourse/:idEdit", auth(), patchCourse);
router.get("/getInfoCourse/:id", auth(), getInfoCourse);
router.delete("/deleteCourse/:delId",auth(),deleteCourse)


module.exports=router;