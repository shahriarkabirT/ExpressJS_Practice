const express = require('express');
const app = express();

const log = (req,res,next) =>{
    console.log("logging");
    next();
}

app.all('*', log);

app.get('/',(req,res)=>{
   res.send(a);
})
//have to user this error handler at last
app.use((req,res,next)=>{
    next('Requested url was not found!');
});

app.use((err,req,res,next)=>{
    if(err.message){
        res.status(500).send(err.message);
    }
    else{
        res.status(500).send(err);
    }
})

// Start the server
app.listen(3001, () => {
    console.log(`App listening on port ${3001}`);
});
