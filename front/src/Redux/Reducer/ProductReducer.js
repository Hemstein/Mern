
import { GETONEPRODUCT, GETPRODUCT, addproductsucces } from "../Const/product"



const initialState={
    products:[],
    product:{}
 
}

export const ProductReducer=(state=initialState,{type,payload})=>{
 switch (type) {
    case GETPRODUCT:
    return {...state,products:payload} 
    case  GETONEPRODUCT:
      return {...state,product:payload} 
    
  default:
    return state

} }