const mongoose=require("mongoose")
const productSchema=new mongoose.Schema({
name:{type:String,required:true},
description:{type:String,required:true},
price:{type:Number,required:true}
})
const product= mongoose.model("product",productSchema)//sandou9

module.exports=product