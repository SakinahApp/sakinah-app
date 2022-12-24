import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import CheckboxesGroup from "./Components/CheckboxesGroup";

const situationData = [
  "Feeling sad",
  "feeling Low",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
  "feeling Low",
  "Happy",
];
const relationshipData = [
  "Anxious",
  "Depressed",
  "Feeling sad",
  "feeling Low",
  "Happy",
  "feeling Low",
  "Happy",
];
const workData = [
  "Performance",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
];

export default function MyPreferences() {
  const styling = {
    background: "rgb(245, 245, 245)",
    borderRadius: 10,
    margin: "20px 10px",
    padding: "10px 30px",
  };
  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            boxShadow: "none",
            background: "rgb(95, 106, 196)",
            padding: "10px 20px",
            flex: 2,
            margin: 10,
            borderRadius: 8,
            width: "100%",
            display: "flex",
            color: "white",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "transparent" }}>
            <AcUnitIcon />
          </Avatar>
          <h2 style={{ fontWeight: 700, fontSize: 20 }}>
            What would you like to discuss with your therapist?
          </h2>
        </div>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box style={styling}>
            <CheckboxesGroup data={situationData} title="My Situation" />
          </Box>
          <Box style={styling}>
            <CheckboxesGroup data={relationshipData} title="My Relationship" />
          </Box>
          <Box style={styling}>
            <CheckboxesGroup data={workData} title="Work, study" />
          </Box>
          <Box style={styling}>
            <CheckboxesGroup data={workData} title="Work, study" />
          </Box>
        </Box>
        <Button
          variant="contained"
          style={{
            margin: 20,
            background: "rgb(226, 109, 128)",
            boxShadow: "none",
            padding: "5px 20px",
          }}
        >
          Save
        </Button>
      </Box>
    </>
  );
}
