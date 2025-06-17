import React from "react";
import "./Loading.css"; // Make sure this CSS file exists in the same folder

const Loading = () => {
  const name = "Peer Path";

  return (
    <div className="loading-screen">
      <svg
        className="logo"
        viewBox="0 0 64 64"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle
          className="logo-circle"
          cx="32"
          cy="32"
          r="30"
          strokeDasharray="188.4"
          strokeDashoffset="188.4"
        />
        <path
          className="logo-check"
          d="M16 32l12 12 20-20"
          strokeDasharray="64"
          strokeDashoffset="64"
        />
      </svg>

      <h1 className="animated-name" aria-label={name}>
        {name.split("").map((char, i) => (
          <span
            key={i}
            style={{ animationDelay: (i * 0.15 + 1.5) + "s" }}
          >
            {char}
          </span>
        ))}
      </h1>

      <div className="loading-dots" aria-label="Loading">
        <span style={{ animationDelay: "3s" }}>.</span>
        <span style={{ animationDelay: "3.2s" }}>.</span>
        <span style={{ animationDelay: "3.4s" }}>.</span>
      </div>
    </div>
  );
};

export default Loading;