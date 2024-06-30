const express = require('express');
const port = 3001;
const app = express();


const token = "true";

app.all('/',(req,res)=>{

    res.send('this is home page');
})

app.delete('/',(req,res)=>{

    res.send('this is home page');
})



// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
