const express = require('express');
const publicRouter = express.Router();

publicRouter.get('/',(req,res)=>{
    res.send("homepage");
})
    //outdated

// publicRouter.param('user',(req,res,next,id)=>{
//     if(id == 1) req.user = 'admin';
//     else req.user = "annonymous";
//     next();
// })

// publicRouter.param((param,option)=>(req,res,next,id)=>{
//     if(id == option){
//         next();
//     }
//     else{
//         res.sendStatus(403);
//     }
// })

// publicRouter.param('user','12');


// publicRouter.get('/:user',(req,res)=>{
//     res.send("hello " + req.user);
// })

    //new

publicRouter.get('/:id',(req,res,next)=>{
    const id = req.params.id;
    if(id == 1){
        req.user = 'admin';
       
    }
    else{
        req.user = 'anonymous';
    }
    next();

},(req,res)=>{
    res.send("hello " + req.user);
})


module.exports = publicRouter;