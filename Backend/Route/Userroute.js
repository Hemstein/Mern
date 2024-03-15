const express=require("express")
const user=require("../Model/User")
const {registerCheck,loginCheck,validator}=require("../Middelwares/Validator")
const bcrypt=require("bcrypt")
const router=express.Router()
const jwt=require("jsonwebtoken")
const isAuth = require("../Middelwares/isAuth")
const isadmin=require("../Middelwares/isAdmin")
const upload = require("../utils/multer")



router.get("/",isAuth(),isadmin,async(req,res)=>{
    try {
        const result=  await  user.find()
        res.send(result)
 } 
     catch (error) {
     console.log(error)
 }
})
router.post("/register", upload("user").single("file"),registerCheck(),validator, async(req,res)=>{
    try {
        const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
        const{email,password}=req.body
        const existuser= await user.findOne({email})
        if(existuser){
            return res.status(400).send({msg:"user exist login"})
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newuser=new user( req.body )
        newuser.img= url
        newuser.password = hashedPassword

       
        await newuser.save()
        res.send(newuser)
 } 
     catch (error) {
     console.log(error)
 }
})
router.post('/login', loginCheck(), validator, async (req, res) => {
    const { email, password } = req.body
    try {
        const existUser = await user.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)

        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        existUser.password = undefined
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: existUser, token })
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: error.message })
}})
router.get("/current",isAuth(),(req,res)=>{
    res.send({User:req.user})
})

module.exports= router