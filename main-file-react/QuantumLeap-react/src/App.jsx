import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './Components/Navbar/Navbar.jsx';
import HomeLanding from "./Components/pages/HomePage/HomeLanding.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import OurTeam from "./Components/pages/OurTeam/OurTeam.jsx";
import BlogsNews from "./Components/pages/BlogsNews/BlogsNews.jsx";
import Mission from "./Components/pages/Mission/Mission.jsx";
import Contact from "./Components/pages/Contact/Contact.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLanding />} />
        <Route path="/blogs-&-news" element={<BlogsNews />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact-us" element={<Contact />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
