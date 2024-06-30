const express = require('express');
const port = 3001;
const app = express();

app.route('/')
    .get((req,res)=>{
        res.send("this is get")
    })
    .post((req,res)=>{
        console.log('this is post');
        res.send("this is post")
    })
    .put((req,res)=>{
        res.send("this is put")
    })
    .delete((req,res)=>{
        res.send("this is delete")
    })

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
