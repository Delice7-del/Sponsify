import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Send, MapPin, User, Calendar } from 'lucide-react';
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
    console.log('Sponsorship form submitted:', {
      childId: id,
      ...formData
    });
    navigate('/thank-you');
  };

  return (
    <div className="sponsor-form-container">
      <div className="sponsor-form-content">
        <div className="tech-child-preview">
          <div className="preview-header">
            <span className="status-dot"></span>
            <span>ACTIVE PROFILE</span>
          </div>
          <img src={childImage} alt={`${childName}'s photo`} className="preview-image" />
          <div className="preview-details">
            <h2>{childName.toUpperCase()}</h2>
            <div className="preview-meta">
              <span><User size={14} /> {childAge} YRS</span>
              <span><MapPin size={14} /> {childCountry}</span>
            </div>
          </div>
        </div>

        <div className="tech-form-section">
          <h1>SPONSOR A CHILD</h1>
          <p className="form-subtitle">Your commitment provides a future of security and opportunity.</p>
          
          <form onSubmit={handleSubmit} className="tech-sponsor-form">
            <div className="form-group">
              <label>YOUR FULL NAME</label>
              <input
                type="text"
                name="sponsorName"
                placeholder="John Doe"
                value={formData.sponsorName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>PHONE NUMBER</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>SPONSORSHIP DURATION</label>
              <div className="select-wrapper">
                <Calendar size={14} className="select-icon" />
                <select
                  name="sponsorshipDuration"
                  value={formData.sponsorshipDuration}
                  onChange={handleChange}
                  required
                >
                  <option value="12">12 MONTHS COMMITMENT</option>
                  <option value="24">24 MONTHS COMMITMENT</option>
                  <option value="36">36 MONTHS COMMITMENT</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>PERSONAL MESSAGE (OPTIONAL)</label>
              <textarea
                name="message"
                placeholder="Tell us why you decided to sponsor..."
                value={formData.message}
                onChange={handleChange}
                rows="3"
              />
            </div>

            <button type="submit" className="tech-submit-btn">
              <Send size={18} /> COMPLETE SPONSORSHIP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SponsorForm;
 