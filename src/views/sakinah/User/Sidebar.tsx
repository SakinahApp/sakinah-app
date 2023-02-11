import React, { useState } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router-dom";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import VideoChatIcon from "@mui/icons-material/VideoChat";
import PersonIcon from "@mui/icons-material/Person";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SettingsIcon from "@mui/icons-material/Settings";
import { useStoreTemporary } from "../../../Zustand";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [isShown, setIsShown] = useState(false);
  const { setSidebarWidth } = useStoreTemporary();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/auth/login");
        console.log("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <Box
      style={{
        background: "white",
        padding: "16px",
        maxWidth: "none",
        width: hide ? 300 : 90,
        transition: "width 0.5s ease-out",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "overlay",
        overflowX: "hidden",
      }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <Link to="/" style={{ display: "flex", marginLeft: !hide && 10 }}>
        <ShieldMoonIcon
          style={{ width: 35, height: 35, marginRight: 5, color: "#5f6ac4" }}
        />
        <h2
          style={{
            fontWeight: 600,
            fontSize: 22,
            alignItems: "center",
            color: "#323331",
            marginTop: 0,
            marginLeft: 2,
            maxWidth: 180,
            minWidth: 170,
            display: hide ? "flex" : "none",
          }}
        >
          {" "}
          Sakinah App
        </h2>
      </Link>
      <IconButton
        onClick={() => (
          setHide(!hide),
          setIsShown(!isShown),
          hide ? setSidebarWidth(90) : setSidebarWidth(300)
        )}
        style={{
          position: "absolute",
          top: hide ? 15 : 60,
          right: hide ? 2 : 22,
          color: "#BAB9CC",
          display: isShown ? "flex" : "none",
        }}
      >
        {hide ? (
          <KeyboardDoubleArrowLeftIcon />
        ) : (
          <KeyboardDoubleArrowRightIcon />
        )}
      </IconButton>
      <Box
        style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          marginTop: 66,
        }}
      >
        <List>
          {data.map((item, index) => (
            <Link key={index} to={item.link}>
              <ListItem disablePadding>
                <ListItemButton
                  className="onHover"
                  style={{
                    background:
                      location.pathname == item.link ? "#5f6ac4" : "inherit",
                    color: location.pathname == item.link ? "white" : "#BAB9CC",
                    borderRadius: 5,
                    marginBottom: 5,
                  }}
                >
                  <ListItemIcon style={{ color: "inherit" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Box>
          <Link to="/settings">
            <ListItem disablePadding>
              <ListItemButton
                className="onHover"
                style={{
                  background: location.pathname.includes("settings")
                    ? "#5f6ac4"
                    : "inherit",
                  color: location.pathname.includes("settings")
                    ? "white"
                    : "#BAB9CC",
                  borderRadius: 5,
                  marginBottom: 5,
                }}
              >
                <ListItemIcon style={{ color: "inherit" }}>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItemButton>
            </ListItem>
          </Link>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              className="onHover"
              style={{
                color: "#BAB9CC",
                borderRadius: 5,
                marginBottom: 5,
              }}
            >
              <ListItemIcon style={{ color: "inherit" }}>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log out" />
            </ListItemButton>
          </ListItem>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;

const data = [
  {
    name: "Dashboard",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "My Sessions",
    link: "/sessions",
    icon: <VideoChatIcon />,
  },
  {
    name: "All Therapists",
    link: "/therapists",
    icon: <PersonIcon />,
  },
  {
    name: "Conditions",
    link: "/preferences",
    icon: <AcUnitIcon />,
  },
];
