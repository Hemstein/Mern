
import { GETPRODUCT } from "../Const/product"



const initialState={
    products:[]
 
}

export const ProductReducer=(state=initialState,{type,payload})=>{
 switch (type) {
    case GETPRODUCT:
    return {...state,products:payload} 
  default:
    return state

} }