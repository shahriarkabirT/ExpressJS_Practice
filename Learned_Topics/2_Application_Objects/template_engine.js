const express = require('express');
const port = 3001;
const app = express();

app.set('view engine','ejs');

app.route('/')
    .get((req,res)=>{
        res.render('index');
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

app.get('/about',(req,res)=>{
    res.render('about');
})

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
