import React from "react";
import { Grid } from "@mui/material";
import Statistics from "./Components/Statistics";
import SessionsList from "./MySessions/SessionsList";
import { useStore } from "../../../Zustand";
import dayjs from "dayjs";

function MySessions() {
  const { upcomingSessionState } = useStore((state) => state);
  const now = dayjs().unix();

  // Filtering upcoming sessions
  const upcomingSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState
      ?.filter(
        (session) =>
          dayjs(session.date + " " + session.time?.slice(0, 5)).unix() > now
      )
      .filter((session) => session.cancel !== true);

  // Filtering previous sessions
  const prevSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState
      ?.filter(
        (session) =>
          dayjs(session.date + " " + session.time?.slice(0, 5)).unix() < now
      )
      .filter((session) => session.cancel !== true);

  // Filtering previous sessions
  const cancelledSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState?.filter((session) => session.cancel === true);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Statistics displayGraphs={true} />
      <Grid container>
        <Grid item xs={12}>
          <SessionsList title="Upcoming Sessions" data={upcomingSessions} />
        </Grid>
        <Grid item xs={6}>
          <SessionsList title="Previous Sessions" data={prevSessions} />
        </Grid>
        <Grid item xs={6}>
          <SessionsList title="Cancelled Sessions" data={cancelledSessions} />
        </Grid>
      </Grid>
    </div>
  );
}

export default MySessions;
