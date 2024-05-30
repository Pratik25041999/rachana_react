import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_3p124nr',     // Replace with your EmailJS service ID
      'template_sbzpoda',    // Replace with your EmailJS template ID
      formData,
      'VGt6KdyI142W7Dy_O'         // Replace with your EmailJS user ID
    ).then((result) => {
      console.log('Email successfully sent!', result.text);
    }, (error) => {
      console.log('Failed to send email.', error.text);
    });

    setFormData({ name: '', email: '', number: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Number:</label>
        <input 
          type="tel" 
          name="number" 
          value={formData.number} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;