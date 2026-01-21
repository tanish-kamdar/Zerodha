const { Signup,Login, Logout, Refresh } = require("../controllers/AuthController");
const app=require('express');
const router=app.Router({mergeParams:true});

router.post("/signup", Signup);
router.post("/login", Login);
router.get('/logout', Logout);
router.get('/refresh', Refresh);

module.exports=router;