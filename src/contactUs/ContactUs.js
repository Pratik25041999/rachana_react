import React from "react";
import "./ContactUs.css";
import SubmitButton from "./submit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  return (
    <div
      className="MainImpColumn"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
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
              <div style={{ height: "32px" }}></div>
              <input
                type="text"
                className="Textfield"
                placeholder="Name"
              ></input>
              <div style={{ height: "32px" }}></div>
              <input
                type="text"
                className="Textfield"
                placeholder="Email"
              ></input>
              <div style={{ height: "32px" }}></div>
              <input
                type="text"
                className="Textfield"
                placeholder="Contact Number"
              ></input>
              <div style={{ height: "32px" }}></div>
              <SubmitButton />
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
