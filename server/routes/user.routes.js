const express = require("express");
const { createUser, login, getUserSpaces } = require("../controllers/user.controllers");


const router = express.Router();


router.post("/createUser", createUser);
router.post("/login", login);
router.get("/getUserSpaces/", getUserSpaces);

module.exports=router;