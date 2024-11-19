import React from 'react';
import ServiceCard from './../Components/ServiceComponents/ServiceCards';
import './../css/main/ServiceCard.css';
import image1 from './../assets/images/team.webp'
const ServicesPage = () => {
  return (
    <div className="services-page container">
      <h1 className="text-center my-5">Our Services</h1>
      <div className="row">
        <div className="col-md-4">
          <ServiceCard
            title="Order Uniform"
            description="Get the best quality uniforms for your training."
            details={
              <li>
                Kit Price: 150 AED <br />
                Kit Size: Small, Medium, Large <br />
                Quantity: Customizable
              </li>
            }
            image={image1}
            buttonText="Order Now"
          />
        </div>
        <div className="col-md-4">
          <ServiceCard
            title="Group Session"
            description="Join our exciting group sessions at various locations."
            details={
              <>
                <li>
                  <b>International Academic School</b>:
                  <ul>
                    <li>Friday, 7:00-8:00 PM (Age 4-15)</li>
                    <li>Sunday, 8:00-9:00 AM (Age 4-15)</li>
                  </ul>
                </li>
                <li>
                  <b>Newzeland School</b>:
                  <ul>
                    <li>Wednesday, 7:00-8:00 PM (Age 8-14)</li>
                    <li>Saturday, 8:00-9:00 AM (Age 4-15)</li>
                  </ul>
                </li>
                <li>
                  <b>Villa in Al Safa 2</b>: Advanced Players Only (7-10 years)
                </li>
              </>
            }
            image={image1}
            buttonText="Book Now"
          />
        </div>
        <div className="col-md-4">
          <ServiceCard
            title="Private 1-on-1 Session"
            description="Personalized coaching for all ages."
            details={
              <li>
                Price: 250 AED <br />
                Discount: 10% off for 5 bookings
              </li>
            }
            image={image1}
            buttonText="Book Now"
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
