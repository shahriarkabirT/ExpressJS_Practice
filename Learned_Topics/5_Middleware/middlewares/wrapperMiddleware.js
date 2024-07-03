const wrapperMiddleware = (options)=>{
    return (req,res,next)=>{
        if(!options.log){
            console.log(`it is coming from wrapper`);
                 
            // throw new Error("Throwing random error");
            next();
        }
        else{
            throw new Error("Failed to log");
        }

    }
}
module.exports = wrapperMiddleware;