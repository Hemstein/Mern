import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './Redux/Action/ActionUser';
import { useNavigate } from 'react-router-dom';

function Profile() {
  useEffect(() => {
   // axios.get('http://localhost:4000/api/user/current',{ headers: { Authorization: `Bearer ${token}` } }).then((result) => {
    //    console.log(result.data)
    //  }).catch((err) => {
    //console.log(err)
     // });
  
    
  }, [])
   const data=useSelector(state=>state.UserReducer.user)
   console.log(data)
   const dispatch=useDispatch()
   const navigate=useNavigate()
   const handelclick=()=>{

    dispatch(logout())
    navigate("/login")
   }
  return (
    <div>
        <p>{data.email}</p>
        <p>{data.name}</p>
        <p></p>
        <button onClick={handelclick}>logout</button>
      
    </div>
  )
}

export default Profile
