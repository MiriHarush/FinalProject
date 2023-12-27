const express = require("express");
const { auth } = require("../middleWare/auth");
const { addCourse, deleteCourse, patchCourse, getAllCourses, getInfoCourse } = require("../controllers/course.controller");



const router = express.Router();

router.get("/getAllCourses", getAllCourses);

router.post("/addCourse", auth(), addCourse);
router.delete("/deleteCourse/:idDelete", auth(), deleteCourse);
router.patch("/updateCourse/:idEdit", auth(), patchCourse);
router.get("/getInfoCourse/:id", auth(), getInfoCourse);





module.exports=router;