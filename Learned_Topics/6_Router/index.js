const express = require('express');



app.use('/admin',adminRouter);



// Start the server
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
