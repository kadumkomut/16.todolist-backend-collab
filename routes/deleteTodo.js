const express = require('express')
const router = express.Router();
const TodoListModel = require('../models/todolist')

router.delete('/:todoListId', async(req, res)=>{
    try{
        const deletePost = await TodoListModel.findByIdAndDelete(req.params.todoListId)
        res.send(deletePost);
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;