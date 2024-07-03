const logger = (req,res,next)=>{
    console.log(`${new Date(Date.now()).
        toLocaleString()} - ${req.method} -
         ${req.originalUrl}`);
         
    // throw new Error("Throwing random error");
    next();
}
module.exports = logger;