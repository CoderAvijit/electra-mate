import React, { useState } from 'react';
import '../App.css';

function RequestForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    serviceType: '',
    message: '',
  });

  const [responseMessage, setResponseMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(''); // Clear any previous messages

    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL || 'https://electra-mate-production.up.railway.app/api/request/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setResponseMessage('Request Received! Thank You! ♥');
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.message || 'Something went wrong'}`);
      }
    } catch (error) {
      setResponseMessage('Failed to send request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="request-form">
      <h2 className="form-header">Raise a Service Request</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          aria-label="Your Name"
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number (e.g., +9199xxxxxxxx)"
          value={formData.phone}
          onChange={handleChange}
          pattern="^\+91[6-9][0-9]{9}$"
          title="Phone number must be in the format +9199xxxxxxxx"
          aria-label="Phone Number"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          aria-label="Email Address"
          required
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          aria-label="Location"
          required
        />
        <select
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          aria-label="Service Type"
          required
        >
          <option value="">Select Service Type</option>
          <option value="TV Repair">TV Repair</option>
          <option value="AC Maintenance">AC Maintenance</option>
          <option value="Refrigerator Fix">Refrigerator Fix</option>
          <option value="Heater Repair">Heater Repair</option>
        </select>
        <textarea
          name="message"
          placeholder="Additional Message"
          value={formData.message}
          onChange={handleChange}
          aria-label="Additional Message"
          required
        ></textarea>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Request'}
        </button>
      </form>
      {responseMessage && <p className="response-message">{responseMessage}</p>}
    </div>
  );
}

export default RequestForm;
