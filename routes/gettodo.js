const express = require('express')
const router = express.Router();
const TodoListModel = require('../models/todolist')

router.get('/',async(req,res)=>{
    try{
        const myLists = await TodoListModel.find({});
        res.send(myLists)
    }catch(err){
        res.status(500).send(err);
    }
})

module.exports = router;