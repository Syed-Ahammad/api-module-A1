const express = require('express');
const cors = require("cors");

const app = express();

app.use(cors())
app.use(express.json())

const Port = process.env.port || 5000;


app.listen(Port, ()=>{
    console.log("server is running on port " + Port)
})