import React from 'react'
const Foooter = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h2 className="footer-logo">sportcars</h2>
          <p>
            Premium cars, trusted dealers, and seamless experiences — all in one place.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#">Browse Cars</a></li>
            <li><a href="#">Sell Your Car</a></li>
            <li><a href="#">Car Reviews</a></li>
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
          <p>Get the latest car deals & updates.</p>
          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} cutiee manii. All rights reserved.
      </div>

      {/* Styles */}
      <style>{`
        .footer {
          background: #0a0a0a;
          color: #ddd;
          padding: 50px 20px 20px;
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
        }

        .footer-section h3 {
          margin-bottom: 10px;
          color: #fff;
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
          color: #fff;
        }

        .newsletter {
          display: flex;
          margin-top: 10px;
        }

        .newsletter input {
          flex: 1;
          padding: 8px;
          border: none;
          outline: none;
          border-radius: 4px 0 0 4px;
        }

        .newsletter button {
          padding: 8px 12px;
          border: none;
          background: #ff3c00;
          color: white;
          cursor: pointer;
          border-radius: 0 4px 4px 0;
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

export default Foooter