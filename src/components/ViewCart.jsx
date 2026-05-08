import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewCart = () => {
  const [cart, setCart] = useState([]);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://manioryx.alwaysdata.net/static/images/";

  // Load cart
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  // Remove item
  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.product_id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Total price
  const totalAmount = cart.reduce(
    (sum, item) => sum + Number(item.product_cost),
    0
  );

  // MPESA payment for all items
  const handlePayment = async (e) => {
    e.preventDefault();

    setMessage("Processing payment...");
    setError("");

    try {
      const formData = new FormData();
      formData.append("phone", phone);
      formData.append("amount", totalAmount);

      const response = await axios.post(
        "https://manioryx.alwaysdata.net/api/mpesa_payment",
        formData
      );

      setMessage(response.data.message);

      // clear cart after success
      localStorage.removeItem("cart");
      setCart([]);
    } catch (err) {
      setError("Payment failed. Try again.");
    }
  };

  return (
    <div className="container mt-4" style={{ color: "#E8EDF2" }}>

      <h2 className="text-center mb-4" style={{ color: "#C2A56D" }}>
        Your Shopping Cart
      </h2>

      {/* EMPTY CART */}
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          {/* PRODUCTS GRID */}
          <div className="row">
            {cart.map((item) => (
              <div key={item.product_id} className="col-md-4 mb-4">

                <div
                  className="p-3 rounded h-100"
                  style={{
                    background: "#E8EDF2",
                    color: "#2C3947",
                    borderRadius: "15px",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                  }}
                >

                  <img
                    src={img_url + item.product_photo}
                    alt={item.product_name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "10px"
                    }}
                  />

                  <h5 className="mt-2 fw-bold">
                    {item.product_name}
                  </h5>

                  <p className="small">
                    {item.product_description}
                  </p>

                  <h6 style={{ color: "#C2A56D" }}>
                    KES {item.product_cost}
                  </h6>

                  {/* REMOVE BUTTON */}
                  <button
                    className="btn btn-sm btn-danger mt-2"
                    onClick={() => removeFromCart(item.product_id)}
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* TOTAL + PAYMENT SECTION */}
          <div
            className="card p-4 mt-4"
            style={{
              background: "#2C3947",
              border: "1px solid #547A95",
              color: "#E8EDF2"
            }}
          >

            <h4>
              Total:{" "}
              <span style={{ color: "#C2A56D" }}>
                KES {totalAmount}
              </span>
            </h4>

            <form onSubmit={handlePayment}>
              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Enter phone number (254...)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />

              <button
                className="btn w-100"
                style={{
                  background: "#C2A56D",
                  color: "#2C3947",
                  fontWeight: "bold"
                }}
              >
                Pay All Items via MPESA
              </button>
            </form>

            {/* MESSAGES */}
            {message && (
              <p className="mt-3 text-success">{message}</p>
            )}

            {error && (
              <p className="mt-3 text-danger">{error}</p>
            )}

          </div>
        </>
      )}
    </div>
  );
};

export default ViewCart;