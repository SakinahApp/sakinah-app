import React from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { useLocation } from "react-router-dom";
import { auth } from "../../../Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {
  Button,
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

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

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
        borderRadius: 5,
        maxWidth: "none",
        height: "calc(100vh - 100px)",
        margin: "5px 5px 10px 10px",
        width: 300,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
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
                  color:
                    location.pathname == item.link
                      ? "white"
                      : "rgb(50, 51, 49)",
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
      {/* <List style={{ width: "100%", display: "flex" }}>
        <Button
          style={{
            boxShadow: "none",
            color: "white",
            background: "rgb(226, 109, 128)",
            fontSize: 12,
            margin: "auto",
            width: "120px",
          }}
          variant="contained"
          onClick={handleLogout}
        >
          Sign out
        </Button>
      </List> */}
    </Box>
  );
}

export default Sidebar;

const data = [
  {
    name: "Home",
    link: "/",
    icon: <HomeIcon />,
  },
  {
    name: "My Sessions",
    link: "/sessions",
    icon: <VideoChatIcon />,
  },
  {
    name: "Therapists",
    link: "/therapists",
    icon: <PersonIcon />,
  },
  {
    name: "Preferences",
    link: "/preferences",
    icon: <AcUnitIcon />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <SettingsIcon />,
  },
];
