import React, { useState } from "react";
import "./ContactUs.css";
import SubmitButton from "./submit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from 'emailjs-com';


function ContactUs({ scrollRef }) {
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
      console.log('Email successfully sent!', result.status);

    }, (error) => {
      console.log('Failed to send email.', error.text);
    });
setFormData({ name: '', email: '', number: '' });
  };
  return (
    <div
      className="MainImpColumn"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      ref={scrollRef}
    >
      
      <div className="MainColumnForOverView">
        <div style={{ height: "40px" }}></div>
        <div className="rowTitle">
          <div className="borderSideGolden"></div>
          <div
            className="golden-text"
            style={{ marginLeft: 15, marginRight: 15 }}
          >
            Contact Us
          </div>

          <div className="borderSideGolden"></div>
        </div>
        <div style={{ height: "30px" }}></div>
        
        <div className="ContactUsRow">
          <div className="FormForContactUS">
            <div className="ColumnContactUs">
              <div className="rowTitle">
                <div className="borderSideGolden"></div>
                <div
                  className="golden-text"
                  style={{ marginLeft: 15, marginRight: 15, fontSize: "20px" }}
                >
                  Enquire Now
                </div>

                <div className="borderSideGolden"></div>
              </div>
    <form className="ContactUsform" onSubmit={handleSubmit}>

              <div style={{ height: "32px" }}></div>
              <input
                type="text"
                className="Textfield"
                placeholder="Name"
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              ></input>
              <div style={{ height: "32px" }}></div>
              <input
                type="email"
                className="Textfield"
                placeholder="Email"
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required
              ></input>
              <div style={{ height: "32px" }}></div>
              <input
                type="tel"
                className="Textfield"
                placeholder="Contact Number"
                name="number" 
                value={formData.number} 
                onChange={handleChange} 
                required
              ></input>
              <div style={{ height: "32px" }}></div>
             <div style={{display:"flex", justifyContent:"center"}}>
             <SubmitButton />
             </div>
    </form>

            </div>
          </div>

          <div className="ContactUsDetails">
            <div className="rowTitle">
              <div className="borderSideGolden"></div>
              <div
                className="golden-text"
                style={{ marginLeft: 15, marginRight: 15, fontSize: "22px" }}
              >
                Site Address
              </div>

              <div className="borderSideGolden"></div>
            </div>
            <div style={{ height: "12px" }}></div>

            <div className="WhiteText">
              PLOT NO 107, SECTOR 08, PUSHPAKNAGAR <br></br> NAVI MUMBAI-410 221
            </div>
            <div style={{ height: "24px" }}></div>
            <div className="rowTitle">
              <div className="borderSideGolden"></div>
              <div
                className="golden-text"
                style={{ marginLeft: 15, marginRight: 15, fontSize: "22px" }}
              >
                Corporate Office
              </div>
              <div className="borderSideGolden"></div>
            </div>
            <div style={{ height: "12px" }}></div>

            <div className="WhiteText">
              OFFICE NO. 907, 9TH FLOOR,
              <br />
              THE LANDMARK CHS, PLOT NO. 26A, SECTOR. 07,
              <br />
              KHARGHAR,
              <br />
              NAVI MUMBAI 410 210
            </div>
            <div style={{ height: "12px" }}></div>
            <div className="rowTitle">
              <FontAwesomeIcon icon={faEnvelope} className="email-icon" />

              <div className="WhiteText">
                onerachanalifestylellp2024@gmail.com
              </div>
            </div>
            <div style={{ height: "12px" }}></div>
            <div className="rowTitle">
              <FontAwesomeIcon icon={faPhone} className="email-icon" />

              <div className="WhiteText">122345678890 / 09876544321 </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="line_d"></div>
        <div className="footer">© 2024 Rachana VISTA. All rights reserved.</div>
      </div>
    </div>
  );
}

export default ContactUs;
