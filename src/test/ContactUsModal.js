import Modal from "react-bootstrap/Modal";
import "./modalEnquiry.css";
import SubmitButton from "../contactUs/submit";
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

const ContactUsModal = ({ show, onHide }) => {
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
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton style={{border:"none",margin:"0"}}></Modal.Header>
      <Modal.Body style={{margin:"0",padding:"0"}}>
    <form onSubmit={handleSubmit}>

     <div className="enquiryText">
      Enquiry Now
     </div>
<div className="columnEnquiry">
<div style={{ height: "32px" }}></div>
     <input
                type="text"
                className="Textfield2"
                placeholder="Name"
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              ></input>
              <div style={{ height: "32px" }}></div>
     <input
                type="email"
                className="Textfield2"
                placeholder="Email"
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
              ></input>
              <div style={{ height: "32px" }}></div>
     <input
                type="tel"
                className="Textfield2"
                placeholder="Contact Number"
          name="number" 

                value={formData.number} 
                onChange={handleChange} 
                required
              ></input>
              <div style={{ height: "32px" }}></div>
              <SubmitButton />
              <div style={{ height: "32px" }}></div>
              </div>
    </form>
   
      </Modal.Body>
    
    </Modal>
  );
};

export default ContactUsModal;
