import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalEnquiry.css";
import SubmitButton from "../contactUs/submit";






const ContactUsModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header closeButton style={{border:"none",margin:"0"}}></Modal.Header>
      <Modal.Body style={{margin:"0",padding:"0"}}>
     <div className="enquiryText">
      Enquiry Now
     </div>
<div className="columnEnquiry">
<div style={{ height: "32px" }}></div>
     <input
                type="text"
                className="Textfield2"
                placeholder="Name"
              ></input>
              <div style={{ height: "32px" }}></div>
     <input
                type="text"
                className="Textfield2"
                placeholder="Email"
              ></input>
              <div style={{ height: "32px" }}></div>
     <input
                type="text"
                className="Textfield2"
                placeholder="Contact Number"
              ></input>
              <div style={{ height: "32px" }}></div>
              <SubmitButton />
              <div style={{ height: "32px" }}></div>
              </div>
   
      </Modal.Body>
    
    </Modal>
  );
};

export default ContactUsModal;
