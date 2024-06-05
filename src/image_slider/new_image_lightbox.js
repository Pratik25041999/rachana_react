import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

const ImageLightboxComponent = () => {
  const images = [
    './drone_view_compressed.jpeg',
    './1bhk.jpg',
    './2bhk.jpg'
  ];

 
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleOpenLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
    setIsLoading(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {images.map((image, index) => (
          <img
           className='NewImagesCollections'

            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            style={{ width: '368px', height: '268px', margin: '20px', cursor: 'pointer' }}
            onClick={() => handleOpenLightbox(index)}
          />
        ))}
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => {
            setIsLoading(true);
            setPhotoIndex((photoIndex + images.length - 1) % images.length);
          }}
          onMoveNextRequest={() => {
            setIsLoading(true);
            setPhotoIndex((photoIndex + 1) % images.length);
          }}
          onImageLoad={handleImageLoad}
          imageLoadErrorMessage={isLoading ? "Loading..." : "Error loading image"}
        />
      )}
    </div>
  );
};

export default ImageLightboxComponent;