import { Grid } from "@mui/material";
import React from "react";

function Card(props: any) {
  return (
    <Grid
      container
      sx={{
        width: "100vw",
        height: "100vh",
        background: "#e0e0e0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {props.children}
    </Grid>
  );
}

export default Card;
