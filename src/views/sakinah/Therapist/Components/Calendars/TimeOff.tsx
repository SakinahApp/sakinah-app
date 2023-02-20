import React, { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { StaticDateRangePicker } from "@mui/x-date-pickers/StaticDateRangePicker";
import { Box, Button } from "@mui/material";
import "./Styles2.css";
import sessionData from "../Data/SessionsData";

export default function TimeOff({ therapist, visibility, setVisibility }) {
	const [selectedDates, setSelectedDates] = useState([]);
	const [conflictingDates, setConflictingDates] = useState([]);
	const [selectedOption, setSelectedOption] = useState("");

	const handleAdd = (newValue) => {
		console.log("newValue :>> ", dayjs(newValue));
		const isSelected = selectedDates.some((selectedDate) =>
			dayjs(selectedDate).isSame(newValue, "day")
		);
		setSelectedDates(
			isSelected
				? selectedDates.filter(
						(selectedDate) => !dayjs(selectedDate).isSame(newValue, "day")
				  )
				: [...selectedDates, newValue]
		);
	};

	const conflictMessage = selectedDates.some((selectedDate) => {
		sessionData.some((session) => {
			const sessionDate = dayjs(session.start_time);
			dayjs(selectedDate).isSame(sessionDate, "day") &&
				conflictingDates.push({
					date: `${selectedDate.format("DD MMMM YYYY, hh:mm")}`,
					user_name: `${session.user_name}`,
				});
		});
	});

	const handleOptionChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const handleReset = () => {
		setSelectedDates([]);
		setConflictingDates([]);
	};

	return (
		<Box>
			{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
				<StaticDatePicker
					displayStaticWrapperAs="desktop"
					value={selectedDates}
					onChange={(newValue) => {
						handleAdd(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider> */}

			{/* <LocalizationProvider dateAdapter={AdapterDayjs}>
				<StaticDateRangePicker
					displayStaticWrapperAs="desktop"
					value={selectedDates}
					onChange={(newValue) => {
						handleAdd(newValue);
					}}
					renderInput={(startProps, endProps) => (
						<React.Fragment>
							<TextField {...startProps} />
							<Box sx={{ mx: 2 }}> to </Box>
							<TextField {...endProps} />
						</React.Fragment>
					)}
				/>
			</LocalizationProvider> */}

			<Box
				style={{
					padding: "0px 20px",
					display: "flex",
					justifyContent: "center",
					flexWrap: "wrap",
					margin: 0,
					marginTop: "-25px",
				}}
			></Box>
			<Box>
				<Box
					style={{
						width: "100%",
						background: "rgb(245, 245, 245)",
						padding: "10px 0px",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						flexDirection: "column",
						margin: "20px auto 10px",
						maxWidth: 270,
						fontSize: 14,
						borderRadius: "6px",
					}}
				>
					Selected Days Off
				</Box>

				<Box>
					{selectedDates.map((days) => (
						<li className="list-none text-center" key={days}>
							{dayjs(days).format("DD MMMM YYYY")}
						</li>
					))}
					{conflictingDates.length > 0 && (
						<>
							<div>
								<p className="text-red-700">We've spotted conflicts on these dates:</p>

								{conflictingDates
									.sort((a, b) => a.date.valueOf() - b.date.valueOf())
									.map((conflict, index) => (
										<li key={index}>
											{conflict.date} - {conflict.user_name}
										</li>
									))}
							</div>
							<br />
							<p className="text-red-700">How do you want to proceed?</p>
							<input
								type="radio"
								value="reschedule"
								checked={selectedOption === "reschedule"}
								onChange={handleOptionChange}
							/>
							Request to reschedule
							<br />
							<input
								type="radio"
								value="block all day"
								checked={selectedOption === "block all day"}
								onChange={handleOptionChange}
							/>
							Block all day but keep the session
						</>
					)}
					<div className="flex justify-between mx-5">
						<button className="mt-5 btn-secondary" onClick={handleReset}>
							Reset
						</button>
						<button className="mt-5 btn-primary">Save Changes</button>
					</div>
				</Box>
			</Box>
		</Box>
	);
}

// .some is a JavaScript array method that tests whether at least one element in the array passes the test implemented by the provided function. In this case, the provided function checks if the selectedDate is the same as the newValue passed to the function.
// .isSame is a method provided by the dayjs library to check if two dates are the same. The first argument is the date to compare, and the second argument specifies the unit of time to compare, which in this case is "day".
// By putting "day" at the end, it makes sure that only the date part of the date is considered for comparison, instead of the time as well. So, it returns true if both dates are the same day, regardless of the time.

// The selectedDates array is looped through with .some method, and for each selected date, it loops through the sessionData array with another .some method. For each session, it extracts the start_time property, converts it to a dayjs object, and compares it with the selected date using dayjs(selectedDate).isSame(sessionDate, "day"). If there's a match, .some returns true, which would cause the outer .some to also return true. If none of the sessions match, .some returns false.
