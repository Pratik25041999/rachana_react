import React, { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import {
	FaSearchPlus,
	FaSearchMinus,
	FaPlay,
	FaPause,
	FaTimes,
	FaChevronLeft,
	FaChevronRight,
} from "react-icons/fa";
import { BiReset } from "react-icons/bi";
import "./image_slider_custom.css";
import Draggable from "react-draggable";

const images = [
	{ src: "./drone_view_compressed.jpeg", alt: "Image 1" },
	{ src: "/1bhk.jpg", alt: "Image 2" },
	{ src: "./2bhk.jpg", alt: "Image 3" },
];
const ImageCarousel = ({ onClose }) => {
	const [zoom, setZoom] = useState(1);
	const [isSlideshowActive, setIsSlideshowActive] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [reset, setReset] = useState(false);

	const handleZoomReset = () => {
		setReset(true);
		setZoom(1)
		setTimeout(() => {
			setReset(false);
		}, 10);
	};
	const handleZoomIn = () => setZoom(zoom + 0.1);

	const handleZoomOut = () => zoom > 1 && setZoom(zoom - 0.1);

	const toggleSlideshow = () => {
		setIsSlideshowActive(!isSlideshowActive);
	};

	useEffect(() => {
		let interval;
		if (isSlideshowActive) {
			interval = setInterval(() => {
				setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
			}, 2000);
		}
		return () => clearInterval(interval);
	}, [isSlideshowActive]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
	};

	return (
		<div className="carousel-container">
			<div className="app-bar">
				<button onClick={handleZoomIn}>
					<FaSearchPlus />
				</button>
				<button onClick={handleZoomOut}>
					<FaSearchMinus />
				</button>
				<button onClick={handleZoomReset}>
					<BiReset />
				</button>
				<button onClick={toggleSlideshow}>{isSlideshowActive ? <FaPause /> : <FaPlay />}</button>
				<button onClick={onClose}>
					<FaTimes />
				</button>
			</div>
			<div className="slider-wrapper">
				<AwesomeSlider
					selected={currentIndex}
					className="aws-btn"
					organicArrows={false}
					style={{ transform: `scale(${zoom})` }}
				>
					{images.map((image, index) => (
						<div key={index}>
							{!reset && (
								<Draggable>
									<img id="checkThis" src={image.src} alt={`img_${index}`} />
								</Draggable>
							)}
						</div>
					))}
				</AwesomeSlider>
				<div className="arrows">
					<button onClick={prevSlide}>
						<FaChevronLeft />
					</button>
					<button onClick={nextSlide}>
						<FaChevronRight />
					</button>
				</div>
			</div>
			<div className="footer">
				{currentIndex + 1} / {images.length}
			</div>
			<style>{`
        .carousel-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background-color: rgba(0, 0, 0, 0.8);
          z-index: 1000;
        }
        .app-bar {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.9);
          position: fixed;
          top: 0;
          z-index: 1001;
        }
        .app-bar button {
          background: none;
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
          font-size: 18px;
        }
        .slider-wrapper {
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin: 60px auto 40px; /* to ensure it doesn't overlap with app bar */
					width: 840px;
					overflow: hidden;

        }
        .aws-btn {
          width: 80%;
          height: 100%;
        }
        .awssld__bullets,
        .awssld__next,
        .awssld__prev {
          display: none;
        }
        .arrows {
          position: absolute;
          width: 100%;
          top: 50%;
          display: flex;
          justify-content: space-between;
          transform: translateY(-50%);
        }
        .arrows button {
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          padding: 10px;
          cursor: pointer;
        }
        .footer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.9);
          color: white;
          font-size: 18px;
          position: fixed;
          bottom: 0;
          z-index: 1001;
        }
      `}</style>
		</div>
	);
};

export default ImageCarousel;
