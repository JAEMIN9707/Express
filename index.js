var express = require('express')

var app = express()

app.get("/", (req,res) =>{
    res.send("hello World")
})

app.listen(3000);

app.use(express.static('contents'));


app.get("/hi",(req,res)=>{
    res.send("Hi World")
})

app.post("/post",(req,res)=>{
    res.send ("POST World")
})

app.get("/contents",(req,res)=>{
    
})