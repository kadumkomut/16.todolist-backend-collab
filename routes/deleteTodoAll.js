const express = require('express')
const router = express.Router();
const TodoListModel = require('../models/todolist')

router.delete('/', async(req, res)=>{
    try{
        const deletePost = await TodoListModel.deleteMany({})
        res.send(deletePost);
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;