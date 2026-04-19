import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import "./Signup.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Signing up ${name} with email ${email}`);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>SIGN UP</h1>
        <p className="card-subtitle">Create your account to start your sponsorship journey.</p>
        
        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label>FULL NAME</label>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signup-btn">
            <UserPlus size={18} /> CREATE ACCOUNT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
