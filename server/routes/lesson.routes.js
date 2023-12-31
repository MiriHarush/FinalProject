const { createLesson } = require("../controllers/lesson.controller");
const { auth } = require("../middleWare/auth");
const express = require("express");
const multer = require("multer");
const router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

// הגדרת הראוט
router.post("/createLesson", upload.fields([
    { name: 'pdf', maxCount: 1 },
    { name: 'zip', maxCount: 1 },
    { name: 'images', maxCount: 5 },
    { name: 'youTube', maxCount: 1 },
    { name: 'links', maxCount: 5 }
]), createLesson);

module.exports = router;

