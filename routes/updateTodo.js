const express = require('express')
const router = express.Router();
const TodoListModel = require('../models/todolist')

router.patch('/:todoListId',async(req,res)=>{
    try{
        const updatePost = await TodoListModel.findByIdAndUpdate(req.params.todoListId,{text : req.body.text });
        res.send(updatePost);
    }catch(err){
        res.status(500).send(err);
    }
})
module.exports = router;