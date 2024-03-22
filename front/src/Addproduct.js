import React, { useState } from 'react'
import { addproduct } from './Redux/Action/ActionProduct'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Addproduct() {
    const [newname, setname] = useState("")
    const [newdescription,setdescription] = useState("")
    const [newprice,setprice]=useState("")
    const [photo, setphoto] = useState()
    const dispatch=useDispatch()
   const navigate=useNavigate()

    const handelclick= ()=>{

      const data= new FormData()
      data.append("name",newname)
      data.append("description",newdescription)
      data.append("price",newprice)
      data.append("file",photo)
      dispatch(addproduct(data))
      navigate("/")
    }
    
  return (
    <div>
        <label>name</label>
        <input onChange={(e)=>setname(e.target.value)}/>
        <label>description</label>
        <input onChange={(e)=>setdescription(e.target.value)}/>
        <label>price</label>
        <input onChange={(e)=>setprice(e.target.value)}/>
        <label>photo</label>
        <input type='file' onChange={(e)=>setphoto(e.target.files[0])}/>
       


    
      <button  onClick={handelclick}  >save</button>
    </div>
  )
}

export default Addproduct
