import React from "react";
import ActionUpcommingSession from "../ActionUpcomingSession";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

const TableSales = ({ tableHead, data }) => {
	return (
		<div>
			<div className="shadow-md rounded-lg">
				<table className="w-full text-sm text-left text-gray-500 ">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
						<tr>
							{tableHead.map((title) => (
								<th scope="col" className="px-6 py-3">
									{title}
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
						{data[0].upcommingSessions.map((item) => (
							<tr>
								<td className="px-6 py-4">
									<CalendarMonthOutlinedIcon style={{ color: "inherit" }} />
									{item.date}
								</td>
								<td className="px-6 py-4">
									<ScheduleOutlinedIcon style={{ color: "inherit" }} />
									{item.time}
								</td>
								<td className="px-6 py-4">{item.status[0]}</td>
								<td className="px-6 py-4">£ {item.paid}</td>
								<td className="px-6 py-4">
									<ActionUpcommingSession />
								</td>
							</tr>
						))}

						<tr>
							{" "}
							<h2 className="text-lg font-semibold pl-5">Past Sessions </h2>
						</tr>
						{data[0].pastSessions.map((item) => (
							<tr>
								<td className="px-6 py-4">
									<CalendarMonthOutlinedIcon style={{ color: "inherit" }} />
									{item.date}
								</td>
								<td className="px-6 py-4">
									<ScheduleOutlinedIcon style={{ color: "inherit" }} />
									{item.time}
								</td>
								<td className="px-6 py-4">{item.status[0]}</td>
								<td className="px-6 py-4">£ {item.paid}</td>

								<td className="px-6 py-4 ">
									<ActionUpcommingSession />
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default TableSales;
