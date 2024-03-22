import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function PrivateRout({children}) {
    const token= localStorage.getItem("token")
   
    console.log(token)
  return (
    <div>
{token ? children : <Navigate to={"/login"} />}


    </div>
  )
}

export default PrivateRout