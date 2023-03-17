const express = require('express');
const cors = require("cors");
const usersRoutes = require('./routes/v1/users.router.js');


const app = express();

app.use(cors())
app.use(express.json())

const Port = process.env.port || 5000;
app.get('/', (req,res)=>{
    console.log('server route create successfully')
    res.send('server is running')
})

app.use('/api/v1/users', usersRoutes)

app.listen(Port, ()=>{
    console.log("server is running on port " + Port)
})