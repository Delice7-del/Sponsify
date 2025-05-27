// src/pages/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <nav>
        <ul>
          <li><Link to="/admin/children">Manage Children</Link></li>
          <li><Link to="/admin/sponsorships">View Sponsorships</Link></li>
          <li><Link to="/admin/add-child">Add New Child</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
