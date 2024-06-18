import React from "react";
import "./OverView.css";

function OverView({ divFoc }) {
  return (
    <div className="MainColumnForOverView" ref={divFoc}>
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
          OverView
        </div>

        <div className="borderSideGolden"></div>
      </div>
      <div style={{ height: "30px" }}></div>

      <div className="OverViewPage">
      <div className="OverViewImage" style={{ marginTop: "30px" }}>
          <img className="imageOverView" src="night_view.jpeg" />
        </div>
        <div className="OverColumn">
        <div className="overViewSpace"/>

          <div className="rowTitle">
            <div className="borderSideGolden"></div>
            <div
              className="golden-text"
              style={{
                marginLeft: 15,
                marginRight: 15,
                fontSize: "24px",
              }}
            >
              Explore
            </div>
            <div style={{ height: "6px" }}></div>

            <div className="borderSideGolden"></div>
          </div>

          <div
            className="golden-text"
            style={{
              marginLeft: 15,
              marginRight: 15,
              fontSize: "20px",
            }}
          >
            A Lifestyle That Sets New Standards for Luxury
          </div>
          <div
            className="line_dd_overView"
            style={{ marginLeft: "32px", height: "0.8px" }}
          ></div>
          <div style={{ height: "24px" }}></div>
          <div className="WhiteText">PROJECT HALLMARKS</div>
          <div style={{ height: "20px" }}></div>

          <div className="WhiteText" style={{ marginBottom: "6px" }}>
            Cidco Tender Plot
          </div>
          <div className="WhiteText" style={{ marginBottom: "6px" }}>
            1 & 2 BHK Luxury Homes With Balconies
          </div>
          <div className="WhiteText" style={{ marginBottom: "6px" }}>
            2 Magnificent Towers Of 12 Storeys Each
          </div>
          <div className="WhiteText" style={{ marginBottom: "6px" }}>
            G+2 PODIUM LEVEL PARKING
          </div>
          <div className="WhiteText" style={{ marginBottom: "6px" }}>
            AMENITIES ON 3RD FLOOR
          </div>
          <div className="WhiteText" style={{ marginBottom: "6px" }}>
            Magnificent Podium Garden With Clubhouse,
          </div>
          <div className="WhiteText" style={{ marginBottom: "6px" }}>
            Pool And Other Lifestyle Facilities
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default OverView;
