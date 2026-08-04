// import React, { useState } from "react";
// import "./ContactUs.css";
// import SubmitButton from "./submit";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
// import emailjs from "emailjs-com";

// function ContactUs({ scrollRef }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     number: "",
//   });

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
//       .then(
//         (result) => {
//           console.log("Email successfully sent!", result.status);
//         },
//         (error) => {
//           console.log("Failed to send email.", error.text);
//         }
//       );
//     setFormData({ name: "", email: "", number: "" });
//   };
//   return (
//     <div
//       className="MainImpColumn"
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between",
//       }}
//       ref={scrollRef}
//     >
//       <div className="MainColumnForOverView">
//         <div style={{ height: "40px" }}></div>
//         <div className="rowTitle">
//           <div className="borderSideGolden"></div>
//           <div
//             className="golden-textMainHeading"
//             style={{ marginLeft: 15, marginRight: 15 }}
//           >
//             Contact Us
//           </div>

//           <div className="borderSideGolden"></div>
//         </div>
//         <div style={{ height: "30px" }}></div>

//         <div className="ContactUsRow">
//           <div className="FormForContactUS">
//             <div className="ColumnContactUs">
//               <div className="rowTitle">
//                 <div className="borderSideGolden"></div>
//                 <div
//                   className="golden-textSubHeading"
//                   style={{ marginLeft: 15, marginRight: 15 }}
//                 >
//                   Enquire Now
//                 </div>

//                 <div className="borderSideGolden"></div>
//               </div>
//               <form className="ContactUsform" onSubmit={handleSubmit}>
//                 <div style={{ height: "32px" }}></div>
//                 <input
//                   type="text"
//                   className="Textfield"
//                   placeholder="Name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 ></input>
//                 <div style={{ height: "32px" }}></div>
//                 <input
//                   type="email"
//                   className="Textfield"
//                   placeholder="Email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 ></input>
//                 <div style={{ height: "32px" }}></div>
//                 <input
//                   type="tel"
//                   className="Textfield"
//                   placeholder="Contact Number"
//                   name="number"
//                   value={formData.number}
//                   onChange={handleChange}
//                   required
//                 ></input>
//                 <div style={{ height: "32px" }}></div>
//                 <div style={{ display: "flex", justifyContent: "center" }}>
//                   <SubmitButton />
//                 </div>
//               </form>
//             </div>
//           </div>

//           <div className="ContactUsDetails">
//             <div style={{ height: "32px" }}></div>

//             <div className="rowTitle">
//               <div className="borderSideGolden"></div>
//               <div
//                 className="golden-textSubHeading"
//                 style={{ marginLeft: 15, marginRight: 15 }}
//               >
//                 Site Address
//               </div>

//               <div className="borderSideGolden"></div>
//             </div>
//             <div style={{ height: "12px" }}></div>

//             <div className="WhiteTextInfo">
//               PLOT NO 107, SECTOR 08, PUSHPAKNAGAR <br></br> NAVI MUMBAI-410 221
//             </div>
//             <div style={{ height: "24px" }}></div>
//             <div className="rowTitle">
//               <div className="borderSideGolden"></div>
//               <div
//                 className="golden-textSubHeading"
//                 style={{ marginLeft: 15, marginRight: 15 }}
//               >
//                 Corporate Office
//               </div>
//               <div className="borderSideGolden"></div>
//             </div>
//             <div style={{ height: "12px" }}></div>

//             <div className="WhiteTextInfo">
//               OFFICE NO. 907, 9TH FLOOR,
//               <br />
//               THE LANDMARK CHS, PLOT NO. 26A, SECTOR. 07,
//               <br />
//               KHARGHAR,
//               <br />
//               NAVI MUMBAI 410 210
//             </div>
//             <div style={{ height: "12px" }}></div>
//             <div className="rowTitle">
//               <FontAwesomeIcon icon={faEnvelope} className="email-icon" />

