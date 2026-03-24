import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Foooter from './Foooter'



const Signup = () => {

  // Declaring state variabbles
const[username,setUsername] = useState("")
const[email,setEmail] = useState("")
const[phone,setPhone] = useState("")
const[password,setPassword] = useState("")

// Status messages
const[loading,setLoading] =useState("")
const[error,setError] =useState("")
const[success,setSuccess] =useState("")


// function signup
const submitSignupDetails =async(e)=>{
  e.preventDefault()
  setLoading("Please wait ...")
  try{
    const formData = new FormData();
    formData.append("username",username);
    formData.append("email",email);
    formData.append("phone",phone)
    formData.append("password",password)

    // Adding base url
    const response = await axios.post("https://manioryx.alwaysdata.net/api/signup",formData);
    setSuccess(response.data.success)
    setLoading("")
    // reset values
    setPhone("")
    setUsername("")
    setEmail("")
    setPassword("")
    
  } catch (error) {
    setError(error.message)

  }
}

  return (
    <div className='container-fluid' >
  <div className='row justify-content-center'>
    <div className='col-md-6 card shadow m-2 p-4'>
    <h1 id='header'>Signup</h1>
    {/* binding variables */}
{loading} <br />
{error} <br />
{success} <br />
    
    {/* signup form */}
    <form id='signup' onSubmit={submitSignupDetails}>
      <input type="text" placeholder='Enter Username' className='form-control bg-secondary text-light' onChange={(e)=>setUsername(e.target.value)}/><br />
      <input type="email" placeholder='Enter email' className='form-control bg-secondary text-light' onChange={(e)=>setEmail(e.target.value)}/><br />
      <input type="tel" placeholder='Phone number' className='form-control bg-secondary text-light' onChange={(e)=>setPhone(e.target.value)}/><br />
      <input type="password" placeholder='Enter Password' className='form-control bg-secondary text-light' onChange={(e)=>setPassword(e.target.value)}/><br />

      <input type="submit" value="Sign up" className='btn btn-warning w-100'/><br />
      {/* Incase someone has an account */}
      <Link to='/signin'>Already have an account? Signin</Link> <br />
      <label>
        <input type="checkbox" />I Agree to the Terms and Conditions
      </label>
    </form>
    </div>
  </div>
  <Foooter/>
  </div>
  )
}


export default Signup