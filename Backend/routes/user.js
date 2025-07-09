const { Signup,Login } = require("../controllers/AuthController");
const app=require('express');
const router=app.Router({mergeParams:true});

router.post("/signup", Signup);
router.get("/login", Login);

module.exports=router;