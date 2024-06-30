const express = require('express');
const app = express();
const port = 3001;
const router = express.Router({
    caseSensitive:true,
});
// Middleware
app.use(express.text());
app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(__dirname + '/public/',{
    index: 'home.html'
})
);
app.use(router);

router.get('/',(req,res)=>{
    const dir = __dirname;
    res.send("this is home page " + dir);
})

// POST route to handle user creation
app.post('/', (req, res) => {
    const userData = (req.body);
    console.log(userData);
    res.status(201).send('User created successfully');
}); 

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});