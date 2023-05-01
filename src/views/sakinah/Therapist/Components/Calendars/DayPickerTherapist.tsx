import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, Button } from "@mui/material";
import "./Style.css";
import sessionData from "../Data/SessionsData";
import isBetween from "dayjs/plugin/isBetween";

const isWeekend = (date: Dayjs) => {
	const day = date.day();
	return day === 0 || day === 6;
};

export default function DayPickerT({ therapist, visibility, setVisibility }) {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs());

	const date = dayjs(value);
	dayjs.extend(isBetween);

	return (
		<Box sx={{}}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<StaticDatePicker
					displayStaticWrapperAs="desktop"
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/>
			</LocalizationProvider>
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
					<p style={{ fontWeight: 600 }}>Chosen Date</p>
					<p>{date.format("LL")}</p>
				</Box>

				{sessionData.map(
					(session) =>
						dayjs(session.start_time).format("LL") === date.format("LL") &&
						(dayjs().isBetween(
							dayjs(session.start_time).utc(),
							dayjs(session.end_time).utc()
						) ? (
							<div className="grid grid-cols-2	text-left w-64 m-auto cursor-pointer animate-pulse	">
								<p className="text-left text-green-700">
									{dayjs(session.start_time).utc().format("HH:mm")} -{" "}
									{dayjs(session.end_time).utc().format("HH:mm")}
								</p>
								<p className="text-left text-green-700">{session.user_name}</p>
							</div>
						) : (
							<div className="grid grid-cols-2	text-left w-64 m-auto cursor-pointer">
								<p className="text-left">
									{dayjs(session.start_time).utc().format("HH:mm")} -{" "}
									{dayjs(session.end_time).utc().format("HH:mm")}
								</p>
								<p className="text-left">{session.user_name}</p>
							</div>
						))
				)}
			</Box>
		</Box>
	);
}
