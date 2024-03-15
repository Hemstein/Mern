import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const navigate=useNavigate()
  const handelclick=()=>{
    axios.post('http://localhost:4000/api/user/login',{email,password}).then((result) => {
        console.log(result.data)
      }).catch((err) => {
    console.log(err)
      });
      navigate("/profile")
  }
  return (
    <div>
       <label>Email</label>
       <input onChange={(e)=>setEmail(e.target.value)}/>
       <label>Password</label>
       <input onChange={(e)=>setPassword(e.target.value)}/>
       <button onClick={handelclick}>Login</button>
    </div>
  )
}

export default Login
