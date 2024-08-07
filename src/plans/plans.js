import React from "react";
import "./plans.css";
import ImageCarousel from "../image_slider/image_slider_custom";
import { useState} from "react";
import ImageLightboxComponent from "../image_slider/new_image_lightbox";
import AutoPlayy2 from "./plansImageslider";



function Plans({ scrollRef , showImage }) {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

const openCarousel = () => {
  setIsCarouselOpen(true);
};

const closeCarousel = () => {
  setIsCarouselOpen(false);
};
  return (
    <div className="MainColumnForLocation" ref={scrollRef}>
      <div>
        <div style={{ height: "40px" }}></div>
        <div className="rowTitle">
      {isCarouselOpen && <ImageCarousel onClose={closeCarousel} />}
      <style>{`
        .open-carousel-button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
          <div className="borderSideGolden"></div>
          <div
            className="golden-text-title"
            style={{
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            Plans
          </div>

          <div className="borderSideGolden"></div>
        </div>
        <div style={{ height: "16px" }}></div>
        <div className="column2">
          <div
            className="golden-text-explore"
            style={{
              marginLeft: 15,
              marginRight: 15,
            }}
          >
            A Lifestyle That Sets New Standards for Luxury
          </div>
          <div
            className="line_dd"
            style={{ width: "490px", height: "0.8px" }}
          ></div>
        </div>
        <div style={{ height: "40px" }}></div>
      </div>

      {/* <div className="imageRow">
        <img
          className="planImage"
          src="./drone_view_compressed.jpeg"
          alt="droneView"
          onClick={openCarousel}
          />
        <div style={{ width: "40px" }}></div>
        <img className="planImage" src="./1bhk.jpg" alt="1bhk" 
          onClick={openCarousel}
          />
        <div style={{ width: "40px" }}></div>
        <img className="planImage" src="./2bhk.jpg" alt="2bhk" 
          onClick={openCarousel}
        />
      </div> */}
    {/* <ImageLightboxComponent/> */}
      {/* <div style={{ height: "40px" }}></div> */}
<AutoPlayy2/>

    </div>
    
  );
}

export default Plans;
