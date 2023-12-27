const express = require("express");
const { addSpace, getInfoSpace, deleteSpace, getAllSpaces } = require("../controllers/space.controller");
const { auth } = require("../middleWare/auth");



const router = express.Router();

router.get("/getAllSpaces",auth(), getAllSpaces);

router.post("/addSpace", auth(), addSpace);
router.get("/getInfoSpace/:id", auth(), getInfoSpace);
router.delete("/deleteSpace/:idDelete", auth(), deleteSpace);



module.exports=router;