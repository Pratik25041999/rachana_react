import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import BasicExample from "./test";
import ContactUsModal from "./test/ContactUsModal";
import Navbar from "./NavBar";
import { useState, useEffect, useRef, forwardRef } from "react";
import MainPage from "./MainPage";
import OverView from "./overview/OverView";
import ContactUs from "./contactUs/ContactUs";
import Plans from "./plans/plans";
import SiteLocation from "./location/location";
import Amenities from "./amenities/amenities";
// import MainPage from "./MainPage";

function App() {
  const [contactModalShow, setCOntactModalShow] = useState(false);
  const overviewRef = useRef(null);
  const OverViewComp = forwardRef(OverView);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCOntactModalShow(true);
  //   }, 5000);
  // }, []);

  const showView = (index) => {
    console.log(index);
    if (index === 1) {
      console.log("Scroll");
      console.log(overviewRef.current);
      overviewRef.current?.scrollIntoView({ behaviour: "smooth" });
      // OverViewComp.current?.scrollIntoView();
    }
  };

  const onHide = () => setCOntactModalShow(false);
  return (
    <div className="App">
      <Navbar showView={showView} />
      <div className="mainColum">
        <div style={{ height: "69px" }}></div>
        <div className="container_home">
          <div>
            <img className="LandingImage" src="main_pic.jpeg" />
          </div>
        </div>
        {/* <MainPage /> */}
        <OverView divFoc={overviewRef} />
        {/* <div ref={overviewRef}></div> */}
        <Amenities />
        <OverViewComp />
        <Plans />
        <SiteLocation />
        <ContactUs />
        <ContactUsModal show={contactModalShow} onHide={onHide} />
      </div>
    </div>
  );
}

export default App;
