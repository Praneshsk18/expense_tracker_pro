const errorHandlers = (e,req,res,next) => {




    if(e){
        if(e.message){
            res.status(400).json({
                status:"failed",
                error:e.message
            })
        }else{
            res.status(400).json({
                status:"failed",
                error:e,
            })
        }
    }else{
        next();
    }
};

module.exports=errorHandlers;