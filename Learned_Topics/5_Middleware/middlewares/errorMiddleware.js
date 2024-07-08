const errorMiddleware = (err,req,res,next)=>{
    console.log(err.message);
    res.status(500).send('there is an error');
    // next();
}
module.exports = errorMiddleware