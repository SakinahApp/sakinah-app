import React from "react";
import { Box } from "@mui/material";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const OnboardingLayout = () => {
	return (
		<div>
			<Box sx={{ background: "#F3F4F6", width: "100%", height: "6rem" }}>
				<Container style={{ height: "100%" }}>
					<Box sx={{ pt: 4, display: "flex", justifyContent: "space-between" }}>
						<img
							src="https://assets.yasno.live/assets/logo-v3-5ca0495679167f6fe34df2f192ac48b2249b048fff2c9a6484effc52bda9ae0c.svg"
							alt=""
						/>
						<h3> ❤️ NAME OF THERAPIST</h3>
					</Box>
				</Container>
			</Box>
			<Outlet />
		</div>
	);
};

export default OnboardingLayout;
