import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import therapistImage from "../images/therapist1.png";
import CssBaseline from "@mui/material/CssBaseline";
import { useStore } from "../../../../Zustand";
import dayjs from "dayjs";
import { Box } from "@mui/material";

export default function PrevSessions() {
  const { upcomingSessionState } = useStore((state) => state);

  // Filtering previous sessions
  const now = dayjs().unix();

  const prevSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState?.filter(
      (session) =>
        dayjs(session.date + " " + session.time?.slice(0, 5)).unix() < now
    );

  return (
    <Box sx={{ marginTop: "40px" }}>
      <h3
        style={{
          fontWeight: 600,
          fontSize: 19,
          marginLeft: "10px",
          color: "#5f616a",
        }}
      >
        Previous Sessions
      </h3>
      <TableContainer
        component={Paper}
        style={{
          margin: "20px 10px 10px",
          width: "calc(100% - 25px)",
          boxShadow: "none",
          maxHeight: "600px",
        }}
      >
        <CssBaseline />
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              style={{
                background: "rgb(95, 106, 196)",
                borderRadius: 12,
                color: "white",
              }}
            >
              <TableCell
                style={{ color: "white", fontWeight: 600, fontSize: 15 }}
                //
              >
                Therapist
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: 600, fontSize: 15 }}
              >
                Date
              </TableCell>
              <TableCell
                style={{ color: "white", fontWeight: 600, fontSize: 15 }}
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {prevSessions?.length > 0 &&
              prevSessions
                ?.sort(
                  (a, b) =>
                    dayjs(b.date + " " + b.time?.slice(0, 5)).unix() -
                    dayjs(a.date + " " + a.time?.slice(0, 5)).unix()
                )
                ?.map((row, index) => (
                  <TableRow
                    key={row.docId}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      //
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        src={therapistImage}
                        sx={{
                          width: 35,
                          height: 35,
                          border: "2px solid rgb(95, 106, 196)",
                          marginRight: 1.5,
                        }}
                      />
                      <p>{row.therapist_name}</p>
                    </TableCell>
                    <TableCell>{row?.date}</TableCell>
                    <TableCell>{row?.time}</TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
