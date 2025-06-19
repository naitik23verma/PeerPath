import React, { useState } from 'react';
import './FrontPage.css';
import ellipse from "../assets/ellipse.png";
import peer from "../assets/peerpath.png";
import Navbar from './Navbar';


const FrontPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const user = {
    name: 'Naitik Verma',
    bio: 'Web Dev | MERN Stack | Robotics Club - MANIT',
    expertiseLevel: 'Intermediate',
    isAvailable: true,
    profileImage: '',
  };

  const doubts = [
    { id: 1, title: 'How to implement JWT in MERN?', tags: ['Node.js', 'Auth'], asker: 'Aryan' },
    { id: 2, title: 'Best way to deploy full-stack app?', tags: ['Deployment', 'Hosting'], asker: 'Sanya' },
    { id: 3, title: 'Why use Redux over Context?', tags: ['React', 'State'], asker: 'Kunal' },
  ];

  const topUsers = [
    { name: 'Riya Sharma', cleared: 35 },
    { name: 'Sahil Mehta', cleared: 28 },
    { name: 'Naitik Verma', cleared: 24 },
  ];

  return (
    <div className="front-page">
        <Navbar/>
      <img src={ellipse} alt="corner-top" className="corner-img top-right" />
      <img src={ellipse} alt="corner-bottom" className="corner-img bottom-right" />
      <img src={ellipse} alt="corner-bottom" className="corner-img bottom-left" />

      {/* Auth */}
      

      

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-text">
          <h1 className="title">Peer Path</h1>
          <p className="tagline">Connect. Collaborate. Clear Doubts.</p>
          <button className="start-button">🚀 Start Asking Doubts</button>
        </div>
        <img src={peer} alt="logo-right" style={{ width: '40rem', marginLeft: "20px", marginTop:"8rem" }} />
      </div>

      {/* Features */}
      <div className="features-section">
        <h2>Why Peer Path?</h2>
        <div className="features-grid">
          <div className="feature-card">🤝 Connect with peers based on expertise</div>
          <div className="feature-card">💬 Get help via chat, video or in-person</div>
          <div className="feature-card">📚 Learn while helping others</div>
          <div className="feature-card">📈 Build your credibility in your field</div>
        </div>
      </div>

      {/* Doubts Section */}
      <div className="doubts-section">
        <h2>🔥 Trending Doubts</h2>
        <div className="doubt-cards">
          {doubts.map((doubt) => (
            <div key={doubt.id} className="doubt-card">
              <h4>{doubt.title}</h4>
              <p>Asked by: {doubt.asker}</p>
              <div className="tags">
                {doubt.tags.map((tag, i) => <span key={i} className="tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="leaderboard-section">
        <h2>🏆 Top Helpers</h2>
        <div className="leaderboard-cards">
          {topUsers.map((user, i) => (
            <div key={i} className="leader-card">
              <h4>{user.name}</h4>
              <p>Cleared Doubts: {user.cleared}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        © 2025 Peer Path. Built by Students for Students.
      </footer>
    </div>
  );
};

export default FrontPage;