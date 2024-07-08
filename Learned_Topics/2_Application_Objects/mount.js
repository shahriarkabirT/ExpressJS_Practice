const express = require('express');
const port = 3001;
const app = express();
const admin = express();

const token = "true";

app.get('/',(req,res)=>{

    res.send('this is home page');
})
admin.on('mount', function (parent) {
    console.log('Admin Mounted')
    console.log(parent) // refers to the parent app
  })
//mountPath
admin.get('/dashboard',(req,res)=>{
    console.log(admin.mountpath);
    res.send("This is dashboard")
})

if(token){
    app.use('/admin',admin);
}

admin.get('/admin',(req,res)=>{

    res.send("This is admin Page");
})
// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
