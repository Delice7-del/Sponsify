// src/pages/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './SponsorLogin.css';

const SponsorLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/login', { email: formData.email, password: formData.password });
      localStorage.setItem('token', res.data.token);
      navigate('/sponsor-form/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="sponsor-login-container">
      <div className="sponsor-login-content">
        <h2>Sponsor Login</h2>
        <p className="login-description">
          Access your sponsorship dashboard to view your sponsored children and manage your contributions.
        </p>
        
        {error && <p className="error-msg" style={{color: 'red'}}>{error}</p>}
        
        <form onSubmit={handleSubmit} className="sponsor-login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="login-submit-btn">
            Login to Dashboard
          </button>
        </form>

        <div className="sponsor-login-footer">
          <p>Don't have a sponsor account?</p>
          <button 
            onClick={() => navigate('/sponsorship')} 
            className="sponsor-child-btn"
          >
            Sponsor a Child Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SponsorLogin;
