// Utility functions for managing favorites in localStorage

const FAVORITES_KEY = 'sponsify_favorites';

export const getFavorites = () => {
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const addToFavorites = (child) => {
  const favorites = getFavorites();
  if (!favorites.some(fav => fav.id === child.id)) {
    favorites.push(child);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }
};

export const removeFromFavorites = (childId) => {
  const favorites = getFavorites();
  const updatedFavorites = favorites.filter(child => child.id !== childId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};

export const isChildFavorited = (childId) => {
  const favorites = getFavorites();
  return favorites.some(child => child.id === childId);
}; 