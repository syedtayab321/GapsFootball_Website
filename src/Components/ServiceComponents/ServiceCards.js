import React from 'react';
import './../../css/main/ServiceCard.css';

const ServiceCard = ({ title, description, details, image, buttonText }) => {
  return (
    <>
    <div className='services-page'>
        <div className="service-card card mb-4">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <ul className="card-details">{details}</ul>
        <button className="btn btn-golden">{buttonText}</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default ServiceCard;
