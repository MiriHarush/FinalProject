const express = require("express");

const { addSpace, getInfoSpace, deleteSpace, getAllSpaces, updateSpace } = require("../controllers/space.controller");


const { auth } = require("../middleWare/auth");



const router = express.Router();

router.get("/getAllSpaces",auth(), getAllSpaces);
router.get("/getInfoSpace/:id", auth(), getInfoSpace);
router.post("/addSpace", auth(), addSpace);
router.delete("/deleteSpace/:idDelete", auth(), deleteSpace);
router.patch("/updateSpace/:editId", auth(), updateSpace)


module.exports=router;