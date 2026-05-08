import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  // STATE VARIABLES
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  // STATUS MESSAGES
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // SIGNUP FUNCTION
  const submitSignupDetails = async (e) => {
    e.preventDefault();

    setLoading("Please wait...");
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();

      formData.append("username", username);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("password", password);

      const response = await axios.post(
        "https://manioryx.alwaysdata.net/api/signup",
        formData
      );

      setSuccess(response.data.success);
      setLoading("");

      // RESET VALUES
      setUsername("");
      setEmail("");
      setPhone("");
      setPassword("");
    } catch (error) {
      setError(error.message);
      setLoading("");
    }
  };

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "#2C3947",
        padding: "30px",
      }}
    >
      <div
        className="col-md-5"
        style={{
          background: "#E8EDF2",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0 0 25px rgba(0,0,0,0.3)",
          border: "1px solid #547A95",
        }}
      >
        {/* TITLE */}
        <h1
          className="text-center fw-bold mb-2"
          style={{
            color: "#2C3947",
          }}
        >
          Create Account
        </h1>

        <p
          className="text-center mb-4"
          style={{
            color: "#547A95",
          }}
        >
          Join WatchStore and upgrade your luxury style
        </p>

        {/* ALERTS */}
        {loading && (
          <div
            className="alert"
            style={{
              background: "#547A95",
              color: "#E8EDF2",
              border: "none",
            }}
          >
            {loading}
          </div>
        )}

        {error && (
          <div
            className="alert"
            style={{
              background: "#dc3545",
              color: "#fff",
              border: "none",
            }}
          >
            {error}
          </div>
        )}

        {success && (
          <div
            className="alert"
            style={{
              background: "#C2A56D",
              color: "#2C3947",
              border: "none",
              fontWeight: "bold",
            }}
          >
            {success}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={submitSignupDetails}>
          {/* USERNAME */}
          <div className="mb-3">
            <label
              className="form-label fw-semibold"
              style={{ color: "#2C3947" }}
            >
              Username
            </label>

            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{
                background: "#E8EDF2",
                border: "1px solid #547A95",
                color: "#2C3947",
                padding: "12px",
              }}
            />
          </div>

          {/* EMAIL */}
          <div className="mb-3">
            <label
              className="form-label fw-semibold"
              style={{ color: "#2C3947" }}
            >
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                background: "#E8EDF2",
                border: "1px solid #547A95",
                color: "#2C3947",
                padding: "12px",
              }}
            />
          </div>

          {/* PHONE */}
          <div className="mb-3">
            <label
              className="form-label fw-semibold"
              style={{ color: "#2C3947" }}
            >
              Phone Number
            </label>

            <input
              type="tel"
              placeholder="Enter phone number"
              className="form-control"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              style={{
                background: "#E8EDF2",
                border: "1px solid #547A95",
                color: "#2C3947",
                padding: "12px",
              }}
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-3">
            <label
              className="form-label fw-semibold"
              style={{ color: "#2C3947" }}
            >
              Password
            </label>

            <input
              type="password"
              placeholder="Enter password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                background: "#E8EDF2",
                border: "1px solid #547A95",
                color: "#2C3947",
                padding: "12px",
              }}
            />
          </div>

          {/* TERMS */}
          <div className="form-check mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              required
              style={{
                borderColor: "#547A95",
              }}
            />

            <label
              className="form-check-label"
              style={{
                color: "#2C3947",
              }}
            >
              I agree to the Terms and Conditions
            </label>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              background: "#C2A56D",
              color: "#2C3947",
              padding: "12px",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
            }}
          >
            Sign Up
          </button>

          {/* SIGN IN LINK */}
          <p
            className="text-center mt-4"
            style={{
              color: "#547A95",
            }}
          >
            Already have an account?{" "}
            <Link
              to="/signin"
              style={{
                color: "#C2A56D",
                fontWeight: "bold",
                textDecoration: "none",
              }}
            >
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;