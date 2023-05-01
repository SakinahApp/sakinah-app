import { Box, Button } from "@mui/material";
import React from "react";
import DayPickerTherapist from "./DayPickerTherapist";
import TimeOff from "./TimeOff";

function CalendarTimeOff({ therapist }) {
	const [visibility, setVisibility] = React.useState("none");

	return (
		<>
			<div
				style={{
					padding: "20px 10px",
					boxShadow:
						"rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px",
					flex: 1,
					margin: 5,
					borderRadius: 23,
					color: "grey",
					height: "100%",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					flexDirection: "column",
				}}
			>
				<Box
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						width: "98%",
					}}
				>
					<h3
						style={{
							fontSize: "17px",
							fontWeight: 600,
							color: "rgb(50, 51, 49)",
						}}
					>
						Select times off (i.e. holidays)
					</h3>
					<TimeOff
						therapist={therapist}
						visibility={visibility}
						setVisibility={setVisibility}
					/>
				</Box>
			</div>
		</>
	);
}

export default CalendarTimeOff;