//               <div className="WhiteTextInfo">
//                 onerachanalifestylellp2024@gmail.com
//               </div>
//             </div>
//             <div style={{ height: "12px" }}></div>
//             <div className="rowTitle">
//               <FontAwesomeIcon icon={faPhone} className="email-icon" />

//               <div className="WhiteTextInfo">+91-7977202271 / 09876544321 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="line_d"></div>
//         <div className="footer">© 2024 Rachana VISTA. All rights reserved.</div>
//       </div>
//     </div>
//   );
// }

// export default ContactUs;

import React, { useState } from "react";
import "./ContactUs.css";
import SubmitButton from "./submit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

function ContactUs({ scrollRef }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [popupMessage, setPopupMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = "service_y1mpe2r";
    const templateID = "template_x8eiwkb";
    const publicKey = "oZddSFl6BWszbF_1N";

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      (result) => {
        console.log("Email successfully sent!", result.status);
        setFormData({ name: "", email: "", number: "" });
        setPopupMessage({
          type: "success",
          text: "Enquiry submitted successfully!",
        });

        // Auto-hide the popup after 4 seconds
        setTimeout(() => {
          setPopupMessage(null);
        }, 4000);
      },
      (error) => {
        console.error("Failed to send email.", error.text);
        setPopupMessage({
          type: "error",
          text: "Failed to send enquiry. Please try again.",
        });
      }
    );
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
            className="golden-textMainHeading"
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
                  className="golden-textSubHeading"
                  style={{ marginLeft: 15, marginRight: 15 }}
                >
                  Enquire Now
                </div>

                <div className="borderSideGolden"></div>
              </div>

              {/* Popup Message Banner */}
              {popupMessage && (
                <div
                  style={{
                    padding: "12px 16px",
                    marginTop: "16px",
                    borderRadius: "6px",
                    textAlign: "center",
                    backgroundColor:
                      popupMessage.type === "success" ? "#d4edda" : "#f8d7da",
                    color:
                      popupMessage.type === "success" ? "#155724" : "#721c24",
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
                    onClick={() => setPopupMessage(null)}
                    style={{
                      background: "none",
                      border: "none",
                      fontWeight: "bold",
                      cursor: "pointer",
                      color: "inherit",
                      fontSize: "16px",
                      marginLeft: "10px",
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}

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
                />
                <div style={{ height: "32px" }}></div>
                <input
                  type="email"
                  className="Textfield"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <div style={{ height: "32px" }}></div>
                <input
                  type="tel"
                  className="Textfield"
                  placeholder="Contact Number"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  required
                />
                <div style={{ height: "32px" }}></div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <SubmitButton />
                </div>
              </form>
            </div>
          </div>

          <div className="ContactUsDetails">
            <div style={{ height: "32px" }}></div>

            <div className="rowTitle">
              <div className="borderSideGolden"></div>
              <div
                className="golden-textSubHeading"
                style={{ marginLeft: 15, marginRight: 15 }}
              >
                Site Address
              </div>

              <div className="borderSideGolden"></div>
            </div>
            <div style={{ height: "12px" }}></div>

            <div className="WhiteTextInfo">
              PLOT NO 107, SECTOR 08, PUSHPAKNAGAR <br /> NAVI MUMBAI-410 221
            </div>
            <div style={{ height: "24px" }}></div>
            <div className="rowTitle">
              <div className="borderSideGolden"></div>
              <div
                className="golden-textSubHeading"
                style={{ marginLeft: 15, marginRight: 15 }}
              >
                Corporate Office
              </div>
              <div className="borderSideGolden"></div>
            </div>
            <div style={{ height: "12px" }}></div>

            <div className="WhiteTextInfo">
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

              <div className="WhiteTextInfo">
                onerachanalifestylellp2024@gmail.com
              </div>
            </div>
            <div style={{ height: "12px" }}></div>
            <div className="rowTitle">
              <FontAwesomeIcon icon={faPhone} className="email-icon" />

              <div className="WhiteTextInfo">
                +91-7977202271 / +91-9167460531{" "}
              </div>
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
