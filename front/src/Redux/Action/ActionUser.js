import axios from "axios"
import { adduser } from "../Const/User"

export const register=(body)=>async(dispatch)=>{
try {
   const res= await axios.post("http://localhost:4000/api/user/register",body) 
   dispatch({type:adduser, payload:res.data})
} catch (error) {
    console.log(error)
}
}
