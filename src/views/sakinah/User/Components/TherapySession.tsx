import React from "react";
import ConfirmationModal from "../../../../components/Confirm/ConfirmationModal";
import VideocamIcon from "@mui/icons-material/Videocam";
import therapistImage from "../images/therapist1.png";
import calendar from "../images/calendar.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { Avatar, Button, IconButton } from "@mui/material";
import dayjs from "dayjs";
import { useStore, useStoreUser } from "../../../../Zustand";
import { db } from "../../../../Firebase";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import SnackbarX from "./SnackbarX";
import CancelIcon from "@mui/icons-material/Cancel";

function TherapySession({ session, upSessions }) {
  const [openCancel, setOpenCancel] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { upcomingSessionState, setUpcomingSession } = useStore(
    (state) => state
  );

  function disableCall(date, time) {
    const now = dayjs().unix();
    const expTime = dayjs(date + " " + time?.slice(0, 5)).unix();
    const leftTime = (expTime - now) / 60;

    if (leftTime > 5 || leftTime < -100) {
      return true;
    } else {
      return false;
    }
  }

  async function cancelSession(id: string) {
    const sessionRef = doc(db, "therapy-session", id);
    try {
      await updateDoc(sessionRef, {
        cancel: true,
      });
      setOpen(true);
      setUpcomingSession({ ...upcomingSessionState, cancel: true });
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteSession(id: string) {
    const sessionRef = doc(db, "therapy-session", id);
    try {
      await deleteDoc(sessionRef);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.05) 0px 2px 5px -1px, rgba(0, 0, 0, 0.2) 0px 1px 3px -1px",
        padding: "10px 20px 10px",
        flex: 2,
        maxWidth: "420px",
        minWidth: "420px",
        margin: 10,
        borderRadius: 8,
        color: "white",
        maxHeight: 250,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        position: "relative",
        background:
          upSessions?.length === 0
            ? "white"
            : session?.cancel
            ? "rgb(253, 237, 237)"
            : "rgb(95 106 196 / 5%)",
      }}
    >
      <SnackbarX
        open={open}
        setOpen={setOpen}
        backgroundColor="#32a676"
        message="The session has been successfully deleted!"
      />
      <ConfirmationModal
        openConfirm={openCancel}
        setOpenConfirm={setOpenCancel}
        action={() => cancelSession(session?.docId)}
        topic="Cancel Session"
        message="Are you sure you want to cancel your session?"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          height: "100%",
        }}
      >
        <div>
          <h3
            style={{
              color: session.cancel ? "rgb(216 70 68)" : "#5f6ac4",
              fontWeight: 600,
              fontSize: 20,
              padding: 0,
              marginBottom: 5,
            }}
          >
            {session.cancel && (
              <>
                <ErrorOutlineIcon
                  style={{ width: 27, height: 27, marginBottom: 3 }}
                />{" "}
                This session has been cancelled!
              </>
            )}
          </h3>
          <p
            style={{
              color: "rgb(50, 51, 49)",
              fontSize: "24px",
              fontWeight: 600,
              marginBottom: 5,
            }}
          >
            {session.date}
          </p>
          <p
            style={{
              color: "#323331bf",
              fontSize: "15px",
              marginBottom: 10,
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <AccessTimeIcon
              style={{
                color: "rgb(110 110 110 / 96%)",
                width: 30,
                height: 27,
                marginLeft: -3,
                marginRight: 5,
              }}
            />{" "}
            {session.time}
          </p>
          <div
            style={{
              color: "#323331bf",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Avatar
              src={therapistImage}
              sx={{
                bgcolor: "#323331bf",
                border: "1px solid #5f6ac4",
                width: 25,
                height: 25,
                marginRight: 1,
              }}
            />
            <div>
              <p
                style={{
                  fontSize: 12,
                  color: "#323331bf",
                  marginBottom: -5,
                }}
              >
                Therapist
              </p>
              {session.therapist_name}
            </div>
          </div>
          <Button
            // disabled={leftTime > 5}
            // disabled={
            //   !session.cancel ? disableCall(session.date, session.time) : true
            // }
            style={{
              background: "#5f61c4",
              color: "white",
              // color: disableCall(session.date, session.time)
              //   ? "#afafaf"
              //   : "white",
              marginTop: 15,
              marginBottom: 10,
              textTransform: "none",
            }}
          >
            <a
              target="_blank"
              rel="noreferrer"
              href={`http://teleport.video/sakinah/yaseenavgani`}
              // href={
              //   !session.cancel && `http://teleport.video/sakinah/yaseenavgani`
              // }
            >
              <VideocamIcon style={{ marginRight: 6 }} />
              Video Call
            </a>
          </Button>
          {!session?.cancel ? (
            <IconButton
              onClick={() => !session?.cancel && setOpenCancel(true)}
              color="error"
              style={{
                // background: "white",
                color: "rgb(226, 109, 128)",
                // border: "1px solid rgb(226, 109, 128)",
                textTransform: "none",
                position: "absolute",
                top: "10px",
                right: "5px",
              }}
            >
              <CancelIcon />
            </IconButton>
          ) : (
            <Button
              onClick={() => deleteSession(session?.docId)}
              color="error"
              style={{
                background: "white",
                color: "rgb(226, 109, 128)",
                border: "1px solid rgb(226, 109, 128)",
                marginTop: 30,
                marginLeft: 14,
              }}
            >
              Delete
            </Button>
          )}
        </div>
        <img
          style={{
            color: "aqua",
            height: 100,
            position: "absolute",
            top: 40,
            right: "40px",
          }}
          src={calendar}
          alt="calendar"
        />
      </div>
    </div>
  );
}

export default TherapySession;
