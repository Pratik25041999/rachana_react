import React from "react";
import "./NewHome.css";

function NewHome({ scrollRef }) {
  return (
    <div className="MainColumnForHome" ref={scrollRef}>
      <div style={{ height: "48px" }}></div>
      <div className="HomeRow">
        <img className="imageOverViewHome" src="main_pic.jpeg" />

        <div className="mainpage">
          <img
            src="lotus_1.png"
            style={{ height: "80px", marginBottom: "10px" }}
            alt="logo"
          />
          <div className="rowTitle">
            <div className="borderSideGolden" style={{ width: 100 }}></div>
            <div
              className="golden-text"
              style={{ marginLeft: 15, marginRight: 15, fontSize: 16 }}
            >
              INTRODUCING
            </div>

            <div className="borderSideGolden" style={{ width: 100 }}></div>
          </div>
          <img
            src="logo.png"
            style={{ height: "120px", marginBottom: "50px", marginTop: "50px" }}
            alt="logo"
          />
          <div className="golden-text" style={{}}>
            Unlock the Door to Your Dreams
          </div>
        </div>
      </div>
      <div style={{ height: "48px" }}></div>

    </div>
  );
}

export default NewHome;
