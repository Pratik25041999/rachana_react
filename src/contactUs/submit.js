import React from "react";
import "./ContactUs.css";

const SubmitButton = ({ onClick }) => {
  return (
    <button className="submit-button" onClick={onClick}>
      Submit
    </button>
  );
};

export default SubmitButton;
