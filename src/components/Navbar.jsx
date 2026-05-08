import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  const updateCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  };

  useEffect(() => {
    updateCart();

    window.addEventListener("storage", updateCart);

    return () => window.removeEventListener("storage", updateCart);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <nav
      style={{
        background: "#2C3947",
        borderBottom: "2px solid #547A95",
        padding: "10px 0",
      }}
    >
      <div className="container-fluid d-flex align-items-center justify-content-between">
        
        {/* BRAND */}
        <NavLink
          to="/"
          style={{
            color: "#C2A56D",
            fontWeight: "bold",
            fontSize: "20px",
            textDecoration: "none",
          }}
        >
          🕰 Watchstore
        </NavLink>

        {/* LINKS */}
        <ul className="d-flex align-items-center gap-3 list-unstyled m-0">
          
          <li>
            <NavLink
              style={{
                color: "#E8EDF2",
                textDecoration: "none",
              }}
              to="/"
            >
              Products
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{
                color: "#E8EDF2",
                textDecoration: "none",
              }}
              to="/addproduct"
            >
              Add
            </NavLink>
          </li>

          <li>
            <NavLink
              style={{
                color: "#E8EDF2",
                textDecoration: "none",
              }}
              to="/aboutus"
            >
              About
            </NavLink>
          </li>

          {/* CART */}
          <li style={{ position: "relative" }}>
            <NavLink
              style={{
                color: "#E8EDF2",
                textDecoration: "none",
              }}
              to="/cart"
            >
              🛒 Cart
            </NavLink>

            {cartCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-10px",
                  background: "#C2A56D",
                  color: "#2C3947",
                  borderRadius: "50%",
                  fontSize: "12px",
                  padding: "2px 6px",
                  fontWeight: "bold",
                }}
              >
                {cartCount}
              </span>
            )}
          </li>

          <li>
            <NavLink
              style={{
                color: "#E8EDF2",
                textDecoration: "none",
              }}
              to="/contactus"
            >
              Contact
            </NavLink>
          </li>

          {/* USER */}
          {user ? (
            <>
              <li
                style={{
                  color: "#C2A56D",
                  fontWeight: "bold",
                }}
              >
                👋 {user.username}
              </li>

              <li>
                <button
                  onClick={handleLogout}
                  style={{
                    background: "transparent",
                    border: "1px solid #C2A56D",
                    color: "#C2A56D",
                    padding: "4px 10px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  style={{
                    color: "#E8EDF2",
                    textDecoration: "none",
                    fontWeight: "500",
                  }}
                  to="/signin"
                >
                  Sign In
                </NavLink>
              </li>

              {/* SIGN UP */}
              <li>
                <NavLink
                  to="/signup"
                  style={{
                   
                    color: "#E8EDF2",

                    textDecoration: "none",
                    fontWeight: "500",
                   
                  }}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;