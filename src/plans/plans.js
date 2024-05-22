import React from "react";
import "./plans.css";

function Plans({ scrollRef }) {
	return (
		<div className="MainColumnForLocation" ref={scrollRef}>
			<div>
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
						Plans
					</div>

					<div className="borderSideGolden"></div>
				</div>
				<div style={{ height: "16px" }}></div>
				<div className="column2">
					<div
						className="golden-text"
						style={{
							marginLeft: 15,
							marginRight: 15,
							fontSize: "20px",
							textAlign: "center",
						}}
					>
						"A Lifestyle That Sets New Standards for Luxury
					</div>
					<div className="line_dd" style={{ width: "490px", height: "0.8px" }}></div>
				</div>
				{/* <div style={{ height: "40px" }}></div> */}
			</div>

			<div className="imageRow">
				<img className="planImage" src="./drone_view_compressed.jpeg" alt="droneView" />
				<div style={{ width: "40px" }}></div>
				<img className="planImage" src="./1bhk.jpg" alt="1bhk" />
				<div style={{ width: "40px" }}></div>
				<img className="planImage" src="./2bhk.jpg" alt="2bhk" />
			</div>
			<div style={{ height: "40px" }}></div>
		</div>
	);
}

export default Plans;
