import React from "react";
import { ShieldCheck, Heart, UserCheck, Lock, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import "./About.css"; // Reuse About.css for consistency

const Safety = () => {
  return (
    <div className="about-container">
      <section className="about__hero">
        <span className="label">Health & Protection</span>
        <div className="hero-icon">
          <ShieldCheck size={48} color="var(--accent)" strokeWidth={1.5} />
        </div>
        <h1>HEALTH & <br /><span className="italic-serif">SECURITY.</span></h1>
        <p className="hero-text">
          A child can only thrive when they feel safe and healthy. Sponsify implements 
          rigorous protection protocols and comprehensive healthcare coverage to ensure 
          total peace of mind for both children and sponsors.
        </p>
      </section>

      <div className="about__grid">
        <div className="about-card">
          <div className="about-icon"><Activity size={32} /></div>
          <h3>MEDICAL CARE</h3>
          <p>Every sponsored child has access to regular check-ups, vaccinations, and specialist care through our network of verified medical partners.</p>
        </div>
        <div className="about-card">
          <div className="about-icon"><Lock size={32} /></div>
          <h3>SECURE HOUSING</h3>
          <p>We work with community leaders to ensure children are living in safe, stable environments that are free from exploitation and risk.</p>
        </div>
        <div className="about-card">
          <div className="about-icon"><UserCheck size={32} /></div>
          <h3>PROTECTION STAFF</h3>
          <p>Our dedicated child protection officers conduct monthly home and school visits to monitor well-being and maintain high safety standards.</p>
        </div>
      </div>

      <section className="about__mission" style={{ marginTop: '4rem' }}>
        <div className="mission-content">
          <div className="about-icon"><Heart size={32} /></div>
          <h3>UNCOMPROMISING STANDARDS</h3>
          <p>
            Your sponsorship covers 100% of emergency medical costs and establishes a 
            safety net that protects children from the vulnerabilities of extreme poverty. 
            We utilize blockchain-verified auditing to ensure that every cent spent on 
            safety and health is accounted for and impactful.
          </p>
          <div style={{ marginTop: '2rem' }}>
            <Link to="/sponsorship" className="explore-btn" style={{ textDecoration: 'none', display: 'inline-block' }}>
              Protect a Life →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Safety;
