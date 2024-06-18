import React from "react";
import "./amenities.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPersonSwimming,
  faTableTennisPaddleBall,
  faDumbbell,
  faSpa,
} from "@fortawesome/free-solid-svg-icons";

function Amenities({ scrollRef }) {
  return (
    <div className="MainColumnForAmenities" ref={scrollRef}>
      <div style={{ height: "40px" }}></div>
      <div className="rowTitle">
        <div className="borderSideGolden"></div>
        <div
          className="golden-text"
          style={{
            marginLeft: 15,
            marginRight: 15,
          }}
        >
          Amenities
        </div>

        <div className="borderSideGolden"></div>
      </div>
      <div style={{ height: "6px" }}></div>
      <div className="column2">
        <div
          className="golden-text"
          style={{
            marginLeft: 15,
            marginRight: 15,
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          Experience unparalleled luxury with world-class amenities tailored to
          elevate your lifestyle
        </div>
        <div
          className="line_dd"
          style={{ width: "950px", height: "0.8px" }}
        ></div>
        <div style={{ height: "50px" }}></div>

        <div className="rowforAm">
          <img
            className="planImageAm"
            src="./drone_view_compressed.jpeg"
            alt="drone view"
          />
          <div style={{ width: "60px" }}></div>
          <div className="newColumn">
            <div className="column3">
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon
                    icon={faPersonSwimming}
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
                    SWIMMING POOL
                  </div>
                </div>
              </div>
              <div style={{ width: "40px" }}></div>
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon icon={faDumbbell} className="email-icon2" />
                  <div style={{ height: "10px" }}></div>

                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#830c29",
                      fontWeight: "600",
                    }}
                  >
                    FITNESS CENTER
                  </div>
                </div>
              </div>
              <div style={{ width: "40px" }}></div>
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon
                    icon={faTableTennisPaddleBall}
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
                    INDOOR GAMES
                  </div>
                </div>
              </div>

              <div style={{ width: "40px" }}></div>
            </div>
            <div style={{ height: "50px" }}></div>

            <div className="column3">
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon icon={faSpa} className="email-icon2" />
                  <div style={{ height: "10px" }}></div>

                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#830c29",
                      fontWeight: "600",
                    }}
                  >
                    SPA ROOM
                  </div>
                </div>
              </div>
              <div style={{ width: "40px" }}></div>
              <div
                className="containerForIcons2"
                style={{ paddingTop: "34px" }}
              >
                <div className="column2">
                  <img
                    src="./cricket.svg"
                    className="email-icon2"
                    style={{ height: "40px" }}
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
                    CRICKET
                    <br /> NETBOX
                  </div>
                </div>
              </div>
              <div style={{ width: "40px" }}></div>
              <div
                className="containerForIcons2"
                style={{ paddingTop: "38px" }}
              >
                <div className="column2">
                  <img
                    src="./sit.svg"
                    className="email-icon2"
                    style={{ height: "45px" }}
                  />

                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#830c29",
                      fontWeight: "600",
                    }}
                  >
                    YOGA
                    <br />
                    ROOM
                  </div>
                </div>
              </div>

              <div style={{ width: "40px" }}></div>
            </div>
          </div>
          {/*  */}
          <div className="mobileViewAmenites">
          <div style={{ height: "50px" }}></div>
          <div className="column3">
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon
                    icon={faPersonSwimming}
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
                    SWIMMING POOL
                  </div>
                </div>
              </div>
              <div style={{ width: "30px" }}></div>
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon icon={faDumbbell} className="email-icon2" />
                  <div style={{ height: "10px" }}></div>

                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#830c29",
                      fontWeight: "600",
                    }}
                  >
                    FITNESS CENTER
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: "30px" }}></div>

            <div className="column3">
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon
                    icon={faTableTennisPaddleBall}
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
                    INDOOR GAMES
                  </div>
                </div>
              </div>

              <div style={{ width: "30px" }}></div>
              <div className="containerForIcons2">
                <div className="column2">
                  <FontAwesomeIcon icon={faSpa} className="email-icon2" />
                  <div style={{ height: "10px" }}></div>

                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#830c29",
                      fontWeight: "600",
                    }}
                  >
                    SPA ROOM
                  </div>
                </div>
              </div>
            </div>
            <div style={{ height: "30px" }}></div>
            <div className="column3">
              <div
                className="containerForIcons2"
                style={{ paddingTop: "34px" }}
              >
                <div className="column2">
                  <img
                    src="./cricket.svg"
                    className="email-icon2"
                    style={{ height: "40px" }}
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
                    CRICKET
                    <br /> NETBOX
                  </div>
                </div>
              </div>
              <div style={{ width: "30px" }}></div>
              <div
                className="containerForIcons2"
                style={{ paddingTop: "38px" }}
              >
                <div className="column2">
                  <img
                    src="./sit.svg"
                    className="email-icon2"
                    style={{ height: "45px" }}
                  />

                  <div
                    style={{
                      fontSize: "14px",
                      textAlign: "center",
                      color: "#830c29",
                      fontWeight: "600",
                    }}
                  >
                    YOGA
                    <br />
                    ROOM
                  </div>
                </div>
              </div>

            </div>
          </div>
          {/*  */}
        </div>
      </div>
      <div style={{ height: "40px" }}></div>

      <div className="rowForList">
        <div className="columnfortext">
          <div className="WhiteTextAM">1.SWIMMING POOL</div>
          <div className="WhiteTextAM"> 2.FITNESS CENTER</div>
          <div className="WhiteTextAM"> 3.GARDEN</div>
          <div className="WhiteTextAM"> 4.KIDS PLAY AREA</div>
        </div>

        <div className="columnfortext">
          <div className="WhiteTextAM"> 5.INDOOR GAMES</div>
          <div className="WhiteTextAM"> 6.PARTY ROOM</div>
          <div className="WhiteTextAM"> 7.CLUB HOUSE</div>
          <div className="WhiteTextAM"> 8.PLANTATION WITH SIT-OUTS</div>
        </div>
        <div className="columnfortext">
          <div className="WhiteTextAM"> 9.CRICKET PRACTICE NETBOX</div>
          <div className="WhiteTextAM"> 10.SPA ROOM</div>
          <div className="WhiteTextAM"> 11.MEDITATION ROOM</div>
          <div className="WhiteTextAM"> 12.CHANGING ROOM</div>
        </div>
        <div className="columnfortext">
          <div className="WhiteTextAM"> 13.WOODEN DECK SIT-OUTS</div>
          <div className="WhiteTextAM"> 14.SOCIETY OFFICE</div>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
    </div>
  );
}

export default Amenities;
