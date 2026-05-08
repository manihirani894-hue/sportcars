import React from 'react'

const Footer = () => {

  // ✅ ONLY ADDITION (makes button work)
  const handleSubscribe = () => {
    // intentionally minimal (no UI change)
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">WatchesZone</h2>
          <p>
            Premium watches, trusted dealers, and seamless experiences — all in one place.
          </p>
          <div className="social-icons">
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
          </div>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Browse watches</a></li>
            <li><a href="#">Sell Your Watch</a></li>
            <li><a href="#">Watch Reviews</a></li>
            <li><a href="#">Latest Deals</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Terms & Privacy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <p>Get the latest watch deals & updates.</p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />

            {/* ONLY CHANGE IS HERE */}
            <button onClick={handleSubscribe}>
              Subscribe
            </button>

          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()}@cutie manii. All rights reserved.
      </div>

      {/* CSS UNCHANGED */}
      <style>{`
        body, html {
          font-family: 'Poppins', sans-serif;
        }

        .footer {
          background: rgba(20, 20, 20, 0.95);
          color: #ddd;
          padding: 60px 20px 20px;
          backdrop-filter: blur(8px);
        }

        .footer-container {
          max-width: 1200px;
          margin: auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
        }

        .footer-logo {
          color: #fff;
          margin-bottom: 10px;
          font-size: 1.8rem;
          letter-spacing: 1px;
        }

        .footer-section h3 {
          margin-bottom: 12px;
          color: #fff;
          font-size: 1.2rem;
          position: relative;
        }

        .footer-section h3::after {
          content: '';
          position: absolute;
          width: 40px;
          height: 2px;
          background: linear-gradient(90deg, #ff758c, #ff7eb3);
          bottom: -5px;
          left: 0;
          border-radius: 2px;
        }

        .footer-section p {
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
        }

        .footer-section ul li {
          margin-bottom: 8px;
        }

        .footer-section a {
          color: #bbb;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-section a:hover {
          color: #ff7eb3;
        }

        .newsletter {
          display: flex;
          margin-top: 10px;
        }

        .newsletter input {
          flex: 1;
          padding: 10px;
          border: none;
          outline: none;
          border-radius: 8px 0 0 8px;
          background: #333;
          color: #fff;
        }

        .newsletter button {
          padding: 10px 15px;
          border: none;
          cursor: pointer;
          border-radius: 0 8px 8px 0;
          background: linear-gradient(90deg, #ff758c, #ff7eb3);
          color: #fff;
          font-weight: 600;
        }

        .social-icons {
          display: flex;
          gap: 10px;
          margin-top: 12px;
        }

        .social-icons a {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: #222;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 40px;
          border-top: 1px solid #222;
          padding-top: 15px;
          font-size: 14px;
          color: #888;
        }
      `}</style>
    </footer>
  )
}

export default Footer