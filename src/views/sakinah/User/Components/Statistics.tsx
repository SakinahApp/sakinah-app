import { Box } from "@mui/material";
import React from "react";
import { useStore } from "../../../../Zustand";
import dayjs from "dayjs";

function Statistics(props) {
  const { upcomingSessionState } = useStore((state) => state);

  const cancelledSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState?.filter((session) => session.cancel === true);

  const now = dayjs().unix();
  const prevSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState?.filter(
      (session) =>
        dayjs(session.date + " " + session.time?.slice(0, 5)).unix() < now
    );

  console.log("upcomingSessions :>> ", prevSessions);

  const data = [
    {
      name: "Total # of Sessions",
      number: upcomingSessionState?.length,
    },
    {
      name: "Cancelled Sessions",
      number: cancelledSessions?.length,
    },
    {
      name: "Previous Sessions",
      number: prevSessions?.length,
    },
    {
      name: "Amount Paid",
      number: `£${
        (upcomingSessionState?.length - cancelledSessions?.length) * 50
      }`,
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
        Statistics
      </h3>
      <div
        style={{
          display: "flex",
          width: "100%",
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
              borderRadius: 10,
              color: "white",
              height: 100,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "column",
              background: "#E8E2FB",
            }}
          >
            <p style={{ fontSize: 15, color: "rgba(50, 51, 49, 0.8)" }}>
              {item.name}
            </p>
            <h2
              style={{
                fontWeight: 600,
                fontSize: 22,
                color: "rgb(50, 51, 49)",
              }}
            >
              {item.number}
            </h2>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default Statistics;
