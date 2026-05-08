import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState("")
  const [error, setError] = useState("")
  const [success, setSuccess] = useState("")

  const handleSignin = async (e) => {
    e.preventDefault()
    setLoading("Please wait ...")
    setError("")
    setSuccess("")

    try {
      const formData = new FormData();
      formData.append("email", email)
      formData.append("password", password)

      const response = await axios.post(
        "https://manioryx.alwaysdata.net/api/signin",
        formData
      )

      if (response.data.user) {
        setSuccess(response.data.message)
        setLoading("")
        localStorage.setItem("user", JSON.stringify(response.data.user))
        window.location.href = "/"
      } else {
        setError(response.data.message)
        setLoading("")
      }

    } catch (error) {
      setError(error.message)
      setLoading("")
    }
  }

  return (
    <div className="signin-page">

      <div className="signin-card">

        <h1 className="title">Signin</h1>
        <p className="subtitle">Welcome back to WatchZone</p>

        {loading && <div className="msg info">{loading}</div>}
        {error && <div className="msg error">{error}</div>}
        {success && <div className="msg success">{success}</div>}

        <form onSubmit={handleSignin}>

          <input
            type="email"
            placeholder="Enter email"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Enter password"
            className="input"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn">
            Signin
          </button>

          <Link to="/signup" className="link">
            Don't have an account? Signup
          </Link>

        </form>

      </div>

      {/* PALETTE CSS ONLY */}
      <style>{`
        .signin-page {
          min-height: 100vh;
          background: #2C3947;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          padding: 20px;
        }

        .signin-card {
          width: 100%;
          max-width: 420px;
          background: #E8EDF2;
          padding: 25px;
          border-radius: 16px;
          border: 1px solid #547A95;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
        }

        .title {
          text-align: center;
          color: #2C3947;
          margin-bottom: 5px;
        }

        .subtitle {
          text-align: center;
          color: #547A95;
          margin-bottom: 20px;
        }

        .input {
          width: 100%;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 8px;
          border: 1px solid #547A95;
          outline: none;
          background: #ffffff;
          color: #2C3947;
        }

        .input:focus {
          border-color: #C2A56D;
          box-shadow: 0 0 6px rgba(194,165,109,0.4);
        }

        .btn {
          width: 100%;
          padding: 10px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          background: linear-gradient(90deg, #C2A56D, #547A95);
          color: #E8EDF2;
          transition: 0.3s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 12px rgba(194,165,109,0.4);
        }

        .link {
          display: block;
          text-align: center;
          margin-top: 10px;
          color: #547A95;
          text-decoration: none;
          font-size: 14px;
        }

        .link:hover {
          color: #C2A56D;
        }

        .msg {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 6px;
          text-align: center;
        }

        .info {
          background: #547A95;
          color: #E8EDF2;
        }

        .success {
          background: #C2A56D;
          color: #2C3947;
        }

        .error {
          background: #547A95;
          color: #E8EDF2;
        }
      `}</style>

    </div>
  )
}

export default Signin