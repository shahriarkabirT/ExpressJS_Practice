const express = require('express');
const app = express();
const port = process.env.PORT;

// Middleware

app.use(express.json());


app.get('/',(req,res)=>{
    res.send("this is home page" );
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