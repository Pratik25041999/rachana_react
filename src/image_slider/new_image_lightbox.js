import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
// const images = [
//   './drone_view_compressed.jpeg',
//   './1bhk.jpg',
//   './2bhk.jpg'
// ];

const ImageLightboxComponent = () => {
  const images = [
    { src: '/drone_view_compressed.jpeg', alt: 'Image 1' },
    { src: './1bhk.jpg', alt: 'Image 2' },
    { src: './2bhk.jpg', alt: 'Image 3' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img
          className="planImage"
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: '368px', height: '268px', margin: '20px', cursor: 'pointer' }}
            onClick={() => {
              setCurrentIndex(index);
              setIsOpen(true);
            }}
          />
        ))}
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
};

export default ImageLightboxComponent;
