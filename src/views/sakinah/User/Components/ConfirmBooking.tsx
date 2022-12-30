import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, CssBaseline } from "@mui/material";
import { useStore, useStoreTemporary, useStoreUser } from "../../../../Zustand";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Firebase";

function ConfirmBooking({ therapist, visibility, setVisibility, date, time }) {
  const { setUpcomingSession } = useStore((state) => state);
  const { userInfo, setUserInfo } = useStoreUser((state) => state);
  const { setSnackbarOpen } = useStoreTemporary((state) => state);

  // Add a new session with a generated id.
  async function addSession() {
    try {
      const docRef = await addDoc(collection(db, "therapy-session"), {
        room_code: Math.floor(100000 + Math.random() * 900000),
        therapist_id: therapist.id,
        therapist_name: therapist.fullName,
        time: time,
        date: date,
        type: "single",
        user_id: userInfo.uid,
        user_name: userInfo.name,
        cancel: false,
      });
      setSnackbarOpen(true);
      // console.log("Document written with ID: ", docRef.id);
      return;
    } catch (e) {
      console.log(e);
      return;
    }
  }

  function handleBook() {
    setVisibility("flex");
    addSession();
    setUpcomingSession({ ...therapist, date: date, time: time });
  }

  return (
    <div
      style={{
        display: visibility,
        padding: "20px",
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        background: "rgb(95, 106, 196)",
        width: 380,
        borderRadius: 12,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 9999,
        position: "absolute",
        margin: "auto",
        top: "calc(50% - 100px)",
        left: "calc(50% - 190px)",
      }}
    >
      <CssBaseline />
      <h2
        style={{
          fontWeight: 600,
          fontSize: 18,
          color: "white",
          textAlign: "center",
        }}
      >
        Please confirm your booking
      </h2>
      <Box
        style={{
          width: "100%",
          background: "rgb(245, 245, 245)",
          padding: "10px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          margin: "20px auto 10px",
          maxWidth: 270,
          fontSize: 14,
          borderRadius: "6px",
        }}
      >
        <p style={{ fontWeight: 600 }}>Chosen Date and Time</p>
        <p>{date}</p>
        <p>{time}</p>
      </Box>
      <Box
        style={{
          margin: "auto",
          color: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link to="/sessions">
          <Button
            onClick={handleBook}
            color="inherit"
            style={{
              borderRadius: "20px",
              background: "white",
              padding: "5px 20px",
              width: "100px",
              boxShadow: "none",
              margin: 5,
            }}
          >
            Book
          </Button>
        </Link>
        <Button
          onClick={() => setVisibility("none")}
          color="inherit"
          style={{
            borderRadius: "20px",
            background: "white",
            padding: "5px 20px",
            width: "100px",
            boxShadow: "none",
            margin: 5,
          }}
        >
          Cancel
        </Button>
      </Box>
    </div>
  );
}

export default ConfirmBooking;
