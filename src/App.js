import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import avatar from './avijit.jpg';
import TVRepair from './component/TVRepair';
import ACMaintenance from './component/ACMaintenance';
import RefrigeratorFixes from './component/RefrigeratorFixes';
import HeaterRepairs from './component/HeaterRepairs';
import RequestForm from './component/RequestForm';
import herobanner from './component/images/hero-banner.webp';
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <Router>
      <SpeedInsights/>
      <div className="App">
        <header className="header">
          <h1>Rana Electronics</h1>
          <p>Your trusted partner for appliance repairs</p>
          <Link to="/request-form" className="raise-request">
            Raise a Request?
          </Link>
        </header>
        <main className="content">
          <div className="layout">
            <aside className="services-pane">
              <h2>Our Services</h2>
              <ul>
                <li><Link to="/tv-repair">TV Repair</Link></li>
                <li><Link to="/ac-maintenance">AC Maintenance</Link></li>
                <li><Link to="/refrigerator-fixes">Refrigerator Fixes</Link></li>
                <li><Link to="/heater-repairs">Heater Repairs</Link></li>
              </ul>
            </aside>

            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/tv-repair" element={<TVRepair />} />
              <Route path="/ac-maintenance" element={<ACMaintenance />} />
              <Route path="/refrigerator-fixes" element={<RefrigeratorFixes />} />
              <Route path="/heater-repairs" element={<HeaterRepairs />} />
              <Route path="/request-form" element={<RequestForm />} />
            </Routes>
          </div>
        </main>
        <footer className="footer">
          <div className="developer">
            <img src={avatar} alt="Avijit Rana" className="avatar" />
            <p>
              Coded and developed by <strong>Avijit Rana</strong>
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div className="home-page">
      <section className="welcome">
        <h2>Welcome to Rana Electronics</h2>
        <p>
          At Rana Electronics, we specialize in delivering exceptional appliance repair services 
          to ensure your devices are back up and running in no time. With a team of expert 
          technicians and a commitment to quality, we are your go-to solution for reliable 
          and affordable repairs.
        </p>
        <img
          src={herobanner} // Replace with your image URL
          alt="Home Appliance Services"
          className="home-banner"
        />
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>
            <strong>Expert Technicians:</strong> Highly skilled and experienced in a wide range of appliances.
          </li>
          <li>
            <strong>Fast and Reliable Service:</strong> We prioritize your time and satisfaction.
          </li>
          <li>
            <strong>Affordable Pricing:</strong> Transparent and competitive rates with no hidden charges.
          </li>
          <li>
            <strong>Wide Coverage:</strong> From TVs and ACs to refrigerators and heaters—we fix them all.
          </li>
        </ul>
      </section>

      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>
          Need assistance? Get in touch with us today!
        </p>
        <p>
          Email us at{' '}
          <a
            href="mailto:rijurana9@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#0074d9', textDecoration: 'none', fontWeight: 'bold' }}
          >
            rijurana9@gmail.com
          </a>
        </p>
      </section>
    </div>
  );
}

export default App;
