import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import Sponsorship from "./pages/Sponsorship";
import ChildDetail from "./pages/ChildDetail";
import ThankYou from "./pages/ThankYou";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import SponsorForm from "./pages/SponsorForm";
import SponsorLogin from "./pages/SponsorLogin";
import Favorites from "./pages/Favorites";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SponsorshipForm from "./pages/ChildForm";
import About from "./pages/About";
import LearnMore from "./pages/LearnMore";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Safety from "./pages/Safety";
import Outreach from "./pages/Outreach";

const App = () => {
  return (
    <div className="app-wrapper">
      <Toaster 
        position="top-right"
        toastOptions={{
          className: '',
          style: {
            background: '#0D1216',
            color: '#fff',
            border: '1px solid rgba(0, 209, 255, 0.1)',
            padding: '16px',
            fontSize: '14px',
            fontFamily: 'Urbanist, sans-serif',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
          success: {
            iconTheme: {
              primary: '#00D1FF',
              secondary: '#0D1216',
            },
          },
          error: {
            iconTheme: {
              primary: '#EF4444',
              secondary: '#0D1216',
            },
          },
        }}
      />
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/child/:id" element={<ChildDetail />} />
          <Route path="/sponsor-form/:id" element={<SponsorForm />} />

          <Route path="/sponsor-login" element={<SponsorLogin />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Dashboard />} />
          <Route path="/sponsor-form/:childId" element={<SponsorshipForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn-more" element={<LearnMore />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/outreach" element={<Outreach />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
