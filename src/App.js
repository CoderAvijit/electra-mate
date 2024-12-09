import React from 'react';
import './App.css';
import avatar from './avijit.jpg';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Riju Electronics</h1>
        <p>Your trusted partner for appliance repairs</p>
      </header>
      <main className="content">
        <section className="about">
          <h2>About Us</h2>
          <p>
            At Riju Electronics, we connect you with skilled technicians for fast and reliable appliance repairs. From TVs to refrigerators, we’ve got you covered!
          </p>
        </section>
        <section className="services">
          <h2>Our Services</h2>
          <ul>
            <li>TV Repair</li>
            <li>AC Maintenance</li>
            <li>Refrigerator Fixes</li>
            <li>Heater Repairs</li>
          </ul>
        </section>
        <section className="contact">
          <h2>Contact Us</h2>
          <p>Have questions? Reach out to us at rijurana9@gmail.com.</p>
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Riju Electronics. All rights reserved.</p>
        <div className="developer">
          <img src={avatar} alt="Avijit Rana" className="avatar" />
          <p>Coded and developed by <strong>Avijit Rana</strong></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
