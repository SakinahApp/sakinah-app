import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ListItemIcon } from "@mui/material";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PortraitOutlinedIcon from "@mui/icons-material/PortraitOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { signOut } from "firebase/auth";
import { authTherapist } from "../../../../FirebaseTherapist";

const LayoutTherapist = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleLogout = () => {
		signOut(authTherapist)
			.then(() => {
				// Sign-out successful.
				navigate("/auth/therapists/signin");
				console.log("Signed out successfully");
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<div className="flex">
			<nav className="flex-none flex-nowrap h-full min-h-screen block top-0 left-0 overflow-y-auto uppercase overflow-hidden shadow-xl bg-white  justify-between w-56 z-10 py-4 px-6 cursor-pointer">
				<div className="mb-10 "> SAKINAH LOGO </div>

				{sidebar.map((item, index) => (
					<Link
						key={index}
						to={item.link}
						className={`text-xs uppercase py-3 font-bold  flex items-center   hover:text-blue-500
           ${
												location.pathname == item.link ? "text-blue-400" : "text-gray-600"
											} `}
					>
						<ListItemIcon style={{ color: "inherit" }}>{item.icon} </ListItemIcon>
						{item.name}
					</Link>
				))}
				<div
					className="flex items-center text-xs uppercase py-3 font-bold   text-gray-600 hover:text-blue-500"
					onClick={handleLogout}
				>
					<ListItemIcon style={{ color: "inherit" }}>
						<ExitToAppOutlinedIcon />{" "}
					</ListItemIcon>{" "}
					Logout
				</div>
			</nav>
			<div className="">
				<Outlet />
			</div>
		</div>
	);
};

const sidebar = [
	{ name: "Dashboard", link: "/therapists/", icon: <DashboardOutlinedIcon /> },
	{
		name: "Calendar",
		link: "/therapists/calendar",
		icon: <CalendarMonthOutlinedIcon />,
	},
	{
		name: "Customers",
		link: "/therapists/customers",
		icon: <GroupsOutlinedIcon />,
	},
	// {name:"Profile",
	// link:"/therapists/profile",
	// icon: <PortraitOutlinedIcon/>
	// },
	{
		name: "Payments",
		link: "/therapists/payments",
		icon: <PaymentOutlinedIcon />,
	},
	{
		name: "Settings",
		link: "/therapists/settings",
		icon: <ManageAccountsOutlinedIcon />,
	},
];

export default LayoutTherapist;
