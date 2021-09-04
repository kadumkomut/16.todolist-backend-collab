const express = require('express')
const cors = require('cors')
const helmet = require('helmet');
const compression = require('compression');
require('dotenv').config();
// initialisation and connection of mongo
require('./helpers/init_mongodb')

// importing routes
const addTodo = require('./routes/addtodo')
const deleteTodo = require('./routes/deleteTodo')
const getTodo = require('./routes/gettodo')
const updateTodo = require('./routes/updateTodo')
const deleteTodoAll = require('./routes/deleteTodoAll')

// starting 
const app = express();

// middle ware
app.use(helmet())
app.use(cors({origin:"*"}))
app.use(compression());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// routes
app.use('/addtodo',addTodo);
app.use('/deletetodo',deleteTodo)
app.use('/gettodo',getTodo)
app.use('/updatetodo',updateTodo)
app.use('/deleteall',deleteTodoAll)


app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/index.html');
});


const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log('server listening on port '+port)
})