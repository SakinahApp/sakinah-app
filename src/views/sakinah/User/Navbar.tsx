import { Grid } from "@mui/material";
import React from "react";
import AccountMenu from "../../auth/User/SignOut";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import { Link } from "react-router-dom";
import { useStoreUser } from "../../../Zustand";
import { auth } from "../../../Firebase";

function Navbar() {
  const { userInfo } = useStoreUser((state) => state);

  return (
    <Grid
      item
      xs={12}
      style={{
        // background: "#5f6ac4",
        color: "white",
        padding: "0px 10px",
        borderRadius: 5,
        maxWidth: "none",
        alignItems: "center",
        height: 60,
        marginBottom: 30,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h3 style={{ fontWeight: 300, fontSize: 25, color: "#323331" }}>
        As-salamu aleikum, <strong>{userInfo?.name || ""}</strong>! 🙂
      </h3>
      <AccountMenu />
    </Grid>
  );
}

export default Navbar;
