import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getFavorites, removeFromFavorites } from '../utils/favorites';
import './Favorites.css';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const handleRemoveFavorite = (childId) => {
    removeFromFavorites(childId);
    setFavorites(getFavorites());
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>Your Favorites</h2>
        <p>You haven't added any children to your favorites yet.</p>
        <Link to="/sponsorship" className="view-more-button">
          Browse Children
        </Link>
      </div>
    );
  }

  return (
    <div className="favorites-container">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.map((child) => (
          <div key={child.id} className="featured-child-card">
            <div className="featured-child-image">
              <img src={child.image} alt={`${child.name}'s photo`} />
            </div>
            <div className="featured-child-info">
              <h3>{child.name}, {child.age}</h3>
              <p className="child-location">{child.country}</p>
              <p className="child-description">{child.description}</p>
              <div className="card-buttons">
                <Link 
                  to={`/sponsor-form/${child.id}`} 
                  state={{ 
                    childName: child.name,
                    childAge: child.age,
                    childCountry: child.country,
                    childImage: child.image
                  }}
                  className="sponsor-button"
                >
                  Sponsor {child.name}
                </Link>
                <button 
                  onClick={() => handleRemoveFavorite(child.id)}
                  className="remove-favorite-button"
                >
                  Remove from Favorites
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites; 