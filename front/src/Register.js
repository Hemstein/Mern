import React, { useState } from 'react'

function Register() {
  const [email,setemail] =useState();
  const [name,setname] =useState();
  const [password,setpassword]=useState();
  const [photo,setphoto]=useState();
  console.log(photo)
  return (
    <div>
       <label>Email</label>
       <input onChange={(e)=>setemail(e.target.value)}/>
       <label>Name</label>
       <input onChange={(e)=>setname(e.target.value)}/>
       <label>Password</label>
       <input onChange={(e)=>setpassword(e.target.value)}/>
       <label>Photo</label>
       <input type='file' onChange={(e)=>setphoto(e.target.files[0])}/>
       <button>Register</button>
      
    </div>
  )
}

export default Register
