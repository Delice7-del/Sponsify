import React from "react";
import { HeartPulse, Droplets, Utensils, Home, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css"; // Reuse About.css for consistency

const Outreach = () => {
  return (
    <div className="about-container">
      <section className="about__hero">
        <span className="label">Life Essentials</span>
        <div className="hero-icon">
          <HeartPulse size={48} color="var(--accent)" strokeWidth={1.5} />
        </div>
        <h1>COMMUNITY <br /><span className="italic-serif">OUTREACH.</span></h1>
        <p className="hero-text">
          Direct impact begins with basic human needs. Our outreach programs ensure 
          that children and their families have access to the fundamental resources 
          required for a healthy, dignified life.
        </p>
      </section>

      <div className="about__grid">
        <div className="about-card">
          <div className="about-icon"><Droplets size={32} /></div>
          <h3>CLEAN WATER</h3>
          <p>We install community water filtration systems and provide sanitation training to eliminate water-borne diseases and improve hygiene.</p>
        </div>
        <div className="about-card">
          <div className="about-icon"><Utensils size={32} /></div>
          <h3>NUTRITION PLANS</h3>
          <p>Sponsored children receive balanced daily meals and nutritional supplements to prevent stunting and ensure healthy physical growth.</p>
        </div>
        <div className="about-card">
          <div className="about-icon"><Home size={32} /></div>
          <h3>COMMUNITY HUBS</h3>
          <p>Our outreach centers serve as safe spaces for gathering, learning, and emergency relief, strengthening the entire village ecosystem.</p>
        </div>
      </div>

      <section className="about__mission" style={{ marginTop: '4rem' }}>
        <div className="mission-content">
          <div className="about-icon"><Globe size={32} /></div>
          <h3>BEYOND THE INDIVIDUAL</h3>
          <p>
            When you sponsor a child's outreach, you aren't just helping one person—you're 
            uplifting a community. Our programs are designed for long-term sustainability, 
            empowering local leaders to manage resources and maintain the systems we build 
            together for generations to come.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/sponsorship" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Support a Village →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Outreach;
