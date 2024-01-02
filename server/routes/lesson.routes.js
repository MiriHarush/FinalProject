// const { createLesson } = require("../controllers/lesson.controller");
const { auth } = require("../middleWare/auth");
const express = require("express");
// const multer = require("multer");
const router = express.Router();
const upload = require("../middleWare/multer");
const { createLesson, getAllLesson, getLesson, deleteLesson, patchLesson, uploadFile, deleteFile } = require("../controllers/lesson.controller");

router.get('/getAllLessones/:idLesson',auth(), getAllLesson)
router.get('/getOneLessones/:id',auth(), getLesson)
router.post('/createLesson', upload.array('file'), auth(),createLesson)
// router.delete("/deleteLesson/:delId",auth(),deleteLesson)
router.delete("/deleteLesson/:delId",auth(),deleteLesson)
router.delete("/deleteFile",auth(),deleteFile)

router.patch("/updateLesson/:idEdit", auth(), patchLesson);

router.post('/uploadFile/:lesId', upload.array('file'), auth(),uploadFile)
module.exports = router;

