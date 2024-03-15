import { addusersucces } from "../Const/User";



const initialState={
    users:[],
    user:{}
}

export const UserReducer=(state=initialState,action)=>{
    switch (action) {
        case addusersucces: 
        return {...state,user:action.payload}
            
           
    
        default:
            return state
    }
    
}