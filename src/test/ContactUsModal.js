// import Modal from "react-bootstrap/Modal";
// import "./modalEnquiry.css";
// import SubmitButton from "../contactUs/submit";
// import emailjs from "emailjs-com";
// import React, { useState } from "react";

// const ContactUsModal = ({ show, onHide }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//   });
//   const [popupMessage, setPopupMessage] = useState(null);
//   React.useEffect(() => {
//     if (!show) {
//       setPopupMessage(null);
//     }
//   }, [show]);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     emailjs
//       .send(
//         "service_y1mpe2r", // Replace with your EmailJS service ID
//         "template_x8eiwkb", // Replace with your EmailJS template ID
//         formData,
//         "oZddSFl6BWszbF_1N" // Replace with your EmailJS user ID
//       )
//       .then((result) => {
//         console.log("Email successfully sent!", result.status, result.text);
//         setFormData({ name: "", email: "", number: "" });
//         setPopupMessage({
//           type: "success",
//           text: "Enquiry submitted successfully!",
//         });
//         setTimeout(() => {
//           setPopupMessage(null);
//           onHide();
//         }, 2000);

//         onHide();
//       })
//       .catch((error) => {
//         // alert("Failed to send email. Check console for details.");
//         console.error("Failed to send email:", error);
//         setPopupMessage({
//           type: "error",
//           text: "Failed to send enquiry. Please try again.",
//         });
//       });
//     setFormData({ name: "", email: "", number: "" });
//   };
//   return (
//     <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
//       <Modal.Header
//         closeButton
//         style={{ border: "none", margin: "0" }}
//       ></Modal.Header>
//       <Modal.Body style={{ margin: "0", padding: "0" }}>
//       {popupMessage && (
//           <div
//             style={{
//               padding: "12px 16px",
//               margin: "16px",
//               borderRadius: "6px",
//               textAlign: "center",
//               backgroundColor: popupMessage.type === "success" ? "#d4edda" : "#f8d7da",
//               color: popupMessage.type === "success" ? "#155724" : "#721c24",
//               border: `1px solid ${popupMessage.type === "success" ? "#c3e6cb" : "#f5c6cb"}`,
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//             }}
//           >
//             <span>{popupMessage.text}</span>
//             <button
//               type="button"
//               onClick={() => {
//                 setPopupMessage(null);
//                 if (popupMessage.type === "success") onHide();
//               }}
//               style={{ background: "none", border: "none", fontWeight: "bold", cursor: "pointer" }}
//             >
//               ✕
//             </button>
//           </div>
//         )}

//         <form onSubmit={handleSubmit}>
//           <div className="enquiryText">Enquiry Now</div>
//           <div className="columnEnquiry">
//             <div style={{ height: "32px" }}></div>
//             <input
//               type="text"
//               className="Textfield2"
//               placeholder="Name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             ></input>
//             <div style={{ height: "32px" }}></div>
//             <input
//               type="email"
//               className="Textfield2"
//               placeholder="Email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             ></input>
//             <div style={{ height: "32px" }}></div>
//             <input
//               type="tel"
//               className="Textfield2"
//               placeholder="Contact Number"
//               name="number"
//               value={formData.number}
//               onChange={handleChange}
//               required
//             ></input>
//             <div style={{ height: "32px" }}></div>
//             <SubmitButton />
//             <div style={{ height: "32px" }}></div>
//           </div>
//         </form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default ContactUsModal;

import Modal from "react-bootstrap/Modal";
import "./modalEnquiry.css";
import SubmitButton from "../contactUs/submit";
import emailjs from "emailjs-com";
import React, { useState, useEffect } from "react";

const ContactUsModal = ({ show, onHide }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [popupMessage, setPopupMessage] = useState(null);

  useEffect(() => {
    if (!show) {
      setPopupMessage(null);
    }
  }, [show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fill in your real EmailJS credentials from your EmailJS Dashboard
    const serviceID = "service_y1mpe2r";
    const templateID = "template_x8eiwkb";
    const publicKey = "oZddSFl6BWszbF_1N";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then((result) => {
        console.log("Email successfully sent!", result.status, result.text);
        setFormData({ name: "", email: "", number: "" });
        setPopupMessage({
          type: "success",
          text: "Enquiry submitted successfully!",
        });

        // Delay closing so the user can see the popup message for 2 seconds
        setTimeout(() => {
          setPopupMessage(null);
          onHide();
        }, 4000);
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        setPopupMessage({
          type: "error",
          text: "Failed to send enquiry. Please try again.",
        });
      });
  };

  return (
    <Modal show={show} onHide={onHide} backdrop="static" keyboard={false}>
      <Modal.Header
        closeButton
        style={{ border: "none", margin: "0" }}
      ></Modal.Header>
      <Modal.Body style={{ margin: "0", padding: "0" }}>
        {popupMessage && (
          <div
            style={{
              padding: "12px 16px",
              margin: "16px",
              borderRadius: "6px",
              textAlign: "center",
              backgroundColor:
                popupMessage.type === "success" ? "#d4edda" : "#f8d7da",
              color: popupMessage.type === "success" ? "#155724" : "#721c24",
              border: `1px solid ${
                popupMessage.type === "success" ? "#c3e6cb" : "#f5c6cb"
              }`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{popupMessage.text}</span>
            <button
              type="button"
              onClick={() => {
                setPopupMessage(null);
                if (popupMessage.type === "success") onHide();
              }}
              style={{
                background: "none",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="enquiryText">Enquiry Now</div>
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
            />
            <div style={{ height: "32px" }}></div>
            <input
              type="email"
              className="Textfield2"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div style={{ height: "32px" }}></div>
            <input
              type="tel"
              className="Textfield2"
              placeholder="Contact Number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
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
