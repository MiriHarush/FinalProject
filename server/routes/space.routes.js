const express = require("express");
const { addSpace, getInfoSpace, deleteSpace, getSpaces, updateSpace, getAllSpaces } = require("../controllers/space.controller");
const { auth } = require("../middleWare/auth");



const router = express.Router();

router.get("/getAllSpaces",auth(), getAllSpaces);

router.post("/addSpace", auth(), addSpace);
router.get("/getInfoSpace/:id", auth(), getInfoSpace);
router.delete("/deleteSpace/:idDelete", auth(), deleteSpace);
router.patch("/updateSpace/:editId", auth(), updateSpace)



module.exports=router;