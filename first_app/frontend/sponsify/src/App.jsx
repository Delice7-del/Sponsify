import React from "react";
import { Routes, Route } from "react-router-dom";

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
