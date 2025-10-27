const express=require("express")

const app=express()


app.use("/",(req,res)=>{
    res.send("server is ready")
})

app.listen(3000,()=>{
    console.log("server is started on port 3000")
})