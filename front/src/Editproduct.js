import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editproduct, getoneproduct } from './Redux/Action/ActionProduct'

function Editproduct() {
    const {id}=useParams()
    const products=useSelector(state=>state.ProductReducer.products )
    console.log(id)
    const oneproduct=useSelector(state=>state.ProductReducer.product )
  const disptach=useDispatch()
    
  useEffect(() => {
        disptach(getoneproduct(id))
    }, [id])
    
    const product=products.find(el=>el._id==id)
    const [newname, setname] = useState(oneproduct.name)
    const [newdescription,setdescription] = useState(oneproduct.description)
    const [newprice,setprice]=useState(oneproduct.price)
       const navigate=useNavigate()
    const handleclick=()=>{
        disptach(editproduct(product._id,{name:newname,description:newdescription,price:newprice}))
        navigate("/")
    }
  return (
    <div>
        <p>edit {oneproduct.name}</p>
       <label>name</label>
        <input onChange={(e)=>setname(e.target.value)}  />
        <label>des</label>
        <input onChange={(e)=>setdescription(e.target.value)} />
        <label>price</label>
        <input onChange={(e)=>setprice(e.target.value)}  />
        <button  onClick={handleclick}  >save</button>
    </div>
  )
}

export default Editproduct
