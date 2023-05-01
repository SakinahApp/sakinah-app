import React from "react";
import data from "../Data/DummyData";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
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
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PhoneIcon from "@mui/icons-material/Phone";

function Row(props) {
	const { item } = props;
	const [open, setOpen] = useState(false);
	return (
		<>
			<tr className="border-t border-neutral-300 text-center">
				<td>
					<IconButton
						aria-label="expand row"
						size="small"
						onClick={() => setOpen(!open)}
					>
						{open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					</IconButton>
				</td>
				<td>
					<CalendarMonthOutlinedIcon style={{ color: "inherit" }} />{" "}
					{item.upcommingSessions[0]["date"]}
				</td>
				<td>
					<ScheduleOutlinedIcon style={{ color: "inherit" }} />
					{item.upcommingSessions[0]["time"]}
				</td>
				<td>{item.name}</td>
				<td>{item.sessionNumber}</td>
				<td>{item.upcommingSessions[0]["status"][0]}</td>
				<td>
					<ActionUpcommingSession />
				</td>
			</tr>
			{open && (
				<div className="text-sm min-w-full  inline-block m-1 py-1 px-2  rounded text-black bg-yellow-50 last:mr-0 mr-1">
					<span className="px-6 py-3">
						<PhoneIcon />
						{item.phone}
					</span>
					<span className="px-6 py-3">{item.email}</span>
					<span className="px-6 py-3">{item.location}</span>
				</div>
			)}
		</>
	);
}

const TableExpandable = () => {
	return (
		<div>
			<table>
				<thead className="w-full text-sm text-left text-gray-500 ">
					<tr className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<th className="px-6 py-3"></th>
						<th className="px-6 py-3">Date</th>
						<th className="px-6 py-3">Time</th>
						<th className="px-6 py-3">Name</th>
						<th className="px-6 py-3">Session</th>
						<th className="px-6 py-3">Status</th>
						<th className="px-6 py-3">Action</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<Row key={item.name} item={item} />
					))}
				</tbody>
			</table>
		</div>
	);
};
export default TableExpandable;
