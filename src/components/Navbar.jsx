import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand-md m-2">

          {/* Brand */}
          <Link to="/" className="navbar-brand">
            <h1 className="text-white">MY CARS PALACE</h1>
          </Link>

          {/* Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarcollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navbarcollapse">
            <div className="navbar-nav ms-auto">

              <Link to="/getcars" className="btn btn-outline-danger ms-2">
                Get Cars
              </Link>

              <Link to="/signup" className="btn btn-outline-danger ms-2">
                Signup
              </Link>

              <Link to="/signin" className="btn btn-outline-danger ms-2">
                Signin
              </Link>

              <Link to="/addcars" className="btn btn-outline-danger ms-2">
                Add Cars
              </Link>

            </div>
          </div>

        </nav>
      </div>
    </div>
  );
}

export default Navbar;

