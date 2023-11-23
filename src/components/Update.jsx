import React, {useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../features/UserReducer';

const Update = () => {
    const {id}=useParams();
    const users=useSelector((state)=> state.users)
    const existingUser=users.filter((elem)=> elem.id == id)
    
    const [input,setInput]=useState(
        // name:"",
        // email:"",
        // age:"",
        existingUser[0]
    )
const {name,email,age}=input

const dispatch=useDispatch()
const navigate=useNavigate()


const textHandle=(e)=>{
    setInput({...input,[e.target.name]: e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    dispatch(updateUser({id:id,name,email,age}))
    navigate("/")
}

   
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
    <div className='w-40 border bg-danger text-white p-5 rounded'>
        <h3>Update User</h3>
        <form  onSubmit={handleSubmit}>
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
            <button className='btn btn-info'>Update</button>
        </form>
    </div>
        </div>
  )
}

export default Update