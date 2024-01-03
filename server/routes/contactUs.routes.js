const express = require("express");
const { addContactRequest, getContactRequests } = require("../controllers/contactUs.controller");

const router = express.Router();


router.post("/", addContactRequest);
router.get("/getContactRequests", getContactRequests);


module.exports=router;