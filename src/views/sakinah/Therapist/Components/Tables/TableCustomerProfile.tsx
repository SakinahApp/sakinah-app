import React from "react";
import ActionUpcommingSession from "../ActionUpcomingSession";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import clientData from "../Data/ClientDetails";
import notesData from "../Data/NotesData";
import sessionData from "../Data/SessionsData";

const TableCustomerProfile = ({ tableHead, client }) => {
	return (
		<div>
			<div className="shadow-md rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							{tableHead.map((title) => (
								<th scope="col" className="px-6 py-3">
									{title}
									{console.log("title :>> ", title)}
								</th>
							))}
						</tr>
					</thead>

					<tbody>
						<tr>
							{" "}
							<h2 className="text-lg font-semibold pl-5">Upcomming Sessions</h2>
						</tr>
						{/* <tr className="bg-white border-b  "> */}
						{sessionData
							.filter((session) => session.user_id === client.user_id)
							.map((session) => (
								<tr>
									<td className="px-6 py-4">
										<CalendarMonthOutlinedIcon style={{ color: "inherit" }} />
										{session.date}
									</td>
									<td className="px-6 py-4">
										<ScheduleOutlinedIcon style={{ color: "inherit" }} />
										{session.time}
									</td>
									<td className="px-6 py-4">Paid</td>
									<td className="px-6 py-4">£ 65</td>
									<td className="px-6 py-4">
										<ActionUpcommingSession />
									</td>
								</tr>
							))}
						<tr>
							{" "}
							<h2 className="text-lg font-semibold pl-5">Past Sessions </h2>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableCustomerProfile;
