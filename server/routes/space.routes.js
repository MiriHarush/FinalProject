const express = require("express");
const { addSpace, getInfoSpace } = require("../controllers/space.controller");
const { auth } = require("../middleWare/auth");



const router = express.Router();


router.post("/addSpace", auth(), addSpace);
router.get("/getInfoSpace/:id", getInfoSpace);


module.exports=router;