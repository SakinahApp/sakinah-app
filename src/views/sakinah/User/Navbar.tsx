import { Grid } from "@mui/material";
import React from "react";
import AccountMenu from "./Components/SignOut";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Grid
      item
      xs={12}
      style={{
        background: "#5f6ac4",
        color: "white",
        padding: "10px 25px",
        borderRadius: 5,
        maxWidth: "none",
        height: 60,
        margin: "10px 10px 5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link to="/">
        <h2
          style={{
            fontWeight: 600,
            fontSize: 20,
            display: "flex",
            alignItems: "center",
          }}
        >
          {" "}
          <ShieldMoonIcon style={{ width: 35, height: 35, marginRight: 5 }} />
          Sakinah App
        </h2>
      </Link>
      <AccountMenu />
    </Grid>
  );
}

export default Navbar;
