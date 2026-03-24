import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Foooter from './Foooter'

const Getcars = () => {
  // declaring statevariables
const[products,setProducts]=useState([])
const[loading,setLoading]=useState("")
const[error,setError]=useState("")

// navigation
const navigate=useNavigate()

// image url
const img_url="https://manioryx.alwaysdata.net/static/images/"

// function to retrieve products
const getProducts= async()=>{
  setLoading("please wait as we retrieve products ...")

try{
  const response=await axios.get("https://manioryx.alwaysdata.net/api/get_product_details")
  setProducts(response.data)
  setLoading("")

}catch(error){
  setError(error.message)
}
}


// usind useEffect automatically to retrieve products from database
useEffect(()=>{
 getProducts()

},[]);
  return (
    <div>

      <div class="carousel slide" id="mycarousel" data-bs-ride="carousel"> 
            {/* <!-- The image wrapper --> */}
             <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="images/car1.jpg" alt="" className="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/ferrari.jpg" alt=""className="d-block w-100"/>
                    </div>
                    <div class="carousel-item">
                        <img src="images/tpyota.jpg"alt=""className="d-block w-100"/>
                    </div>
             </div>
             {/* <!-- controllers --> */}
              <div>
                   
                    <a href="#mycarousel" class="carousel-control-prev" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon bg-danger"></span>
                    </a>
                    <a href="#mycarousel" class="carousel-control-next" data-bs-slide="next">
                        <span class="carousel-control-next-icon bg-danger"></span>
                    </a>
              </div>
        </div>


      <div className='row'>
      <h3 className='bg-success'>Available products</h3>
     {loading}
      {error}

      {/* {products card design} */}

{products.map((product)=>(

<div className='col-md-3 justify-content-center mb-4'>
  <div className='card shadow mt-2 p-4'>
    <img src={img_url + product.product_photo} alt={product.product_photo} className='product_img'/>

    {/* {product details} */}
    <div className='card-body'>
         <h5 className='mt-2'>{product.product_name}</h5>
        <p className='text-muted'>{product.product_description}</p>
        <b className='text-warning'>ksh{product.product_cost}</b><br/>

        <button className='btn btn-dark mt-2 w-100' onClick={()=>navigate("/makepayment",{state:{product}})}>shop now</button>

    </div>

  </div>
</div>

))}
    </div>
    <Foooter/>
    </div>

   
   )
  


  }


export default Getcars