const express = require('express')
const router = express.Router();
const TodoListModel = require('../models/todolist')

router.post('/',async(req,res)=>{
    const { text } = req.body;
    const todolist = new TodoListModel({
        text : text
    })
    try{
        await todolist.save()
        res.send(todolist)
    }catch(err){
        res.status(500).send(err)
    } 
})


module.exports = router;