const express = require('express');
const port = 3001;
const app = express();
const adminRoute = express.Router();
app.use(express.json());

adminRoute.get('/dashboard',(req,res)=>{
    console.log("1. method = " + req.method);
    console.log("2. hostname = " + req.hostname);
    console.log("3. ip = " + req.ip);
    console.log("4. params = " +req.params);
    console.log("5. protocol = " +req.protocol);
    console.log("6. url = " + req.url);
    console.log("7. path = " + req.path);
    
    res.send('we are in Admin Dashboard');
})
app.use('/admin',adminRoute);

app.get('/user/:id',(req,res)=>{
    
    console.log("1. method = " + req.method);
    console.log("2. hostname = " + req.hostname);
    console.log("3. ip = " + req.ip);
    console.log("4. params = " + req.params.id);
    console.log("5. protocol = " +req.protocol);
    console.log("6. url = " + req.url);
    console.log("7. path = " + req.path);
    console.log("7. query = " +req.query.name);


    res.send(`this is user page`);
})

app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send("this is a post request")
})

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
