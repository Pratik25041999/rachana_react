import "./image_slider_custom.css";
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearchPlus, FaSearchMinus, FaPlay, FaExpand } from 'react-icons/fa';

const images = [
    { src: './drone_view_compressed.jpeg', alt: 'Image 1', },
    { src: '/1bhk.jpg', alt: 'Image 2' },
 'Image 3',]
function ImageViewer() {
    const history = useHistory();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [zoom, setZoom] = useState(1);
  
    const handleZoomIn = () => setZoom(zoom + 0.1);
    const handleZoomOut = () => setZoom(zoom - 0.1);
  
    const handleNext = () => setCurrentIndex((currentIndex + 1) % images.length);
    const handlePrev = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  
    const handleFullscreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        document.documentElement.requestFullscreen();
      }
    };
  
    return (
      <div className="image-viewer">
        <div className="app-bar">
          <button onClick={handleZoomIn}><FaSearchPlus /></button>
          <button onClick={handleZoomOut}><FaSearchMinus /></button>
          <button onClick={handleNext}><FaPlay /></button>
          <button onClick={handleFullscreen}><FaExpand /></button>
        </div>
        <div className="image-container" style={{ transform: `scale(${zoom})` }}>
          <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        </div>
        <div className="footer">
          <p>{`Image ${currentIndex + 1} of ${images.length}`}</p>
        </div>
      </div>
    );
  }
  
  export default ImageViewer;