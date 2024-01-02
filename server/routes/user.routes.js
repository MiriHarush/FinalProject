const express = require("express");
const { sendEmail, mail } = require("../controllers/sendMessage");
const { createUser, login, getUserSpaces, getInfoUser, getUsers, patchUser, forgotPassword, resetPassword, getUserInvitationsByEmail } = require("../controllers/user.controllers");
const { auth } = require("../middleWare/auth");
const upload = require("../middleWare/multer");


const router = express.Router();


router.post("/createUser",upload.single('file'), createUser);
router.post("/login", login);
router.post("/forgotPassword", forgotPassword);
router.post("/resetPassword", resetPassword);
router.get("/getAllUsers", getUsers);
router.get("/getUserSpaces/",auth(), getUserSpaces);
router.get("/getInfoUser/:id", getInfoUser);
router.patch("/editUser/:idEdit", auth(), patchUser);

// router.post("/sendEmail", mail);

module.exports=router;