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
    <TableContainer
      component={Paper}
      style={{
        margin: "30px 10px 10px",
        width: "calc(100% - 25px)",
        boxShadow: "none",
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
            >
              Previous Sessions
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: 600, fontSize: 15 }}
              align="center"
            >
              Therapist
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: 600, fontSize: 15 }}
              align="center"
            >
              Date
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: 600, fontSize: 15 }}
              align="center"
            >
              Time
            </TableCell>
            <TableCell
              style={{ color: "white", fontWeight: 600, fontSize: 15 }}
              align="center"
            >
              Duration
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
                  <TableCell component="th" scope="row">
                    Session {index + 1}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
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
                  <TableCell align="center">{row?.date}</TableCell>
                  <TableCell align="center">{row?.time}</TableCell>
                  <TableCell align="center">50 min</TableCell>
                </TableRow>
              ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
