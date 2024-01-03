const express = require("express");
const { auth } = require("../middleWare/auth");
const { updateInvite, getUserInvitationsByEmail } = require("../controllers/invatation.controller");



const router = express.Router();


router.patch("/updateInviteStatus/:idInvite", auth(), updateInvite);
router.get("/getInvitations/:userEmail", auth(), getUserInvitationsByEmail);



module.exports=router;