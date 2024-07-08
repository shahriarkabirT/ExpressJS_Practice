const express = require('express');
const port = 3001;
const app = express();
app.set('view engine','ejs');


app.get('/user/:id',(req,res)=>{
    res.send(`this is user page`);
})
app.get('/about',(req,res)=>{
    console.log(res.headersSent); //true
    res.render('pages/about', 
        {
            name:"Bangladesh"
        }
    );
    console.log(res.headersSent); //false
})

app.get('/profile',(req,res)=>{

    // res.json({
    //     name: "bangladesh"
    // })
    // res.status(200).send("This is ok");
    // res.end();
    // res.sendStatus(403);
    // res.format({
    //     'text/plain': ()=>{
    //         res.send("text/plain");
    //     },
        
    //     'text/html': ()=>{
    //         res.render('pages/profile');
    //     },
 
    //     "application/json":()=>{
    //         res.json({
    //               message: 'profile'
    //         })
    //     },
    //     default:()=>{
    //         res.status(406).send('Not acceptable')
    //     }

    // })

    // res.cookie('firstname','shahriar');
    // res.end();

    res.location('/test');
    res.send("get request")
  
})

app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send("this is a post request")
})

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
