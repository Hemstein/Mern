const express=require("express")
const product=require("../Model/Product")

const router=express.Router()

router.get("/",async(req,res)=>{
    try{
        const  result= await product.find()
        res.send(result)
    }
    catch (error){
    console.log(error)
    }
})
router.post("/",async(req,res)=>{
    try {
        const newproduct=new product( req.body )
        await newproduct.save()
        res.send(newproduct)
 } 
     catch (error) {
     console.log(error)
 }
})
router.put("/:id",async(req,res)=>{
    try {
 
        const result = await product.findOneAndUpdate({_id:req.params.id},{...req.body},{new:true})
        res.send(result)
        console.log(result)
       
 } 
     catch (error) {
     console.log(error)
 }
})

router.delete("/:id",async(req,res)=>{
    try{
    const result=await product.findOneAndDelete({_id:req.params.id})
    res.send(result)
}
    catch (error) {
      console.log(error)
}}
)

module.exports= router