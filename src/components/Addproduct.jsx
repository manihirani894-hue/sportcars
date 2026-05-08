import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Addproduct = () => {

  const [product_name, setProductName] = useState('')
  const [product_description, setProductDescription] = useState('')
  const [product_cost, setProductCost] = useState('')
  const [product_photo, setProductPhoto] = useState('')

  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handlesubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait...")
    setError("")
    setSuccess("")

    try {
      const formData = new FormData();
      formData.append("product_name", product_name)
      formData.append("product_description", product_description)
      formData.append("product_cost", product_cost)
      formData.append("product_photo", product_photo)

      const response = await axios.post(
        "https://manioryx.alwaysdata.net/api/add_product",
        formData
      )

      setLoading("")
      setSuccess(response.data.success)

      setProductName("")
      setProductDescription("")
      setProductCost("")
      setProductPhoto("")

    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  return (
    <div
      className='row justify-content-center addproduct-page'
    >

      <nav className='mb-3'>
        <Link to="/" className='btn btn-accent'>
          GET ALL WATCHES
        </Link>
      </nav>

      {loading && <div className='alert alert-info py-2'>{loading}</div>}
      {success && <div className='alert alert-success py-2'>{success}</div>}
      {error && <div className='alert alert-danger py-2'>{error}</div>}

      <div className='col-md-6 card addproduct-card shadow-lg p-4 rounded-4'>

        <h1 className='text-center fw-bold title'>
          Add Watches Form
        </h1>

        <p className='text-center subtitle'>
          Upload new watches to WatchZone
        </p>

        <form onSubmit={handlesubmit}>

          <div className="form-floating mb-3">
            <input
              type="text"
              value={product_name}
              onChange={(e) => setProductName(e.target.value)}
              className='form-control input-field'
              required
            />
            <label>Product Name</label>
          </div>

          <div className="form-floating mb-3">
            <textarea
              value={product_description}
              onChange={(e) => setProductDescription(e.target.value)}
              className='form-control input-field'
              required
              style={{ height: '100px' }}
            />
            <label>Product Description</label>
          </div>

          <div className="form-floating mb-3">
            <input
              type="number"
              value={product_cost}
              onChange={(e) => setProductCost(e.target.value)}
              className='form-control input-field'
              required
            />
            <label>Product Cost</label>
          </div>

          <div className="mb-3">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setProductPhoto(e.target.files[0])}
              className='form-control input-field'
              required
            />
          </div>

          <input
            type="submit"
            value="Add Product"
            className='btn btn-accent w-100 py-2 fw-semibold'
          />

        </form>

        {/* PALETTE-BASED CSS */}
        <style>{`
          .addproduct-page {
            min-height: 100vh;
            background: #2C3947;
            padding-top: 20px;
          }

          .addproduct-card {
            background: #E8EDF2;
            border: 1px solid rgba(84,122,149,0.2);
          }

          .title {
            color: #2C3947;
          }

          .subtitle {
            color: #547A95;
          }

          .input-field {
            background: #ffffff;
            border: 1px solid #547A95;
            color: #2C3947;
          }

          .input-field:focus {
            border-color: #C2A56D;
            box-shadow: 0 0 8px rgba(194,165,109,0.4);
          }

          .btn-accent {
            background: linear-gradient(90deg, #C2A56D, #547A95);
            border: none;
            color: #E8EDF2;
            transition: 0.3s ease;
          }

          .btn-accent:hover {
            transform: translateY(-2px);
            box-shadow: 0 0 15px rgba(194,165,109,0.4);
          }

          a {
            text-decoration: none;
          }
        `}</style>

      </div>
    </div>
  )
}

export default Addproduct