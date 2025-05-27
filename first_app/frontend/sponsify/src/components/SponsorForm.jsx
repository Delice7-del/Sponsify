// src/components/SponsorForm.jsx

import React, { useState } from "react";
import "./SponsorForm.css";

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    childId: "",
    amount: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sponsorship Submitted:", formData);
    // You can replace this with API call to backend
    alert("Thank you for sponsoring a child!");
    setFormData({
      fullName: "",
      email: "",
      childId: "",
      amount: "",
      message: "",
    });
  };

  return (
    <div className="sponsor-form">
      <h2>Sponsor a Child</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          placeholder="Your Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="childId"
          placeholder="Child ID or Name"
          value={formData.childId}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="amount"
          placeholder="Monthly Amount (USD)"
          value={formData.amount}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Optional message to the child"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Confirm Sponsorship</button>
      </form>
    </div>
  );
};

export default SponsorForm;
