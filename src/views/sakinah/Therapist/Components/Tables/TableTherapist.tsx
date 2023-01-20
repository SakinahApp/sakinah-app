import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import NoUpcomingSession from "../../../User/Components/NoUpcomingSession";
import ActionUpcommingSession from "../ActionUpcomingSession";
import data from "../Data/DummyData";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

function Row(props) {
	const { row } = props;
	const [open, setOpen] = React.useState(false);

	return (
		<React.Fragment>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					{/* Need to iterate over the full list of object that's inside the array, not just the 1st object */}
					<CalendarMonthOutlinedIcon style={{ color: "inherit" }} />{" "}
					{row.upcommingSessions[0]["date"]}
				</TableCell>
				<TableCell align="left">{row.name}</TableCell>
				<TableCell align="left">
					<ScheduleOutlinedIcon style={{ color: "inherit" }} />
					{row.upcommingSessions[0]["time"]}
				</TableCell>
				<TableCell align="left">{row.sessionNumber}</TableCell>
				<TableCell align="left">{row.upcommingSessions[0]["status"][0]}</TableCell>
				<TableCell align="left">
					<ActionUpcommingSession />
				</TableCell>
			</TableRow>

			<TableRow style={{ background: "#Ffffff", width: "100%" }}>
				<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
					<Collapse in={open} timeout="auto" unmountOnExit>
						<Box sx={{ margin: 1 }}>
							<Typography variant="body2" component="div">
								Details
							</Typography>
							<Table size="small">
								<TableRow>
									<TableCell>{row.phone}</TableCell>
									<TableCell>{row.email}</TableCell>
									<TableCell>{row.location}</TableCell>
								</TableRow>
							</Table>

							<Typography variant="body2" component="div">
								Tags
							</Typography>

							<TableRow>
								{row.tags.map((tag) => (
									<span className="text-sm font-semibold inline-block m-1 py-1 px-2 uppercase rounded text-sky-700 bg-sky-200 last:mr-0 mr-1">
										{" "}
										{tag}
									</span>
								))}
							</TableRow>
							<Typography variant="body2" component="div">
								Notes
							</Typography>
							<TableRow>
								{row.notes.map((tag) => (
									<div className="text-sm min-w-full  inline-block m-1 py-1 px-2  rounded text-black bg-yellow-50 last:mr-0 mr-1">
										<p> {tag.note}</p>
										<div className="text-xs text-gray-700">
											<p> {tag.nameTherapist}</p>
											<p> {tag.date}</p>
										</div>
									</div>
								))}
							</TableRow>
							{/* Can be separate component Client Upcoming sessions */}
							<Typography variant="body2" component="div">
								Upcoming sessions
							</Typography>

							<Table size="small">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>Time</TableCell>
										<TableCell>Status</TableCell>
										<TableCell>Action</TableCell>
									</TableRow>
								</TableHead>
								{row.upcommingSessions.map((item) => (
									<TableRow>
										<TableCell>
											{" "}
											<CalendarMonthOutlinedIcon style={{ color: "inherit" }} />
											{item.date}
										</TableCell>
										<TableCell>
											<ScheduleOutlinedIcon style={{ color: "inherit" }} />

											{item.time}
										</TableCell>
										<TableCell>{item.status[1]}</TableCell>
										<TableCell>
											<ActionUpcommingSession />
										</TableCell>
									</TableRow>
								))}
								{/* Can be separate component Client Upcoming sessions */}
							</Table>

							<Typography variant="body2" component="div">
								Past sessions
							</Typography>
							<Table size="small">
								<TableHead>
									<TableRow>
										<TableCell>Date</TableCell>
										<TableCell>Time</TableCell>
										<TableCell>Status</TableCell>
										<TableCell>Action</TableCell>
									</TableRow>
								</TableHead>
								{row.pastSessions.map((item) => (
									<TableRow>
										<TableCell>
											<CalendarMonthOutlinedIcon style={{ color: "inherit" }} />
											{item.date}
										</TableCell>
										<TableCell>
											<ScheduleOutlinedIcon style={{ color: "inherit" }} />
											{item.time}
										</TableCell>
										<TableCell>{item.status[0]}</TableCell>
										<TableCell>
											<ActionUpcommingSession />
										</TableCell>
									</TableRow>
								))}
							</Table>
						</Box>
					</Collapse>
				</TableCell>
			</TableRow>
		</React.Fragment>
	);
}

export default function TableTherapist() {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead style={{ backgroundColor: "#EBF5FF" }}>
					<TableRow>
						<TableCell />
						<TableCell>Date</TableCell>
						<TableCell align="left">Name</TableCell>
						<TableCell align="left">Time</TableCell>
						<TableCell align="left">Session</TableCell>
						<TableCell align="left">Status</TableCell>
						<TableCell align="left">Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{data.map((item) => (
						<Row key={item.name} row={item} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
