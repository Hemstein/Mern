import axios from "axios"
import { GETPRODUCT, addproductsucces } from "../Const/product"

export const getproduct = () =>async(dispatch)=>   {
    try {
      const res= await axios.get('http://localhost:4000/api/product'  )
    dispatch({type:GETPRODUCT,payload:res.data}) 

  
  }
    catch (err) {
      console.log(err)}}

      export const addproduct = (productBody) =>async(dispatch)=>   {
        try {
          const res= await axios.post('http://localhost:4000/api/', productBody )
        dispatch({type:addproductsucces ,payload:res.data}) 
      
      } 
      catch (err) {
        console.log(err)}}