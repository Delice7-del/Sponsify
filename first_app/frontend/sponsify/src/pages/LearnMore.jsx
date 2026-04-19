import React from "react";
import { Link } from "react-router-dom";
import "./About.css"; // Reuse About styles for consistency

const LearnMore = () => {
  return (
    <div className="about-container">
      <section className="about__hero">
        <span className="label">Transparency & Trust</span>
        <h1>HOW WE <br /><span className="italic-serif">WORK.</span></h1>
        <p className="hero-text">
          Our organization was founded with the belief that every child deserves a chance to thrive.
          We work with local communities, schools, and caregivers to identify children who are 
          most in need of support.
        </p>
      </section>

      <section className="about__goals" style={{ marginBottom: '60px' }}>
        <p className="hero-text" style={{ fontSize: '1.1rem', textAlign: 'left' }}>
          Through sponsorships, we provide school fees, uniforms, meals, and emotional support. 
          Transparency and accountability are at the heart of everything we do. We ensure that 
          donations directly impact the child and community.
          <br /><br />
          Every sponsor receives regular updates and can build a real connection with the 
          child they support. Join us in changing lives—one child at a time.
        </p>
      </section>

      <section className="about__cta">
        <Link to="/sponsorship" className="btn-primary">View Children Profiles →</Link>
      </section>
    </div>
  );
};

export default LearnMore;
