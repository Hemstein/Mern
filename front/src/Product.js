import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteproduct } from './Redux/Action/ActionProduct'

function Product({el}) {
  const disptach=useDispatch()

  const handleclick=()=>{
   disptach(deleteproduct(el._id))
  }
  return (
    <div>
      <h1>name:{el.name}</h1>
      <p>description:{el.description}</p>
      <p>description:{el.price}</p>
      <button  onClick={handleclick}  >x</button>
      <img src={el.img}/>
     <Link to={`/edit/${el._id}`}  ><button>edit</button></Link>
    </div>
  )
}

export default Product
