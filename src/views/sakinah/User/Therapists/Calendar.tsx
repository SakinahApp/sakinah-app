import { Box, Button } from "@mui/material";
import React from "react";
import DayPicker from "../Components/DayPicker";

function Calendar({ therapist }) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div
        style={{
          padding: "20px 10px",
          boxShadow:
            "rgb(50 50 93 / 25%) 0px 2px 5px -1px, rgb(0 0 0 / 30%) 0px 1px 3px -1px",
          flex: 1,
          margin: 5,
          borderRadius: 23,
          color: "grey",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "column",
          background: "white",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            width: "98%",
          }}
        >
          <h3
            style={{
              fontSize: "17px",
              fontWeight: 600,
              color: "rgb(50, 51, 49)",
              marginBottom: 20,
            }}
          >
            Pick your session
          </h3>
          <DayPicker therapist={therapist} open={open} setOpen={setOpen} />
        </Box>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          variant="contained"
          style={{
            borderRadius: 20,
            background: "rgb(226, 109, 128)",
            width: 100,
            fontWeight: 600,
          }}
        >
          Book
        </Button>
      </div>
    </>
  );
}

export default Calendar;
