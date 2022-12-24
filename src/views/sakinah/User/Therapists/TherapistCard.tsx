import { Avatar, Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import therapistImage from "../images/therapist1.png";

function TherapistCard({ details }) {
  return (
    <div
      style={{
        padding: "20px 10px",
        width: 240,
        marginRight: 20,
        borderRadius: 23,
        color: "white",
        height: 300,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        background: details.background,
      }}
    >
      <Avatar
        src={therapistImage}
        sx={{ bgcolor: "purple", width: 90, height: 90 }}
      />

      <Box display="flex" alignItems="center" flexDirection="column">
        <h4
          style={{
            color: "#323331",
            fontWeight: 600,
            fontSize: 18,
            padding: 0,
            margin: 0,
          }}
        >
          {details.fullName}
        </h4>
        <p style={{ color: "grey" }}>Therapist #22</p>
        <Link to={`/therapist/${details.id}`} state={{ therapist: details }}>
          <p
            style={{
              cursor: "pointer",
              color: "grey",
              marginBottom: 10,
              textDecoration: "underline",
            }}
          >
            About
          </p>
        </Link>
        <p
          style={{
            color: "rgb(226, 109, 128)",
            fontWeight: 600,
            padding: "3px 10px",
            background: "white",
            border: "2px solid rgb(226, 109, 128)",
            width: "55px",
            borderRadius: 12,
            marginBottom: 20,
          }}
        >
          £50
        </p>
      </Box>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Link to={`/therapist/${details.id}`} state={{ therapist: details }}>
          <Button
            variant="contained"
            style={{
              borderRadius: 20,
              color: "black",
              background: "white",
              width: 100,
              boxShadow: "none",
            }}
          >
            Book
          </Button>
        </Link>
      </Box>
    </div>
  );
}

export default TherapistCard;
