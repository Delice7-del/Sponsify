import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>About Our Organization</h1>
      <p style={{ maxWidth: "600px", margin: "auto" }}>
        We are a non-profit organization committed to connecting compassionate sponsors with
        vulnerable children in need of education, healthcare, and hope. Our mission is to build a
        brighter future by empowering the next generation through sponsorship and support.
      </p>
      <Link to="/learn-more">
        <button style={{ marginTop: "20px", padding: "10px 20px", cursor: "pointer" }}>
          Learn More About Us
        </button>
      </Link>
    </div>
  );
};

export default About;
