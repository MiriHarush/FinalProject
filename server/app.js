const express = require("express");
const cors = require("cors");
const path= require("path");
const userRoutes= require("./routes/user.routes")

const app = express();
app.use(express.json());
app.use(cors());

// app.use(express.static(path.join(__dirname,"public")))

app.use("/users", userRoutes);

app.use((err,req,res,next)=>{
    res.status(400).json({
        status:"fail",
        message:err.message
    });
})

module.exports.app= app;