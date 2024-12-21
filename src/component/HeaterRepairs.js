import React from 'react';
import './ServicePage.css';  // For styling each service page
import heaterImage from './images/heater-repairs.jpg';  // Placeholder image

function HeaterRepairs() {
  return (
    <div className="service-page">
      <header className="service-header">
        <h1>Heater Repairs</h1>
      </header>
      <section className="service-content">
        <img src={heaterImage} alt="Heater Repairs" className="service-image" />
        <p>
          Our technicians provide reliable heater repairs for all kinds of heating systems. Whether it's a thermostat issue or heating failure, we've got you covered.
        </p>
      </section>
    </div>
  );
}

export default HeaterRepairs;
