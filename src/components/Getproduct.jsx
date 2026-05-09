import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import watch from "../watch images/watch 1.jpg";
import watches from "../watch images/watch14.jpg";
import sportwatch from "../watch images/watch16.jpg";

import "./product.css";

// CART UTIL
const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const exists = cart.find(
    (item) => item.product_id === product.product_id
  );

  if (!exists) {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const Getproduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // BACK TO TOP STATE
  const [showScrollTop, setShowScrollTop] = useState(false);

  const navigate = useNavigate();

  const img_url = "https://manioryx.alwaysdata.net/static/images/";

  const getProducts = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://manioryx.alwaysdata.net/api/get_product_details"
      );

      setProducts(response.data);
    } catch (err) {
      setError("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // SCROLL LISTENER
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SCROLL FUNCTION
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const filteredProducts = products.filter((product) => {
    const term = searchTerm.toLowerCase();

    return (
      product.product_name?.toLowerCase().includes(term) ||
      product.product_description?.toLowerCase().includes(term) ||
      product.product_cost?.toString().includes(term)
    );
  });

  return (
    <div className="product-page">
      {/* LOADING */}
      {loading && (
        <div className="text-center mt-5 text-light">
          Loading luxury watches...
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className="alert alert-danger text-center mt-4">
          {error}
        </div>
      )}

      {/* CAROUSEL */}
      <div
        id="watchCarousel"
        className="carousel slide mt-3"
        data-bs-ride="carousel"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>

          <button
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide-to="1"
          ></button>

          <button
            type="button"
            data-bs-target="#watchCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={watch}
              className="d-block w-100"
              height="500px"
              alt="slide 1"
            />
          </div>

          <div className="carousel-item">
            <img
              src={watches}
              className="d-block w-100"
              height="500px"
              alt="slide 2"
            />
          </div>

          <div className="carousel-item">
            <img
              src={sportwatch}
              className="d-block w-100"
              height="500px"
              alt="slide 3"
            />
          </div>
        </div>

        {/* PREV BUTTON */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#watchCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        {/* NEXT BUTTON */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#watchCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* SEARCH */}
      <div className="row justify-content-center mt-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control search-box"
            placeholder="Search watches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="container mt-5">
        <h2 className="section-title text-center mb-5">
          Featured Watches
        </h2>

        {filteredProducts.length === 0 && !loading && (
          <p className="text-center text-light">
            No watches found
          </p>
        )}

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div
              key={product.product_id}
              className="product-card"
            >
              <img
                src={img_url + product.product_photo}
                className="product-image"
                alt={product.product_name}
              />

              <div className="p-3 d-flex flex-column">
                <h5 className="fw-bold">
                  {product.product_name}
                </h5>

                <p className="small flex-grow-1">
                  {product.product_description}
                </p>

                <div className="price mb-2">
                  ${product.product_cost}
                </div>

                <div className="d-flex gap-2">
                  <button
                    className="btn btn-outline-warning flex-grow-1 bg-danger"
                    onClick={() =>
                      navigate("/makepayment", {
                        state: { product },
                      })
                    }
                  >
                    Buy Now
                  </button>

                  <button
                    className="btn btn-outline-warning flex-grow-1 bg-danger"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BACK TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            background: "#C2A56D",
            color: "#2C3947",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            boxShadow: "0 0 15px rgba(194,165,109,0.5)",
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default Getproduct;