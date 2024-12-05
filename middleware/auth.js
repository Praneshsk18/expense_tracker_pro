
const jwt=require('jsonwebtoken');
const auth = (req,res,next) =>{
    console.log(req.headers);

    try{
        const accesstoken = req.headers.authorization.replace("Bearer ","");
        const JWTverification = jwt.verify(accesstoken,process.env.JWT_SALT);
        req.user=JWTverification;
    }
    catch(e){
        res.status(401).json({
            status:"failed",
            message:"Unauthorized!"
        });
        return;
    }

    next();
};
module.exports = auth;