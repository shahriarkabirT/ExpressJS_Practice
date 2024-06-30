const express = require('express');
const port = 3001;
const app = express();
app.locals.title = 'my app';

app.get('/',(req,res)=>{
    console.log(req.app.locals.title);
    res.send('this is home page');
})

app.get('/shahriar',(req,res)=>{
    console.log(local.firstName);
    res.send("This is Shahriar Page");
})
// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
