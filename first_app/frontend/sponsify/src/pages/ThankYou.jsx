// src/pages/ThankYou.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you">
      <h1>Thank You for Your Sponsorship!</h1>
      <p>Your generous support is making a difference in a child’s life.</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYou;
