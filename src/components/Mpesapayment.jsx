import axios from 'axios';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Mpesapayment = () => {
  // declaring state variables
  const {product}=useLocation().state || {};
  const[phone,setPhone]=useState("")
const[messages,setMessages]=useState("")
const[error,setError]=useState("")

// image url
const img_url="https://manioryx.alwaysdata.net/static/images/"

  // function for mpesa payment
  const handlesubmit= async(e)=>{
    e.preventDefault()
    setMessages("please wait as we finish transactions")
try{
// retrieving user and product details for submission
const formData=new FormData()
formData.append("phone",phone)
formData.append("amount",product.product_cost)


// adding url
const response = await axios.post("https://manioryx.alwaysdata.net/api/mpesa_payment",formData)
setMessages(response.data.message)
}catch(error){

setError(error.message)
}
  }



  return (
    <div className='row justify-content-center mt-2'>
      <h3 className='bg-info'>LIPA NA MPESA</h3>
      {messages}
      {error}

      {/* {make payment body} */}
      <div className='col-md-6 card shadow card-margin mb-4'>
        
       
        <img src={img_url+product.product_photo} alt={product.product_photo}/>
        <p>product name: {product.product_name}</p>
        <p className='text-warning'>product cost: {product.product_cost}</p>

        {/* mpesa payment form */}
       <form action="" onSubmit={handlesubmit}>
          <label>phone number</label>
          <br/>
          <input
          type="tell" 
          placeholder=' Enter phone number'
          className='form-control'
          onChange={(e)=>setPhone(e.target.value)}
          /><br></br>

          <button className='btn btn-danger'>make payment</button>

        </form>
      </div>
    </div>
  )
}


export default Mpesapayment