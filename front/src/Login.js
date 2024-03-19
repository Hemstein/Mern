import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './Redux/Action/ActionUser';


function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handelclick=()=>{

   /* axios.post('http://localhost:4000/api/user/login',{email,password}).then((result) => {
        console.log(result.data)
      }).catch((err) => {
    console.log(err)
      });
      navigate("/profile") */
      dispatch(loginUser({email,password},navigate))
  }
  const error=useSelector(state=>state.UserReducer.err)
  return (
    <div>
       <label>Email</label>
       <input onChange={(e)=>setEmail(e.target.value)}/>
       <label>Password</label>
       <input onChange={(e)=>setPassword(e.target.value)}/>
       <p>{error?error:null}</p>
       <button onClick={handelclick}>Login</button>
    </div>
  )
}

export default Login
