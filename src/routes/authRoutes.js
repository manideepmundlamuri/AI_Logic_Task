const express = require('express');

const { register, login } = require("../controller/authController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/protect",(req,res)=>{
    res.json({
        message:"This is protected route"
    })
})

module.exports = router;