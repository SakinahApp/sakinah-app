import { Avatar, AvatarGroup, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import photo from "../../../../assets/images/therapist1.png";
import photo1 from "../../../../assets/images/therapist2.png";
import photo2 from "../../../../assets/images/therapist3.png";

function TherapistAvatars(props) {
  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        padding: "20px 20px 30px",
        flex: 2,
        margin: 10,
        maxHeight: 220,
        borderRadius: 8,
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        background: "rgb(226 109 128 / 80%)",
      }}
    >
      <Link to="/therapists" style={{ width: "100%" }}>
        <AvatarGroup
          max={4}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "white",
              width: 189,
              margin: 0,
              lineHeight: 1.5,
              padding: 10,
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Learn more about your matched muslim therapists
          </div>
          <Avatar
            style={{ width: 180, height: 180 }}
            alt="Remy Sharp"
            src={photo}
          />
          <Avatar
            style={{ width: 180, height: 180, marginLeft: -120 }}
            alt="Travis Howard"
            src={photo1}
          />
          <Avatar
            style={{ width: 180, height: 180, marginLeft: -120 }}
            alt="Cindy Baker"
            src={photo2}
          />
        </AvatarGroup>
      </Link>
    </div>
  );
}

export default TherapistAvatars;
