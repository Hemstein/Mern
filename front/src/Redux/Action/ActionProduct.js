import axios from "axios"
import { GETONEPRODUCT, GETPRODUCT, addproductsucces, deleteproductsucces, editproductsucces } from "../Const/product"

export const getproduct = () =>async(dispatch)=>   {
    try {
      const res= await axios.get('http://localhost:4000/api/product'  )
    dispatch({type:GETPRODUCT,payload:res.data}) 
 }
    catch (err) {
      console.log(err)}}


export const getoneproduct = (id) =>async(dispatch)=>   {
        try {
          const res= await axios.get(`http://localhost:4000/api/product/${id}` )
        dispatch({type:GETONEPRODUCT,payload:res.data}) 
     }
        catch (err) {
          console.log(err)}}

export const addproduct = (productBody) =>async(dispatch)=>   {
  const token= localStorage.getItem("token")
        try {
          console.log("object")
          const res= await axios.post('http://localhost:4000/api/product', productBody,{ headers: { Authorization: `Bearer ${token}` } } )
        dispatch({type:addproductsucces ,payload:res.data}) 
       dispatch(getproduct())
      } 
      catch (err) {
        console.log(err)}}

 export const editproduct = (id,productBody) =>async(dispatch)=>   {
          const token= localStorage.getItem("token")
                try {
                  console.log("object")
                  const res= await axios.put(`http://localhost:4000/api/product/${id}`, productBody,{ headers: { Authorization: `Bearer ${token}` } } )
                dispatch({type:editproductsucces ,payload:res.data}) 
                dispatch(getproduct())
              } 
              catch (err) {
                console.log(err)}}



export const deleteproduct = (id) =>async(dispatch)=>   {
                  const token= localStorage.getItem("token")
                        try {
                         
                          const res= await axios.delete(`http://localhost:4000/api/product/${id}`,{ headers: { Authorization: `Bearer ${token}` } } )
                        dispatch({type:deleteproductsucces ,payload:res.data}) 
                        dispatch(getproduct())
                      } 
                      catch (err) {
                        console.log(err)}}               