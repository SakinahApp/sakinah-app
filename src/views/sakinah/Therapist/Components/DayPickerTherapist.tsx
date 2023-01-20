import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Box, Button } from "@mui/material";
import "./Style.css";

const isWeekend = (date: Dayjs) => {
	const day = date.day();
	return day === 0 || day === 6;
};

export default function DayPickerT({ therapist, visibility, setVisibility }) {
	const [value, setValue] = React.useState<Dayjs | null>(dayjs("2022-12-07"));
	const [time, setTime] = React.useState("11:00-12:00");

	const date = dayjs(value).format("LL");
	const day = dayjs(value).date();
	const month = dayjs(value).month();
	const year = dayjs().year();

	return (
		<Box sx={{}}>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<StaticDatePicker
					displayStaticWrapperAs="desktop"
					shouldDisableDate={isWeekend}
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
					<p>{date}</p>
				</Box>

				{calendarData.map((item) => (
					<div className="grid grid-cols-2	text-left w-64 m-auto cursor-pointer">
						<p className="text-left">{item.time}</p>
						<p className="text-left">{item.name}</p>
					</div>
				))}
			</Box>
		</Box>
	);
}

const calendarData = [
	{
		time: "09:00 - 10:00",
		name: "Mohammed Salah",
	},
	{
		time: "10:00 - 11:00",
		name: "Paul Pogba",
	},
	{
		time: "11:00 - 12:00",
		name: "Kamila Ahmed",
	},
	{
		time: "12:00 - 13:00",
		name: "Khalid ibn Walid",
	},
	{
		time: "13:00 - 14:00",
		name: "Abdul Kareem",
	},
	{
		time: "15:00 - 16:00",
		name: "Salama Ahmad",
	},
	{
		time: "16:00 - 17:00",
		name: "Mehmed Ahmed",
	},
];
