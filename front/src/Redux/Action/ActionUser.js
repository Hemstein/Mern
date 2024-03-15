import axios from "axios"
import { addusersucces } from "../Const/User"

export const adduser = (userBody) =>async(dispatch)=>   {
    try {
      const resUser= await axios.post('http://localhost:4000/api/user/register', userBody )
    dispatch({type:addusersucces ,payload:resUser.data}) 
      }
    catch (err) {
      console.log(err)
   

     }}

