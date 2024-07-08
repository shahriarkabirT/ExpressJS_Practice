const express = require('express');
const port = 3001;
const app = express();

app.param('id', (req,res,next,id)=>{

    const user ={
    userid : id,
    name: 'Bangladesh',
    };
    req.userDetails = user

    next();
})


app.get('/user/:id',(req,res)=>{
    console.log(req.userDetails);
    
    res.send('This is param example');
})
// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
