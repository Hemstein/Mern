import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import{useNavigate} from 'react-router-dom'
import {adduser } from './Redux/Action/ActionUser';
import axios from 'axios';

function Register() {
  const [newemail,setemail] =useState("");
  const [newname,setname] =useState("");
  const [newpassword,setpassword]=useState("");
  const [photo,setphoto]=useState();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handelclick=()=>{
      const data= new FormData()
      data.append("email",newemail)
      data.append("name",newname)
      data.append("password",newpassword)
      data.append("file",photo)
      // 2eme methode
    axios.post('http://localhost:4000/api/user/register',data).then((result) => {
      console.log(result.data)
     }).catch((err) => {
      console.log(err)
   });
      navigate("/login")
  //dispatch(adduser(data))

  } 
   return (
    <div>
       <label>Email</label>
       <input onChange={(e)=>setemail(e.target.value)}/>
       <label>Name</label>
       <input onChange={(e)=>setname(e.target.value)}/>
       <label>Password</label>
       <input type='password' onChange={(e)=>setpassword(e.target.value)}/>
       <label>Photo</label>
       <input type='file' onChange={(e)=>setphoto(e.target.files[0])}/>
       <button onClick={handelclick}>Register</button>
      
    </div>
  )
}

export default Register
