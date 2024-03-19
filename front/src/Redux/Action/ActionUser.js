import axios from "axios"
import { GET_CURRENT_FAIL, GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, addusersucces } from "../Const/User"

export const adduser = (userBody,navigate) =>async(dispatch)=>   {
    try {
      const resUser= await axios.post('http://localhost:4000/api/user/register', userBody )
    dispatch({type:addusersucces ,payload:resUser.data}) 
    navigate("/login")
  
  }
    catch (err) {
      console.log(err)
   

     }}

     export const loginUser = (Body, navigate) => async (dispatch) => {
      try {
          const res = await axios.post("http://localhost:4000/api/user/login", Body)
          dispatch({ type: LOGIN_SUCCESS, payload: res.data })
          navigate('/profile')
    } 
       catch (err) {
          console.log(err);
          dispatch({ 
             type: LOGIN_FAIL,
              payload: err.response.data })

      }}


      export const getCurrent = () => async (dispatch) => {
        const token = localStorage.getItem("token");
      
        try {
            const res = await axios.get("http://localhost:4000/api/user/current", { headers: { Authorization: `Bearer ${token}` } })
            dispatch({ type: GET_CURRENT_SUCCESS, payload: res.data })
            console.log(res.data);
      
        } catch (error) {
      
            dispatch({ type: GET_CURRENT_FAIL, payload: error })
        }}

        export const logout=()=>{
          return {type:LOGOUT}
        }
