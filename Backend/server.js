const express= require("express")
const app= express()
const port=4000
const ConnectDb=require("./config/ConnectDB")
require("dotenv").config()

ConnectDb()

app.use(express.json())
app.use("/api/product",require("./Route/Productroute"))
app.use("/api/user",require("./Route/Userroute"))





app.listen(port,(err)=>{
    err?console.log(err):console.log("server is running")
})