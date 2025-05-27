import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './SponsorForm.css';

const SponsorForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { childName, childAge, childCountry, childImage } = location.state || {};

  const [formData, setFormData] = useState({
    sponsorName: '',
    email: '',
    phone: '',
    sponsorshipDuration: '12',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Sponsorship form submitted:', {
      childId: id,
      ...formData
    });
    
    // Navigate to thank you page
    navigate('/thank-you');
  };

  return (
    <div className="sponsor-form-container">
      <div className="sponsor-form-content">
        <div className="child-preview">
          <img src={childImage} alt={`${childName}'s photo`} />
          <div className="child-details">
            <h3>{childName}</h3>
            <p>Age: {childAge}</p>
            <p>Country: {childCountry}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="sponsor-form">
          <h2>Sponsor {childName}</h2>
          
          <div className="form-group">
            <label htmlFor="sponsorName">Your Name</label>
            <input
              type="text"
              id="sponsorName"
              name="sponsorName"
              value={formData.sponsorName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="sponsorshipDuration">Sponsorship Duration (months)</label>
            <select
              id="sponsorshipDuration"
              name="sponsorshipDuration"
              value={formData.sponsorshipDuration}
              onChange={handleChange}
              required
            >
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Message for {childName} (optional)</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            />
          </div>

          <button type="submit" className="submit-button">
            Complete Sponsorship
          </button>
        </form>
      </div>
    </div>
  );
};

export default SponsorForm; 