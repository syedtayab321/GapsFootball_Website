import React from "react";
import "./../../css/main/features.css";
import matchTrackingImage from "./../../assets/images/team.webp";
import teamManagementImage from "./../../assets/images/background.jpg";
import playerStatsImage from "./../../assets/images/mission.jpg";

const Features = () => {
  const features = [
    {
      title: "Live Match Tracking",
      description:
        "Track live matches with real-time updates, scores, and key events to stay informed wherever you are.",
      image: matchTrackingImage,
    },
    {
      title: "Team Management",
      description:
        "Effortlessly manage your team with tools for scheduling, tactics, and communication.",
      image: teamManagementImage,
    },
    {
      title: "Player Statistics",
      description:
        "Access detailed player statistics, performance data, and analytics to make informed decisions.",
      image: playerStatsImage,
    },
  ];

  return (
    <div className="features-page">
      {/* Hero Section */}
      <section className="features-hero">
        <h1 className="hero-title">Our Features</h1>
        <p className="hero-subtitle">Empowering football enthusiasts with the best tools.</p>
      </section>

      {/* Features Section */}
      <section className="features-list container py-5">
        <div className="row">
          {features.map((feature, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 feature-card fade-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="card shadow">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="card-img-top rounded"
                />
                <div className="card-body text-center">
                  <h5 className="card-title text-golden">{feature.title}</h5>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Features;
