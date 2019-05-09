const express=require('express');
const app=express();
require('./config/db')
const port=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("api running")
})

app.listen(port,()=>{
    console.log("Listening");
    
})