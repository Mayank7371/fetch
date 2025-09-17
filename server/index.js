const express = require("express")
require("dotenv").config()
const app = express()
const port = process.env.PORT || 5000

app.get("/",(req,res,next)=>{
    res.send("hey")
    next()
})
app.listen(port,()=>{
    console.log(`app is listening on port ${port}`);
    
})