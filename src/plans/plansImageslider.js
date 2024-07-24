// ImageSlider.js
import React, { useState } from 'react';
import Slider from 'react-slick';
import "./plans.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
}

const AutoPlayy2 = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots:true,
          
        }
      },
     
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const images = [
    { src: '/drone_view_compressed.jpeg', alt: 'Image 1' },
    { src: './1bhk.jpg', alt: 'Image 2' },
    { src: './2bhk.jpg', alt: 'Image 3' },
  ];

  return (
    <div className='ImageAutoSliderNew' style={{
      marginLeft:"20px",
      marginRight:"20px",
     
    }}>
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img   onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }} className="planImage" src={image.src} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
    {isOpen && (
        <Lightbox
          open={isOpen}
          plugins={[Zoom,Fullscreen,Slideshow]}
          close={() => setIsOpen(false)}
          slides={images.map((image) => ({ src: image.src, alt: image.alt }))}
          index={currentIndex}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}

export default AutoPlayy2;

