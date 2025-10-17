const jwt=require('jsonwebtoken');

module.exports=  function verifyToken(req,res,next){
    const authHeader=req.headers['authorization'];

    if(!authHeader) return res.status(401).json({
        status : false,
        message : 'No token provided.'
    })
    const token =authHeader.split(' ')[1];
    if(!token) return res.status(401).json({
        success : false,
        message : 'Token is malformed.'
    });

    jwt.verify(token,process.env.TOKEN_KEY,(err,user)=>{
        if(err) return res.status(403).json({
            success : false,
            message : 'Token expired or invalid'
        });
        req.user=user;
        next();
    })
}