import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <span className="menu-btn material-symbols-outlined" onClick={toggleMenu}>
          menu
        </span>

        <Link to="/" className="logo" style={{ textDecoration: 'none' }}>
          <h2>QuantumLeap</h2>
        </Link>

        <ul className={`links ${isMenuOpen ? 'show-menu' : ''}`}>
          <span className="close-btn material-symbols-outlined" onClick={toggleMenu}>
            close
          </span>
          <li className=""><Link to="/">Home</Link></li>
          <li><Link to="/blogs-&-news">Blogs & News</Link></li>
          <li><Link to="/mission">Mission</Link></li>
          <li><Link to="/our-team">Our Team</Link></li>
          <li><Link to="/contact-us">Contact</Link></li>
        </ul>
        <a className="login-btn" href='./LoginPage/index.html'>Login</a>
      </nav>
    </header>
  );
};


export default Navbar