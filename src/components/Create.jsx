import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../features/UserReducer'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [input,setInput]=useState({
        name:"",
        email:"",
        age:"",
    })
const {name,email,age}=input
const users=useSelector((state)=> state.users)
const dispatch=useDispatch()
const navigate=useNavigate()

const textHandle=(e)=>{
    setInput({...input,[e.target.name]: e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(addUser({id:users[users.length-1].id+1,name,email,age}))
    navigate("/")
}

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
<div className='w-40 border bg-primary text-white p-5 rounded'>
    <h3>Add New User</h3>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} className='form-control' onChange={textHandle} />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={email} className='form-control' onChange={textHandle} />
        </div>
        <div>
            <label htmlFor="age">Age:</label>
            <input type="number" name="age" value={age} className='form-control' onChange={textHandle} />
        </div><br />
        <button className='btn btn-warning'>Submit</button>
    </form>
</div>
    </div>
  )
}

export default Create