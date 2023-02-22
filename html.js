const express = require('express');

 const app = express();

 const fs = require('fs');
 const path = require('path');

app.get("/",(req,res)=>{
    res.send("Im home page");
    res.end();
})

app.get("/gallery",(req,res)=>{
    res.send("I'm on gallery");
    res.end();
})

// app.get("/submit",(req,res)=>{
//     res.send("getof submit");
// })
app.post("/submit",(req,res)=>{
res.send("post worked");
res.end();

    // const content = "hello";
    // fs.appendFile(path.join(__dirname, "/message.txt"), content, function(err){
    // if(err){
    //     console.log(err);
    //     return;
    // }
    // res.send("data submitted")
    // })
})

app.listen(8000,()=>{
    console.log("appication is running");
});