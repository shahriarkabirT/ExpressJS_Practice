const express = require('express');
const app = express();
const publicRouter = require('./Routers/publicRouter');
const adminRouter = require('./Routers/adminRouter')


const log = (req,res,next) =>{
    console.log("logging");
    next();
}

app.all('*', log);

app.use('/', publicRouter);
app.use('/admin', adminRouter);
// Start the server
app.listen(3001, () => {
    console.log(`App listening on port ${3001}`);
});
