// src/pages/SponsorshipForm.jsx
import React, { useState } from "react";
import axios from "axios";

const SponsorshipForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/sponsorship", formData); // update URL to match your backend
      setSuccess(true);
      setFormData({ name: "", email: "", amount: "", message: "" });
    } catch (error) {
      console.error("Error submitting sponsorship", error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Sponsor a Child</h2>
      {success && <p className="text-green-600 mb-3">Thank you for sponsoring!</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full border px-3 py-2"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          required
          className="w-full border px-3 py-2"
        />
        <input
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          type="number"
          placeholder="Amount (USD)"
          required
          className="w-full border px-3 py-2"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Optional message"
          className="w-full border px-3 py-2"
        ></textarea>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Sponsorship
        </button>
      </form>
    </div>
  );
};

export default SponsorshipForm;
