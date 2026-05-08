import React from "react";

function AboutUs() {
  return (
    <div className="container my-5 text-center">

      {/* Header Section */}
      <div className="mb-5">
        
        <p className="text-muted">
          Timeless watches. Modern style. Trusted quality.
        </p>
      </div>

      {/* Content Section */}
      <div className="row justify-content-center">

        <div className="col-md-8">

          <h3 className="mb-3">Who We Are</h3>
          <p>
            Mani's Watch Zone is a premium watch store dedicated to offering
            stylish, durable, and affordable watches for everyone. We believe
            a watch is more than just a timepiece — it reflects personality,
            class, and confidence.
          </p>

          <h3 className="mt-4 mb-3">Our Vision</h3>
          <p>
            Our vision is to become a trusted destination for watch lovers by
            providing high-quality designs that blend fashion, innovation,
            and precision.
          </p>

          <h3 className="mt-4 mb-3">What We Offer</h3>
          <ul className="list-unstyled">
            <li>✔ Luxury watches</li>
            <li>✔ Classic analog designs</li>
            <li>✔ Modern smartwatches</li>
            <li>✔ Affordable everyday watches</li>
            <li>✔ Fast and reliable service</li>
          </ul>

          <h3 className="mt-4 mb-3">Why Choose Us?</h3>
          <p>
            We focus on quality, style, and customer satisfaction. Every watch
            is carefully selected to ensure elegance, durability, and value.
          </p>

          {/* Image */}
          <div className="mt-4">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
              alt="Luxury Watch"
              className="img-fluid rounded shadow"
            />
          </div>

        </div>
      </div>
    </div>
  );
}

export default AboutUs;