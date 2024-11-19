import React, { useState } from "react";
import ModalForm from "./../Modals/BookNowModal";
import "./../../css/main/services.css";
import trainingImage from "./../../assets/images/mission.jpg";
import leagueImage from "./../../assets/images/background.jpg";
import statsImage from "./../../assets/images/mission.jpg";
import teamImage from "./../../assets/images/team.webp";
import "bootstrap/dist/css/bootstrap.min.css";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: "Order Uniform",
      description: (
        <>
          Get the best quality uniforms for your training.
          <ul>
            <li>Kit Price: 150 AED</li>
            <li>Kit Size: Small, Medium, Large</li>
            <li>Quantity: Customizable</li>
          </ul>
        </>
      ),
      image: trainingImage,
    },
    {
      title: "Group Session",
      description: (
        <>
          Join our exciting group sessions at various locations.
          <ul>
            <li>
              <b>International Academic School</b>:
              <ul>
                <li>Friday, 7:00-8:00 PM (Age 4-15)</li>
                <li>Sunday, 8:00-9:00 AM (Age 4-15)</li>
              </ul>
            </li>
            <li>
              <b>New Zealand School</b>:
              <ul>
                <li>Wednesday, 7:00-8:00 PM (Age 8-14)</li>
                <li>Saturday, 8:00-9:00 AM (Age 4-15)</li>
              </ul>
            </li>
            <li>
              <b>Villa in Al Safa 2</b>: Advanced Players Only (7-10 years)
            </li>
          </ul>
        </>
      ),
      image: leagueImage,
    },
    {
      title: "Player Statistics",
      description: (
        <>
          Access detailed player statistics, analyze performance, and get
          insights to enhance your game.
        </>
      ),
      image: statsImage,
    },
    {
      title: "Private 1-on-1 Session",
      description: (
        <>
          Personalized coaching for all ages.
          <ul>
            <li>Price: 250 AED</li>
            <li>Discount: 10% off for 5 bookings</li>
          </ul>
        </>
      ),
      image: teamImage,
    },
  ];

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="services-page">
      <section className="services-hero text-center py-5 bg-light">
        <h1 className="hero-title display-4">Our Services</h1>
        <p className="hero-subtitle text-muted">
          Explore the best football services tailored for players, teams, and
          fans.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-list container py-5">
        {services.map((service, index) => (
          <div
            key={index}
            className={`row align-items-center mb-5 ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="col-md-6">
              <img
                src={service.image}
                alt={service.title}
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6 text-md-start text-center p-4">
              <h5 className="service-title text-primary">{service.title}</h5>
              <p className="service-description">{service.description}</p>
              <button
                className="btn btn-primary mt-3"
                data-bs-toggle="modal"
                data-bs-target="#serviceModal"
                onClick={() => handleServiceSelection(service)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </section>

      {selectedService && (
        <ModalForm
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Services;
