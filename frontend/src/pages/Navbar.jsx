import React, { useState } from 'react';
import './Navbar.css';
import peer from '../assets/peerpath.png'; // make sure the image path is correct

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = {
    name: 'Naitik Verma',
    profileImage: 'https://via.placeholder.com/40',
  };

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img src={peer} alt="Peer Path Logo" className="logo" />
        <span className="logo-text">Peer Path</span>
      </div>

      {/* Navigation Links */}
      <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#doubts">Doubts</a>
        <a href="#helpers">Helpers</a>
        <a href="#contact">Contact</a>
      </div>

      {/* Auth Section */}
      <div className="auth-section">
        {isLoggedIn ? (
          <div className="user-info">
            <img src={user.profileImage} alt="User" className="user-avatar" />
            <span>{user.name}</span>
          </div>
        ) : (
          <button className="auth-button" onClick={handleAuthClick}>
            Login / Signup
          </button>
        )}
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;