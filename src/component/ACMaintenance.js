import React from 'react';
import './ServicePage.css';  // For styling each service page
import acImage from './images/ac-maintenance.jpg';  // Placeholder image

function ACMaintenance() {
  return (
    <div className="service-page">
      <header className="service-header">
        <h1>AC Maintenance</h1>
      </header>
      <section className="service-content">
        <img src={acImage} alt="AC Maintenance" className="service-image" />
        <p>
          Keep your air conditioner in top condition with our expert maintenance services. We handle everything from cleaning to repair.
        </p>
      </section>
    </div>
  );
}

export default ACMaintenance;
