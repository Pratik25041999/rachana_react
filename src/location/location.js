import React from "react";
import "./location.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneDeparture,
  faTrainSubway,
  faBridgeWater,
  faTrainTram,
} from "@fortawesome/free-solid-svg-icons";

function SiteLocation({ scrollRef }) {
  return (
    <div className="MainColumnForLocation" ref={scrollRef}>
      <div style={{ height: "40px" }}></div>
      <div className="rowTitle">
        <div className="borderSideGolden"></div>
        <div
          className="golden-textMainHeading"
          style={{
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          Location
        </div>

        <div className="borderSideGolden"></div>
      </div>
      <div style={{ height: "6px" }}></div>
      <div className="column2">
        <div
          className="golden-textSubHeading"
          style={{
            marginLeft: 15,
            marginRight: 15,
            textAlign: "center",
          }}
        >
          Nestled within reach of bustling markets and serene parks, our
          location offers the best of both worlds
        </div>
        <div
          className="line_dd"
          style={{ width: "1100px", height: "0.8px" }}
        ></div>
      </div>
      <div style={{ height: "40px" }}></div>

      <div className="rowforlocation">
     <div className="mobileViewFotLocations">
         <div className="column2">
          <div className="containerForIcons">
            <div className="column2">
              <FontAwesomeIcon
                icon={faPlaneDeparture}
                className="email-icon2"
              />
              <div style={{ height: "10px" }}></div>

              <div
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#830c29",
                  fontWeight: "600",
                }}
              >
                NAVI MUMBAI INTERNATIONAL AIRPORT
              </div>
            </div>
          </div>
          <div style={{ height: "40px" }}></div>

          <div className="containerForIcons">
            <div className="column2">
              <FontAwesomeIcon icon={faTrainSubway} className="email-icon2" />
              <div style={{ height: "10px" }}></div>

              <div
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#830c29",
                  fontWeight: "600",
                }}
              >
                KHANDESHWAR RAILWAY STATION
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "40px" }}></div>

        <div className="column2">
          <div className="containerForIcons">
            <div className="column2">
              <FontAwesomeIcon icon={faBridgeWater} className="email-icon2" />
              <div style={{ height: "10px" }}></div>

              <div
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#830c29",
                  fontWeight: "600",
                }}
              >
                MUMBAI TRANS HARBOUR <br />
                LINK
              </div>
            </div>
          </div>
          <div style={{ height: "40px" }}></div>

          <div className="containerForIcons">
            <div className="column2">
              <FontAwesomeIcon icon={faTrainTram} className="email-icon2" />
              <div style={{ height: "10px" }}></div>

              <div
                style={{
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#830c29",
                  fontWeight: "600",
                }}
              >
                NAVI MUMBAI MAHA METRO
              </div>
            </div>
          </div>
        </div>
     </div>
        <div style={{ width: "100px" }}></div>
        <div className="mobileSpaceForLocation"></div>

        <img className="imageMap" src="maps.png" alt="maps2" />
      </div>
      <div style={{ height: "50px" }}></div>

      <div className="rowForList">
        <div className="columnfortext">
          <div className="WhiteTextAM">1.Navi Mumbai International Airport - 10 minutes</div>
          <div className="WhiteTextAM"> 2.Mumbai-Pune ExpressWay - 10 minutes</div>
          <div className="WhiteTextAM"> 3.Panvel Railway Station - 10 minutes</div>
          <div className="WhiteTextAM"> 4.Panvel ST Bus Depot - 15 minutes</div>
        </div>

        <div className="columnfortext">
          <div className="WhiteTextAM"> 5.Cidco Bus Stop - 10 minutes</div>
          <div className="WhiteTextAM"> 6.International Sports Complex - 10 minutes</div>
          <div className="WhiteTextAM"> 7.Upcoming Navi Mumbai SEZ - 10 minutes</div>
          <div className="WhiteTextAM"> 8.JNPT (Jawaharlal Nehru Port Trust) - 25 minutes</div>
        </div>
        <div className="columnfortext">
          <div className="WhiteTextAM"> 9.Major Schools,Colleges,Markets,Banks with 3kms Radius</div>
        </div>
    
      </div>
      {/* <div style={{ height: "20px" }}></div> */}
    </div>
  );
}

export default SiteLocation;
