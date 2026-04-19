import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFavorites } from '../utils/favorites';
import ChildCard from '../pages/ChildCard';
import "./Favorites.css";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="favorites-container">
        <section className="favorites__hero">
          <span className="label">Saved Profiles</span>
          <h1>YOUR <span className="italic-serif">FAVORITES.</span></h1>
        </section>
        
        <div className="favorites-empty">
          <div className="empty-content">
            <p>You haven't saved any profiles yet. Start your journey by exploring our verified children.</p>
            <Link to="/sponsorship" className="explore-btn">
              Browse Profiles →
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <section className="favorites__hero">
        <span className="label">Saved Profiles</span>
        <h1>YOUR <span className="italic-serif">FAVORITES.</span></h1>
        <p className="hero-text">
          Common interest brings us together, but your choice makes the difference. 
          The profiles you've saved are waiting for a chance to thrive.
        </p>
      </section>

      <div className="favorites__content">
        <div className="favorites__grid">
          {favorites.map((child) => (
            <ChildCard key={child.id} child={child} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;