import React, { useState } from 'react'

function Addproduct() {
    const [name, setname] = useState("")
    const [description,setdescription] = useState("")
    const [photo, setphoto] = useState()
  return (
    <div>
        <label>name</label>
        <label>description</label>
        <label>photo</label>
      <input/>
      <input/>
      <button></button>
    </div>
  )
}

export default Addproduct
