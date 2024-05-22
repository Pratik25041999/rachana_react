import React, { useState } from "react";
// import './App.css'; // Import the CSS file for styling
import "./App.css";

const Navbar = ({ showView }) => {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
    showView(index);
  };

  return (
    <div className="ColumnView" style={{ position: "fixed" }}>
      <div className="navbar">
        <div className="logo">
          <img src="logo.png" style={{ height: "40px" }} />
        </div>
        <div className="menu">
          {[
            "HOME",
            "OVERVIEW",
            "AMENITIES",
            "PLANS",
            "LOCATION",
            "CONTACT US",
          ].map((item, index) => (
            <div
              key={index}
              className={`menu-item ${active === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              {item}
            </div>
          ))}
        </div>
        <img src="company_logo.png" style={{ height: "40px" }} />
      </div>
      <div className="line_d"></div>
    </div>
  );
};

export default Navbar;
