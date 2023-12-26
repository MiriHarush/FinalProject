const express = require("express");
const { addSpace } = require("../controllers/space.controller");
const { auth } = require("../middleWare/auth");



const router = express.Router();


router.post("/addSpace", auth(), addSpace);


module.exports=router;