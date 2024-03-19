import React from 'react'

function Product({el}) {
  return (
    <div>
      <h1>name:{el.name}</h1>
      <p>description:{el.description}</p>
      <img src={el.img}/>
    </div>
  )
}

export default Product
