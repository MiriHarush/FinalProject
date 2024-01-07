const express = require("express");
const { createComments, patchCommentToReply, getAllComments, updateLike, updateDisLike, deleteComments } = require("../controllers/comments.controllers");
const { auth } = require("../middleWare/auth");


const router = express.Router();
router.get('/getAllComments', getAllComments)
router.post('/createComment', auth(), createComments)
router.delete('/deleteComment/:delId',auth(),deleteComments)
router.patch('/addreply/:id',patchCommentToReply)
router.patch('/updateLike/:id',updateLike)
router.patch('/updateDisLike/:id',updateDisLike)
module.exports=router;