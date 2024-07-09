const express = require('express');
const mongoose = require('mongoose');
const todoSchema = require('../schemas/todoSchemas');
const e = require('express');
const router = express.Router();
const todo = new mongoose.model('todo',todoSchema);

//Get all todos by query url
router.get('/',(req,res)=>{
     const query = req.query;
        const ignore = {
            date:0,
        }
        todo.find(query)
        .select(ignore)
        .then(todos=>{
            res.send(todos)
        })
        .catch(err=>{
            res.send("failed")
        })
                     
})

//Get element by instance fucntion
router.get('/active',async (req,res)=>{
    const newTodo = new todo();
    const data = await newTodo.findActive();
    res.send(data);
})

//Get element by static fucntion
router.get('/static',async (req,res)=>{
    const data = await todo.findByJs();
    res.send(data);
})

//Get single todo by params
router.get('/:id',(req,res)=>{
    const query = {
       _id : req.params.id
    }
        todo.find(query)
        .then(todos=>{
            res.send(todos)
        })
        .catch(err=>{
            res.send("failed")
        })
})


//create
router.post('/',(req,res)=>{
    const newTodo = new todo(req.body);
    console.log(req.body);
    newTodo.save()
        .then(result=>{
            res.status(200).json({
                message: "Data is saved successfully",
                result
            })
        })
        .catch(err=>{
            res.status(500).json({
                error:"there was a server side error",
                err
            })
        })
    
})

//create
router.post('/all',(req,res)=>{
    const newTodo = req.body;
    console.log(req.body);
    todo.insertMany(newTodo)
        .then(result=>{
            res.status(200).json({
                message: "All the Data is saved successfully",
                result
            })
        })

        .catch(err=>{
            res.status(500).json({
                error:"there was a server side error",
                err
            })
        })
})

router.put('/:id',(req,res)=>{
    const id = req.params.id;
    const updateData = req.body;

    todo.findByIdAndUpdate(
        id,
        {
            $set : updateData,
        }
    )
    .then(updatedData =>{
        if(!updateData){
            res.status(404).send('Todo Not Found');
        }
        res.json('Data Updated Successfully'+ updatedData);
    })
    .catch(error =>{
        res.status(500).send('Error Updating Message' + error.message);
    })
})

router.delete('/:id',(req,res)=>{
    const query = {
        _id : req.params.id
     }
         todo.deleteOne(query)
         .then(todos=>{
             res.json("deleted")
         })
         .catch(err=>{
             res.send("failed")
         })
})

module.exports = router;