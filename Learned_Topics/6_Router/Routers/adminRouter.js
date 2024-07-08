const express = require('express');
const adminRouter = express.Router();

// const log = (req,res,next) =>{
//     console.log("logging");
//     next();
// }

// adminRouter.get('*', log);

adminRouter.get('/dashboard',(req,res)=>{
    res.send("Dashboard");
})

// .router .all

adminRouter
    .route('/profile')
    .all((req,res,next)=>{
            console.log("this is all");
            next();
    })
    .get((req,res,next)=>{
        res.send(req.method);
    })
    .post((req,res,next)=>{
        res.send(req.method);
    })
    .put((req,res,next)=>{
        res.send(req.method);
    })

module.exports = adminRouter