import { GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, addusersucces } from "../Const/User";



const initialState={
    users:[],
    user:{},
    err:""
}

export const UserReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case addusersucces: 
              return {...state,user:payload}
        
        case LOGIN_SUCCESS:
            localStorage.setItem("token",payload.token)
              return {...state,user:payload.user}

        case GET_CURRENT_SUCCESS:
            return {...state,user:payload.User}
        
        case LOGOUT:
            localStorage.removeItem("token")
            return {...state,user:{}}
        case LOGIN_FAIL:
            return {...state,err:payload.errors[0].msg}
    
        default:
            return state
    }
    
}