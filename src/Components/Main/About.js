import React from "react";
import "./../../css/main/about.css";
import teamImage from "./../../assets/images/team.webp";
import missionImage from "./../../assets/images/mission.jpg";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <h1 className="hero-title">About Us</h1>
        <p className="hero-subtitle">Discover our journey, mission, and values.</p>
      </section>

      {/* Our Mission Section */}
      <section className="mission-section container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src={missionImage}
              alt="Mission"
              className="img-fluid rounded shadow-lg fade-in"
            />
          </div>
          <div className="col-lg-6">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-text">
              At MyBrand, our mission is to create innovative solutions that
              empower businesses to thrive. We strive to deliver excellence and
              foster a culture of creativity and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="team-section container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2">
            <img
              src={teamImage}
              alt="Team"
              className="img-fluid rounded shadow-lg fade-in"
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h2 className="section-title">Our Team</h2>
            <p className="section-text">
              We are a team of dedicated professionals who are passionate about
              delivering exceptional results. Our diverse talents and
              collaborative approach set us apart.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
