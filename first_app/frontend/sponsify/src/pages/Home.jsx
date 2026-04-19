import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, ShieldCheck, HeartPulse } from 'lucide-react';
import child1 from '../assets/child1.png';
import child2 from '../assets/child2.png';
import "./Home.css";

const Home = () => {
  const featuredChildren = [
    {
      id: 1,
      name: "Daniel",
      age: 8,
      country: "Rwanda",
      image: child1,
      description: "Daniel loves school and dreams of becoming a doctor.",
      status: "Verified",
    },
    {
      id: 2,
      name: "Amina",
      age: 10,
      country: "Kenya",
      image: child2,
      description: "Amina enjoys reading and wants to be a teacher.",
      status: "Active",
    },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="hero__content">
          <span className="hero__badge">Empowering the Future</span>
          <h1>
            WHERE <span className="italic-serif">HOPE</span><br />
            MEETS <span className="highlight">ACTION.</span>
          </h1>
          <p>
            The premier platform for connecting compassionate sponsors with children in need. 
            Providing education, healthcare, and security with uncompromising precision.
          </p>
          <div className="hero__actions">
            <Link to="/sponsorship" className="btn-primary">
              Start Sponsoring →
            </Link>
            <Link to="/about" className="btn-outline">
              Explore Mission
            </Link>
          </div>
        </div>
      </section>

      {/* About Section - Built for Compassion */}
      <section className="home__about">
        <div className="section-header">
          <span className="label">Our Foundation</span>
          <h2>BUILT FOR <span className="italic-serif">PASSION.</span></h2>
          <p>Sponsify automates the heavy lifting of connecting donors so you can focus on making a real impact.</p>
        </div>
        
        <div className="about__grid">
          <div className="about__card">
            <div className="card__icon">
              <GraduationCap size={32} strokeWidth={1.5} />
            </div>
            <h3>EDUCATION FIRST</h3>
            <p>Ensure every child has access to quality schooling and modern learning materials.</p>
            <Link to="/education" className="card-btn">Learn More</Link>
          </div>
          <div className="about__card">
            <div className="card__icon">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h3>HEALTH & SECURITY</h3>
            <p>Comprehensive healthcare coverage and secure environments for every sponsored child.</p>
            <Link to="/safety" className="card-btn">Explore Safety</Link>
          </div>
          <div className="about__card">
            <div className="card__icon">
              <HeartPulse size={32} strokeWidth={1.5} />
            </div>
            <h3>LIFE ESSENTIALS</h3>
            <p>Providing nutrition, clean water, and daily necessities for a healthy upbringing.</p>
            <Link to="/outreach" className="card-btn">View Outreach</Link>
          </div>
        </div>
      </section>

      {/* Impact Section - The Pipeline */}
      <section className="home__pipeline">
        <div className="section-header center">
          <h2>THE <span className="italic-serif">JOURNEY</span></h2>
        </div>
        <div className="pipeline__grid">
          <div className="pipeline__item">
            <span className="pipeline__num">01</span>
            <div className="pipeline__info">
              <h3>DISCOVER</h3>
              <p>Meet children from around the world waiting for a supportive hand.</p>
            </div>
          </div>
          <div className="pipeline__item">
            <span className="pipeline__num">02</span>
            <div className="pipeline__info">
              <h3>CONNECT</h3>
              <p>Start your sponsorship journey with a secure and transparent process.</p>
            </div>
          </div>
          <div className="pipeline__item">
            <span className="pipeline__num">03</span>
            <div className="pipeline__info">
              <h3>TRANSFORM</h3>
              <p>Watch as your support changes a child's life and gives them a future.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Children - Tech Style Cards */}
      <section className="home__featured">
        <div className="section-header space-between">
          <div>
            <span className="label">Featured Profiles</span>
            <h2>WAITING FOR <span className="italic-serif">YOU.</span></h2>
          </div>
          <Link to="/sponsorship" className="view-more-link">View All Profiles →</Link>
        </div>

        <div className="featured__grid">
          {featuredChildren.map((child) => (
            <div key={child.id} className="child-tech-card">
              <div className="tech-card__header">
                <span className="status-dot"></span>
                <span>Profile ID: {child.id}00{child.id}</span>
                <span className="tech-badge">{child.status}</span>
              </div>
              <div className="tech-card__body">
                <div className="child-image-container">
                  <img src={child.image} alt={child.name} className="tech-image" />
                </div>
                <div className="child-details">
                  <div className="detail-row">
                    <span className="detail-label">NAME</span>
                    <span className="detail-value">{child.name}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">LOCATION</span>
                    <span className="detail-value">{child.country}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">AGE</span>
                    <span className="detail-value">{child.age} YRS</span>
                  </div>
                  <p className="tech-description">{child.description}</p>
                </div>
              </div>
              <div className="tech-card__footer">
                <Link 
                  to={`/sponsor-form/${child.id}`} 
                  state={{ ...child }}
                  className="tech-sponsor-btn"
                >
                  SPONSOR {child.name.toUpperCase()}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
