const express = require('express');

const { register, login } = require("../controller/authController");
const apiLimiter = require('../middleware/rateLimitMiddleware');

const router = express.Router();

router.post("/register", register);
router.post("/login",apiLimiter, login);

router.get("/protect",(req,res)=>{
    res.json({
        message:"This is protected route"
    })
})

module.exports = router;