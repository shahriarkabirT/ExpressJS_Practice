const express = require('express');

adminRouter.get('/dashboard',(req,res)=>{
    res.send("Dashboard");
})