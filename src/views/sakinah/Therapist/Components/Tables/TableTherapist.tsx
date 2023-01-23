import React, { useState } from "react";
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
import data from "../Data/DummyData";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import ActionUpcommingSession from "../ActionUpcomingSession";
import clientData from "../Data/ClientDetails";
import notesData from "../Data/NotesData";
import sessionData from "../Data/SessionsData";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

export default function TableTherapist() {
	return (
		<TableContainer component={Paper}>
			<Table aria-label="collapsible table">
				<TableHead style={{ backgroundColor: "#EBF5FF" }}>
					<TableRow>
						<TableCell />
						<TableCell>Date</TableCell>
						<TableCell align="left">Time</TableCell>
						<TableCell align="left">Name</TableCell>
						{/* <TableCell align="left">Session</TableCell> */}
						<TableCell align="left">Status</TableCell>
						<TableCell align="left">Action</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{sessionData.map((session) => (
						<TableTherapistRow session={session} />
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

const TableTherapistRow = ({ session }) => {
	const [open, setOpen] = useState(false);
	const [expandedRows, setExpandedRows] = useState([]);

	const handleRowClick = (userId) => {
		if (expandedRows.includes(userId)) {
			setExpandedRows(expandedRows.filter((id) => id !== userId));
		} else {
			setExpandedRows([...expandedRows, userId]);
		}
	};
	return (
		<React.Fragment key={session.user_id}>
			<TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
				<TableCell>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => (setOpen(!open), handleRowClick(session.user_id))}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</TableCell>
				<TableCell component="th" scope="row">
					<CalendarMonthOutlinedIcon style={{ color: "gray" }} />
					{session.date}
				</TableCell>
				<TableCell align="left">
					<ScheduleOutlinedIcon style={{ color: "gray" }} />
					{session.time}
				</TableCell>
				<TableCell align="left">{session.user_name}</TableCell>
				{/* <TableCell align="left">{row.sessionNumber}</TableCell> */}
				<TableCell align="left">{session.status[0]}</TableCell>
				<TableCell align="left">
					<ActionUpcommingSession />
				</TableCell>
			</TableRow>

			{expandedRows.includes(session.user_id) &&
				clientData
					.filter((client) => client.user_id === session.user_id)
					.map((client) => (
						<TableRow style={{ background: "#Ffffff", width: "100%" }}>
							<TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
								<Collapse in={open} timeout="auto" unmountOnExit>
									<Box sx={{ margin: 1 }}>
										<Typography variant="body2" component="div">
											Details
										</Typography>
										<Table size="small">
											<TableRow>
												<TableCell>
													<AlternateEmailIcon style={{ color: "gray" }}/>
													{client.email}
												</TableCell>
												<TableCell>
													<LocalPhoneOutlinedIcon style={{ color: "gray" }}/> {client.phone}
												</TableCell>
												<TableCell>
													<LocationOnOutlinedIcon style={{ color: "gray" }}/>
													{client.location}
												</TableCell>
											</TableRow>
										</Table>
										<Typography variant="body2" component="div">
											Tags
										</Typography>
										{client.tags.map((tag) => (
											<span className="text-sm font-semibold inline-block m-1 py-1 px-2 uppercase rounded text-sky-700 bg-sky-200 last:mr-0 mr-1">
												{tag}
											</span>
										))}
										<Typography variant="body2" component="div">
											Notes
										</Typography>
										<TableRow>
											{expandedRows.includes(session.user_id) &&
												notesData
													.filter((note) => note.user_id === session.user_id)
													.map((note) =>
														note.writtenBy === "user" ? (
															<div className="text-sm min-w-full  inline-block m-1 py-1 px-2  text-black bg-pink-50 last:mr-0 mr-1">
																<p> {note.note}</p>
																<div className="text-xs text-gray-700">
																	<p className="mt-2">Note from the client</p>
																	<p> {note.date}</p>
																</div>
															</div>
														) : (
															<div className="text-sm min-w-full  inline-block m-1 py-1 px-2  text-black bg-yellow-50 last:mr-0 mr-1">
																<p> {note.note}</p>
																<div className="text-xs text-gray-700">
																	<p className="mt-2">
																		Notes from the therapist : {note.nameTherapist}
																	</p>
																	<p> {note.date}</p>
																</div>
															</div>
														)
													)}
										</TableRow>
										<TableRow />
									</Box>
								</Collapse>
							</TableCell>
						</TableRow>
					))}
		</React.Fragment>
	);
};
