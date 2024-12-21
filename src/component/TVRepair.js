import React from 'react';
import './ServicePage.css';  // For styling each service page
import tvImage from './images/tv-repair.jpg';  // Placeholder image

function TVRepair() {
  return (
    <div className="service-page">
      <header className="service-header">
        <h1>TV Repair</h1>
      </header>
      <section className="service-content">
        <img src={tvImage} alt="TV Repair" className="service-image" />
        <p>
          Get your television repaired quickly and professionally. Whether it's a broken screen or power issue, we provide fast and affordable services.
        </p>
      </section>
    </div>
  );
}

export default TVRepair;
