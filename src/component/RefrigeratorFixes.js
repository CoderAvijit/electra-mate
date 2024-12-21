import React from 'react';
import './ServicePage.css';  // For styling each service page
import refrigeratorImage from './images/refrigerator-fixes.jpg';  // Placeholder image

function RefrigeratorFixes() {
  return (
    <div className="service-page">
      <header className="service-header">
        <h1>Refrigerator Fixes</h1>
      </header>
      <section className="service-content">
        <img src={refrigeratorImage} alt="Refrigerator Fixes" className="service-image" />
        <p>
          Facing issues with your refrigerator? Our experienced technicians will fix all kinds of refrigerator problems quickly and affordably.
        </p>
      </section>
    </div>
  );
}

export default RefrigeratorFixes;
