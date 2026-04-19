// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  // Simulated auth status — replace with actual logic or Context
  const isLoggedIn = localStorage.getItem("token") !== null;
  const isAdmin = localStorage.getItem("role") === "admin"; // optional

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <Link to="/">
            <ShieldCheck size={28} color="var(--accent)" strokeWidth={2.5} />
            <span>Sponsify</span>
          </Link>
        </div>

        <ul className="navbar__links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Sponsorship">Sponsor a Child</Link>
          </li>
          <li>
            <Link to="/favorites">
              <span className="favorites-link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="20"
                  height="20"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                Favorites
              </span>
            </Link>
          </li>
        </ul>

        <div className="navbar__actions">
          {isLoggedIn ? (
            <>
              {isAdmin && (
                <Link to="/admin-dashboard" className="nav-link">
                  Dashboard
                </Link>
              )}
              <button className="cta-btn" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/signup" className="cta-btn">
                Sign Up →
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
