import React from "react";

const Contactus = () => {
  return (
    <div className="container my-5 text-center">

      {/* Header */}
      <h1 className="fw-bold mb-3">
        Contact <span className="text-warning">vishnu Enterprise limited</span>
      </h1>

      <p className="text-muted mb-5">
        We are here to help you with orders, inquiries, and support.
      </p>

      {/* Contact Info */}
      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h4 className="mb-3">Get In Touch</h4>

            <p>📍 Location: Nairobi, Kenya</p>
            <p>📞 Phone: +254 736456600</p>
            <p>📧 Email: manihirani894@gmail.com</p>

            <hr />

            <h5 className="mb-3">Working Hours</h5>
            <p>Monday - Saturday: 8:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p><br/>
            <p className="text-danger">You can also reach us in our social media platforms since we are famous and we are found in every social media platform</p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Contactus;