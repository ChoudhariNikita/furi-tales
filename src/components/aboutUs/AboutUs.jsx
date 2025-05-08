import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <p>
        Welcome to <strong>FuriTales</strong>, where learning Japanese is fun
        and immersive! Our stories use beginner-friendly kanjis (N5 & N4
        levels) to help you build vocabulary, confidence, and recognize and
        memorize kanjis through interesting stories.
      </p>
      <p>Start your adventure with FuriTales and make language learning enjoyable!</p>
      <p className="about-us-footer">
        <em>みんなさん、がんばってください！</em>
        <br />
        <strong> - Nikita</strong>
      </p>
    </div>
  );
};

export default AboutUs;