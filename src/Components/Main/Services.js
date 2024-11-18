import React from "react";
import "./../../css/main/services.css";
import trainingImage from "./../../assets/images/mission.jpg";
import leagueImage from "./../../assets/images/background.jpg";
import statsImage from "./../../assets/images/mission.jpg";

const Services = () => {
  const services = [
    {
      title: "Football Training",
      description:
        "Professional training sessions designed to improve your skills, fitness, and overall game performance.",
      image: trainingImage,
    },
    {
      title: "League Management",
      description:
        "Efficient league management tools for organizing tournaments, tracking progress, and ensuring smooth operations.",
      image: leagueImage,
    },
    {
      title: "Player Statistics",
      description:
        "Access detailed player statistics, analyze performance, and get insights to enhance your game.",
      image: statsImage,
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <h1 className="hero-title">Our Services</h1>
        <p className="hero-subtitle">
          Explore the best football services tailored for players, teams, and fans.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-list container py-5">
        <div className="row">
          {services.map((service, index) => (
            <div
              key={index}
              className="col-lg-12 service-item"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="service-container">
                <div className="service-image">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="rounded"
                  />
                </div>
                <div className="service-content">
                  <h5 className="service-title text-golden">{service.title}</h5>
                  <p className="service-description">{service.description}</p>
                  <button className="btn btn-golden">Book Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
