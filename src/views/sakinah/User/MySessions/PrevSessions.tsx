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

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Session #1", 159, 6.0, 24, 4.0),
  createData("Session #2", 237, 9.0, 37, 4.3),
  createData("Session #3", 262, 16.0, 24, 6.0),
  createData("Session #4", 305, 3.7, 67, 4.3),
  createData("Session #5", 305, 3.7, 67, 4.3),
  createData("Session #6", 305, 3.7, 67, 4.3),
  createData("Session #7", 356, 16.0, 49, 3.9),
];

export default function PrevSessions() {
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
              Duration
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
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
                <p>Abdullah Gul</p>
              </TableCell>
              <TableCell align="center">December 10, 2022</TableCell>
              <TableCell align="center">50 min</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
