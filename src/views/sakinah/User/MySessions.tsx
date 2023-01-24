import { Grid } from "@mui/material";
import React from "react";
import NoUpcomingSession from "./Components/NoUpcomingSession";
import Statistics from "./Components/Statistics";
import CancelledSessions from "./MySessions/CancelledSessions";
import PrevSessions from "./MySessions/PrevSessions";

function MySessions() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ maxHeight: 500, overflowY: "scroll" }}>
        <NoUpcomingSession />
      </div>
      <Statistics />
      <Grid container>
        <Grid item xs={6}>
          <PrevSessions />
        </Grid>
        <Grid item xs={6}>
          <CancelledSessions />
        </Grid>
      </Grid>
    </div>
  );
}

export default MySessions;
