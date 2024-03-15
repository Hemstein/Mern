import axios from 'axios';
import React, { useEffect } from 'react'

function Profile() {
  useEffect(() => {
    axios.get('http://localhost:4000/api/user/current',{ headers: { Authorization: `Bearer ${token}` } }).then((result) => {
        console.log(result.data)
      }).catch((err) => {
    console.log(err)
      });
  
    
  }, [])
  
  return (
    <div>
        <p></p>
        <p></p>
        <p></p>
      
    </div>
  )
}

export default Profile
