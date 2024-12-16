import React from 'react';
import './App.css';
import avatar from './avijit.jpg';
import RequestForm from './component/RequestForm';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Riju Electronics</h1>
        <p>Your trusted partner for appliance repairs</p>
      </header>
      <main className="content">
        <div className="layout">
          <aside className="services-pane">
            <h2>Our Services</h2>
            <ul>
              <li>TV Repair</li>
              <li>AC Maintenance</li>
              <li>Refrigerator Fixes</li>
              <li>Heater Repairs</li>
            </ul>
          </aside>
          <section className="request-form2">
            {/* <h2>Request a Service</h2> */}
            <RequestForm />
          </section>
        </div>
        <section className="about">
          <h2>About Us</h2>
          <p>
            At Riju Electronics, we connect you with skilled technicians for fast and reliable appliance repairs. From TVs to refrigerators, we’ve got you covered!
          </p>
        </section>
        <section className="contact-us">
          <h2>Contact Us</h2>
          <p>
            Have questions? Contact us          <a 
          href="mailto:rijurana9@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#0074d9', textDecoration: 'none', fontWeight: 'bold', marginLeft: '5px' }}
        >
          rijurana9@gmail.com
        </a>

          </p>
        </section>
        <footer className="footer">
          <div className="developer">
            <img src={avatar} alt="Avijit Rana" className="avatar" />
            <p>
              Coded and developed by <strong>Avijit Rana</strong>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
