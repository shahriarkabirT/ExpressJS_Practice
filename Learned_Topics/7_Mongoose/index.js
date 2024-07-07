const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler')

const port = 3001;

const app = express();
app.use(express.json());

// connect with database
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/shahriar');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.get('/',(req,res)=>{
   res.send("Home Page");
})

app.use('/todo',todoHandler);

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
app.listen(port, () => {
    console.log(`App listening on ${port}`);
});
