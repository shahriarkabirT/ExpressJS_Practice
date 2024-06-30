const express = require('express');
const port = 3001;
const app = express();

// app.enable('case sensitive routing');
app.disable('case senitive routing');

app.get('/enable',(req,res)=>{
    
    res.send('This routes is not case Sensitive, use app.enable to activate');
})

app.set('name','shahriar');
const name = app.get('name');
console.log(name);

// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
