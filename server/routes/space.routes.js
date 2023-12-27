const express = require("express");
const { addSpace, getInfoSpace, deleteSpace, getSpaces } = require("../controllers/space.controller");
const { auth } = require("../middleWare/auth");



const router = express.Router();

router.get("/getAllSpaces", getSpaces);

router.post("/addSpace", auth(), addSpace);
router.get("/getInfoSpace/:id", getInfoSpace);
router.delete("/:idDelete", auth(), deleteSpace);



module.exports=router;