const cookieParser = require('cookie-parser');
const express = require('express');
const port = 3001;
const app = express();
const logger = require('./middlewares/logMiddleware.js')
const errorMiddleware = require('./middlewares/errorMiddleware.js')
const wrapperMiddleware = require('./middlewares/wrapperMiddleware.js')
// import {logger} from './middlewares/logMiddleware.js'
const adminRouter = express.Router();

//third party middleware 
// app.use(cookieParser);


adminRouter.use(logger);

app.get('/',(req,res)=>{
    res.send("homepage");
})
app.use('/admin',adminRouter);
//routerMiddleware

adminRouter.use(wrapperMiddleware({log:true}));

adminRouter.get('/dashboard',(req,res)=>{
    res.send("Dashboard");
})




app.get('/about',(req,res)=>{
    res.send("about page");
})

adminRouter.use(errorMiddleware);


// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
