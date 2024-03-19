import React from 'react'
import { useSelector } from 'react-redux'
import Product from './Product'

function ProductList() {

  const product=useSelector(state=>state.ProductReducer.products )
  return (
    <div>
      {product.map((el)=><Product el={el}/>)}
    </div>
  )
}

export default ProductList
