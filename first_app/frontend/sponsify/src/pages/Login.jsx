import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LogIn } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
     const res = await axios.post(
  "https://sponsify-zk06.onrender.com/api/auth/login",
  { email, password }
);
      
      // Store tokens and user info
      localStorage.setItem("token", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      localStorage.setItem("role", res.data.role);
      
      toast.success(`Welcome back, ${res.data.name}!`);
      
      // Small delay for the toast to be seen before redirect
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      const message = err.response?.data?.message || "Login failed. Please check your credentials.";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>LOGIN</h1>
        <p className="card-subtitle">Enter your credentials to access your dashboard.</p>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>EMAIL ADDRESS</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          
          <div className="form-group">
            <label>PASSWORD</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "AUTHENTICATING..." : <><LogIn size={18} /> SAVE AND CONTINUE</>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
