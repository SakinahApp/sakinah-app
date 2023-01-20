import React from "react";
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import calendar from "./../../User/images/calendar.svg";
import ActionUpcommingSession from "./ActionUpcomingSession";

const UpcomingSessionTherapist = () => {
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
					maxHeight: 220,
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
					<div>
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
							15 June 2023
						</p>
						<p
							style={{
								color: "rgb(50, 51, 49)",
								fontSize: "17px",
								marginBottom: 10,
								display: "flex",

								alignItems: "center",
								flexDirection: "row",
							}}
						>
							<AccessTimeIcon
								style={{
									color: "rgb(110 110 110 / 96%)",
									width: 30,
									height: 30,
									marginLeft: -3,
									marginRight: 5,
								}}
							/>{" "}
							18:00{" "}
							<p
								style={{
									color: "rgb(50, 51, 49)",
									fontSize: "17px",
									marginLeft: 25,
									display: "flex",

									alignItems: "center",
									flexDirection: "row",
								}}
							>
								<LockOpenIcon
									style={{
										color: "rgb(110 110 110 / 96%)",
										width: 25,
										height: 25,
										marginLeft: -3,
										marginRight: 5,
									}}
								/>
								2123
								{/* {session.room_code} */}
							</p>
						</p>
						<div
							style={{
								color: "rgb(50, 51, 49)",
								fontSize: "16px",
								display: "flex",
								alignItems: "center",
								flexDirection: "row",
							}}
						>
							{/* <Avatar
            src={therapistImage}
            sx={{
              bgcolor: "grey",
              border: "1px solid #5f6ac4",
              width: 30,
              height: 30,
              marginRight: 1,
            }}
          /> */}
							<div>
								<p
									style={{
										fontSize: 12,
										color: "grey",
										marginBottom: -5,
									}}
								>
									Therapist
								</p>
								Qamariddin Urozov
								{/* {session.therapist_name} */}
							</div>
						</div>
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
				</div>
			</div>
		</div>
	);
};

export default UpcomingSessionTherapist;
