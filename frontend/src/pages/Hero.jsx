import React from "react";
import "./Home.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight-word">Connect</span>
          <span className="arrow-container">
            <span className="animated-arrow">➝</span>
          </span>
          <span className="highlight-word">Clear Doubts</span>
        </h1>
        <p>
          India’s First Peer-to-Peer Platform for Students to Solve & Share
          Knowledge Together.
        </p>
        <div className="hero-buttons">
          <button className="btn primary">Join Peer Path</button>
          <button className="btn secondary">Explore Doubts</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;