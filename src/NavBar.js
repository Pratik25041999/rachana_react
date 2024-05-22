import React, { useState } from "react";
// import './App.css'; // Import the CSS file for styling
import "./App.css";

const Navbar = ({ showView }) => {
	const [active, setActive] = useState(null);

	const handleClick = (index) => {
		setActive(index);
		showView(index);
	};

	return (
		<div className="ColumnView" style={{ position: "fixed" }}>
			<div className="navbar">
				<div className="logo">
					<img src="logo.png" style={{ height: "40px" }} alt="logo" />
				</div>
				<div className="menu">
					<div
						className={`menu-item ${active === "HOME" ? "active" : ""}`}
						onClick={() => handleClick("HOME")}
					>
						HOME
					</div>
					<div
						className={`menu-item ${active === "OVERVIEW" ? "active" : ""}`}
						onClick={() => handleClick("OVERVIEW")}
					>
						OVERVIEW
					</div>
					<div
						className={`menu-item ${active === "AMENITIES" ? "active" : ""}`}
						onClick={() => handleClick("AMENITIES")}
					>
						AMENITIES
					</div>
					<div
						className={`menu-item ${active === "PLANS" ? "active" : ""}`}
						onClick={() => handleClick("PLANS")}
					>
						PLANS
					</div>
					<div
						className={`menu-item ${active === "LOCATION" ? "active" : ""}`}
						onClick={() => handleClick("LOCATION")}
					>
						LOCATION
					</div>
					<div
						className={`menu-item ${active === "CONTACT US" ? "active" : ""}`}
						onClick={() => handleClick("CONTACT US")}
					>
						CONTACT US
					</div>
				</div>
				<img src="company_logo.png" style={{ height: "40px" }} alt="tailLogo" />
			</div>
			<div className="line_d"></div>
		</div>
	);
};

export default Navbar;
