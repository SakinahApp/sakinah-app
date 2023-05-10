import { Box, Grid } from "@mui/material";
import React from "react";
import { useStore } from "../../../../Zustand";
import dayjs from "dayjs";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import GppBadIcon from "@mui/icons-material/GppBad";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PaidIcon from "@mui/icons-material/Paid";
import { DoughnutChart } from "./DoughnutChart";
import { BarChart } from "./BarChart";

function Statistics({ displayGraphs }) {
  const { upcomingSessionState } = useStore((state) => state);

  // Cancelled sessions
  const cancelledSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState?.filter((session) => session.cancel === true);

  // Previous sessions
  const now = dayjs().unix();
  const prevSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState
      ?.filter(
        (session) =>
          dayjs(session.date + " " + session.time?.slice(0, 5)).unix() < now
      )
      .filter((session) => session.cancel !== true);

  // Data to display
  const data = [
    {
      name: "Total # of Sessions",
      color: "#e2e6fb4d",
      number: upcomingSessionState?.length || 0,
      icon: (
        <AddModeratorIcon
          style={{ width: 50, height: 50, color: "rgb(95, 97, 196)" }}
        />
      ),
    },
    {
      name: "Previous Sessions",
      color: "rgb(65 182 255 / 8%)",
      number: prevSessions?.length || 0,
      icon: (
        <SkipPreviousIcon style={{ width: 50, height: 50, color: "#41b6ff" }} />
      ),
    },
    {
      name: "Cancelled Sessions",
      color: "rgb(255 139 79 / 7%)",
      number: cancelledSessions?.length || 0,
      icon: <GppBadIcon style={{ width: 50, height: 50, color: "#ff8b4f" }} />,
    },
    {
      name: "Amount Paid",
      color: "rgb(94 196 151 / 8%)",
      number: `£${
        (upcomingSessionState?.length - cancelledSessions?.length) * 50 || 0
      }`,
      icon: <PaidIcon style={{ width: 50, height: 50, color: "#5fc497" }} />,
    },
  ];

  return (
    <Box sx={{ marginTop: "20px" }}>
      <h3
        style={{
          margin: 10,
          marginBottom: 20,
          fontWeight: 600,
          fontSize: 19,
          color: "#5f616a",
        }}
      >
        Session Statistics
      </h3>

      <div
        style={{
          display: "flex",
          width: "calc(100% - 10px)",
        }}
      >
        {data.map((item) => (
          <div
            style={{
              padding: "20px 10px",
              //   width: 300,
              flex: 1,
              marginRight: 20,
              marginLeft: 10,
              color: "white",
              height: 100,
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
              borderRadius: 10,
              boxShadow:
                "rgb(50 50 93 / 5%) 0px 2px 5px -1px, rgb(0 0 0 / 20%) 0px 1px 3px -1px",
              background: item.color,
            }}
          >
            {item.icon}
            <div>
              <h2
                style={{
                  fontWeight: 600,
                  fontSize: 22,
                  color: "rgb(50, 51, 49)",
                }}
              >
                {item.number}
              </h2>
              <p style={{ fontSize: 15, color: "rgba(50, 51, 49, 0.8)" }}>
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
      {displayGraphs && (
        <Grid container>
          <Grid
            item
            xs={6}
            style={{
              padding: 10,
              margin: "40px 0px 30px",
            }}
          >
            <Box
              style={{
                margin: "auto",
                borderRadius: 10,
                padding: 45,
                boxShadow:
                  "rgb(50 50 93 / 5%) 0px 2px 5px -1px, rgb(0 0 0 / 20%) 0px 1px 3px -1px",
              }}
            >
              <DoughnutChart dataSessions={data} />
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            style={{
              margin: "40px 0px 30px",
              padding: 10,
            }}
          >
            <Box
              style={{
                margin: "auto",
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
                padding: 15,
                borderRadius: 10,
                boxShadow:
                  "rgb(50 50 93 / 5%) 0px 2px 5px -1px, rgb(0 0 0 / 20%) 0px 1px 3px -1px",
              }}
            >
              <BarChart dataSessions={data} />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default Statistics;
