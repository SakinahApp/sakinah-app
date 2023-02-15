import React, { useState, useEffect } from "react";
import { IconButton } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ActionUpcommingSession from "./ActionUpcomingSession";
import sessionData from "./Data/SessionsData";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import isTomorrow from "dayjs/plugin/isTomorrow";
import TimerOutlinedIcon from "@mui/icons-material/TimerOutlined";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import isBetween from "dayjs/plugin/isBetween";
import relativeTime from "dayjs/plugin/relativeTime";

const UpcomingSessionTherapist = () => {
	const [nextSession, setNextSession] = useState(null);
	dayjs.extend(isToday);
	dayjs.extend(isTomorrow);
	dayjs.extend(isBetween);
	dayjs.extend(relativeTime);

	useEffect(() => {
		const findNextSession = () => {
			for (let i = 0; i < sessionData.length; i++) {
				const startTime = dayjs(sessionData[i].start_time).utc();
				const endTime = dayjs(sessionData[i].end_time).utc();
				const patient = sessionData[i].user_name;
				console.log("startTime", startTime);
				console.log("endTime", endTime);
				if (dayjs().utc().isBefore(endTime)) {
					setNextSession({
						startTime: startTime.utc().format("HH:mm"),
						endTime: endTime.utc().format("HH:mm"),
						date: startTime.utc().format("DD MMM YYYY"),
						countdown: startTime.utc().fromNow(),
						patient: patient,
					});
					break;
				}
			}
		};
		findNextSession();
	}, [sessionData]);

	return (
		<div>
			{" "}
			<div
				style={{
					boxShadow:
						"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
					padding: "20px 20px 30px",
					flex: 2,
					margin: 10,
					borderRadius: 8,
					color: "white",
					maxHeight: 270,
					display: "flex",
					justifyContent: "space-between",
					flexDirection: "column",
					position: "relative",
					background: "rgb(95 106 196 / 5%)",
				}}
			>
				<div
					style={{
						display: "flex",
						justifyContent: "space-between",
						flexDirection: "row",
						height: "100%",
						padding: 10,
					}}
				>
					<IconButton
						// onClick={() => (removeSessions(), setOpen(true))}
						style={{
							position: "absolute",
							top: 10,
							right: 10,
							color: "#aaaaaa",
						}}
					>
						<ActionUpcommingSession />
					</IconButton>
					<div className="">
						<h3
							style={{
								color: "#5f6ac4",
								fontWeight: 600,
								fontSize: 20,
								padding: 0,
								marginBottom: 5,
							}}
						>
							Your Next Session!
						</h3>

						<p
							style={{
								color: "rgb(50, 51, 49)",
								fontSize: "30px",
								fontWeight: 600,
								marginBottom: 5,
							}}
						>
							{nextSession ? (
								// @ts-ignore
								<div className="flex flex-col my-2">
									{dayjs(nextSession.date).isToday() &&
									dayjs().isBefore(nextSession.endTime) ? (
										// @ts-ignore
										<span className="text-violet-900 p-2 bg-violet-300 rounded-tl-lg rounded-br-lg animate-pulse	">
											Session started
										</span>
									) : dayjs(nextSession.date).isToday() ? (
										<span className="text-green-900 p-2   bg-green-300 rounded-tl-lg rounded-br-lg ">
											Today
										</span>
									) : dayjs(nextSession.date).isTomorrow() ? (
										<span className="text-yellow-900 p-2  bg-yellow-300 rounded-tl-lg rounded-br-lg ">
											Tomorrow
										</span>
									) : (
										dayjs(nextSession.date).format("DD MMM YYYY")
									)}

									<div
										style={{
											color: "rgb(50, 51, 49)",
											fontSize: "17px",
											marginBottom: 10,
											display: "flex",
											alignItems: "center",
											flexDirection: "row",
											marginTop: 5,
										}}
									>
										<AccessTimeIcon
											style={{
												color: "rgb(110 110 110 / 96%)",
												width: 30,
												height: 30,
											}}
										/>
										<span className="mx-2">{nextSession.startTime}</span>

										<TimerOutlinedIcon
											style={{
												color: "rgb(110 110 110 / 96%)",
												width: 30,
												height: 30,
											}}
										/>
										<span className="mx-2">{nextSession.countdown}</span>
									</div>
									<div>
										<p
											style={{
												fontSize: 12,
												color: "grey",
												marginBottom: -5,
											}}
										>
											Patient
										</p>
										<p className="text-base">{nextSession.patient}</p>
										<button className="btn-call -px-3">
											{" "}
											<VideoCallIcon /> Start Call{" "}
										</button>
									</div>
								</div>
							) : (
								<p>No upcoming sessions</p>
							)}
						</p>
					</div>
					<img
						style={{
							color: "aqua",
							width: 190,
							height: 175,
							margin: "0px 20px 30px",
						}}
						// src={calendar}
						alt="calendar"
					/>
					<div>
						{/* @ts-ignore */}
						{/* {console.log("currentSession :>> ", currentSession)} */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UpcomingSessionTherapist;
