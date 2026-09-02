// LandingPage.js
import React from "react";

const LandingPage = () => {
  return (
    <div
      className="landing-page"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "#ffffff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div
        className="landing-content"
        style={{
          maxWidth: "700px",
          padding: "40px",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>GiftLink</h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "30px", lineHeight: "1.6" }}>
          Connect with your community to share household items you no longer need. Give
          freely, find treasures, and reduce waste — all in one place.
        </p>
        <a
          href="/app"
          className="btn btn-light btn-lg"
          style={{
            padding: "15px 40px",
            fontSize: "1.2rem",
            borderRadius: "50px",
            fontWeight: "bold",
            color: "#667eea",
            textDecoration: "none",
            backgroundColor: "#ffffff",
            display: "inline-block",
          }}
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
