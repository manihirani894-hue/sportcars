import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Foooter from './Foooter'
const Addcars = () => {
  // declaring state variables
  const[product_name,setProductName]=useState('')
  const[product_description,setProductDescription]=useState('')
  const[product_cost,setProductCost]=useState('')
  const[product_photo,setProductPhoto]=useState('')

  // status messages
const[loading,setLoading]=useState("")
const[error,setError]=useState("")
const[success,setSuccess]=useState("")
 


  // function to add product
  const handlesubmit=async(e)=>{
e.preventDefault();
setLoading("please wait...")
try{


// retrieve product details
const formData =new FormData();
formData.append("product_name",product_name)
formData.append("product_description",product_description)
formData.append("product_cost",product_cost)
formData.append("product_photo",product_photo)

 // posting data to base url(api )
  const response = await axios.post("https://manioryx.alwaysdata.net/api/add_product",formData)
 
setLoading("")
setSuccess(response.data.success)
}catch(error){
  setError(error.message)

}
  }

  return (
    <div className='row justify-content-center'>
      <nav>
     <Link to="/" className='btn btn-dark'>GET ALL CARS</Link>
      </nav>
      {loading}
      {success}
      {error}
      <div className='col-md-6 shadow m-2 p-4 '>
        <h1 className='bg-dark text-success'> welcome to Addcars</h1>
        
    <form onSubmit={handlesubmit}>
      <input 
      type="text" 
      placeholder=' Enter product name ' 
      value={product_name}
      onChange={(e)=>setProductName(e.target.value)}
      className='form-control text-info bg-secondary' 
      /><br />
     


      
      <textarea
      className='form-control text-info bg-secondary'
       placeholder='describe your product'
       value={product_description}
       onChange={(e)=>setProductDescription(e.target.value)}
       required>
       
       /<br/>
      
</textarea>

      <input 
      type="number"
       placeholder=' Enter product cost' 
      value={product_cost}
        onChange={(e)=>setProductCost(e.target.value)}
     required
       className='form-control text-info bg-secondary'
       />/<br />
      
    

      <input 
      type="file" 
      placeholder=' Enter product image'
      accept="image/*"
      onChange={(e)=> setProductPhoto(e.target.files[0])}
      required
       className='form-control text-info bg-secondary w-100'
       />
       <br />
     
<input 
type="submit"
value="AddProduct" 
className='btn btn-info w-100 text-success' 
/> <br />

    </form>
      </div>
      <Foooter/>
    </div>
  )
}


export default Addcars