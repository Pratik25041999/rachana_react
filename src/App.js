import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ContactUsModal from "./test/ContactUsModal";
import Navbar from "./NavBar";
import { useState, useRef,useEffect } from "react";
import OverView from "./overview/OverView";
import ContactUs from "./contactUs/ContactUs";
import Plans from "./plans/plans";
import SiteLocation from "./location/location";
import Amenities from "./amenities/amenities";
import NewHome from "./home/NewHome";
import DisplayModal from "./DisplayModal/DisplayModal"
import ImageCarousel from "./image_slider/image_slider_custom";
import ContactForm from "./contactussss";
import ImageLightboxComponent from "./image_slider/new_image_lightbox";

// import MainPage from "./MainPage";

function App() {
  const [contactModalShow, setContactModalShow] = useState(false);
  const [displayModalShow, setDisplayModalShow] = useState(false);
  const [startIndex, setStartIndex] = useState(0)
  const homeRef = useRef(null);
  const overviewRef = useRef(null);
  const amenitiesRef = useRef(null);
  const SiteLocationRef = useRef(null);
  const PlansRef = useRef(null);
  const ContactUsRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setContactModalShow(true);
    }, 5000);
  }, []);

  const scrollToView = (elementPosition) => {
    const headerOffset = 69;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const showView = (view) => {
    let elementPosition = 0;
    switch (view) {
      case "HOME": {
        elementPosition = homeRef.current?.getBoundingClientRect().top;
        break;
      }
      case "OVERVIEW": {
        elementPosition = overviewRef.current?.getBoundingClientRect().top;
        break;
      }
      case "AMENITIES": {
        elementPosition = amenitiesRef.current?.getBoundingClientRect().top;
        break;
      }
      case "PLANS": {
        elementPosition = PlansRef.current?.getBoundingClientRect().top;
        break;
      }
      case "LOCATION": {
        elementPosition = SiteLocationRef.current?.getBoundingClientRect().top;
        break;
      }
      case "CONTACT US": {
        elementPosition = ContactUsRef.current?.getBoundingClientRect().top;
        break;
      }

      default:
        return;
    }

    scrollToView(elementPosition);
  };

  const onHide = () => setContactModalShow(false);
  const hideDisplayModal= () => setDisplayModalShow(false)
  const selectImage = (index) => {
    setStartIndex(index)
    setDisplayModalShow(true)
  }
  return (
    <div className="App">
      <Navbar showView={showView} />
      <div className="mainColum">
        <div style={{ height: "69px" }}></div>
        {/* <MainPage /> */}
        <NewHome scrollRef={homeRef} />
        <button className="vertical-button">
      Click Me
    </button>
  
        <OverView divFoc={overviewRef} />
        <Amenities scrollRef={amenitiesRef} />
        <Plans scrollRef={PlansRef} showImage={selectImage} />
        <SiteLocation scrollRef={SiteLocationRef} />
        <ContactUs scrollRef={ContactUsRef} />
    {/* <ContactForm/> */}
    <ImageLightboxComponent/>
        <ContactUsModal show={contactModalShow} onHide={onHide} />
        <DisplayModal show={displayModalShow} onHide={hideDisplayModal} startIndex={startIndex} />
      </div>
    </div>
  );
}

export default App;
