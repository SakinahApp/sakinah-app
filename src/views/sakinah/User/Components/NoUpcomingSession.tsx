import { Avatar, Button, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStore, useStoreUser } from "../../../../Zustand";
import therapistImage from "../images/therapist1.png";
import calendar from "../images/calendar.svg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CloseIcon from "@mui/icons-material/Close";
import SnackbarX from "./SnackbarX";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../Firebase";

function NoUpcomingSession(props) {
  const [open, setOpen] = React.useState(false);
  const { userInfo } = useStoreUser((state) => state);
  const { upcomingSessionState, removeSessions, setUpcomingSession } = useStore(
    (state) => state
  );

  // fetch upcoming sessions for the current user and add them to session[]
  async function fetchData() {
    const sessions = [];
    // set filter for fetch
    try {
      const q = query(
        collection(db, "therapy-session"),
        where("user_id", "==", userInfo.uid)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(" => ", doc.data());
        sessions.push(doc.data());
      });

      setUpcomingSession(sessions);
      console.log("sessions", sessions);
    } catch (error) {
      console.log("error", error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);
  console.log("upcomingSessionState :>> ", upcomingSessionState);

  return (
    <>
      <SnackbarX
        open={open}
        setOpen={setOpen}
        backgroundColor="#32a676"
        message="You have successfully cancelled your sessions!"
      />
      {upcomingSessionState?.length === 0 ? (
        <div
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            padding: "20px 20px 30px",
            flex: 2,
            margin: 10,
            borderRadius: 8,
            color: "white",
            maxHeight: 220,
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            position: "relative",
            background:
              upcomingSessionState?.length === 0
                ? "white"
                : "rgb(95 106 196 / 5%)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <h3
              style={{
                color: "#5f6ac4",
                fontWeight: 600,
                fontSize: 22,
                padding: 0,
                marginBottom: 20,
              }}
            >
              No Upcoming Sessions!
            </h3>
            <p style={{ color: "grey", marginBottom: 15 }}>
              Take the first step towards feeling better by booking your first
              therapy session today.
            </p>
            <Link to="/therapists">
              <Button
                variant="contained"
                style={{ background: "#e26d80", width: 200 }}
              >
                Book A Session!
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          {upcomingSessionState?.length > 0 &&
            upcomingSessionState?.slice(0, props.num)?.map((session) => (
              <div
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
                  padding: "20px 20px 30px",
                  flex: 2,
                  margin: 10,
                  borderRadius: 8,
                  color: "white",
                  maxHeight: 220,
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  position: "relative",
                  background:
                    upcomingSessionState?.length === 0
                      ? "white"
                      : "rgb(95 106 196 / 5%)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "row",
                    height: "100%",
                    padding: 10,
                  }}
                >
                  <IconButton
                    onClick={() => (removeSessions(), setOpen(true))}
                    style={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "#aaaaaa",
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                  <div>
                    <h3
                      style={{
                        color: "#5f6ac4",
                        fontWeight: 600,
                        fontSize: 20,
                        padding: 0,
                        marginBottom: 5,
                      }}
                    >
                      Your Upcoming Sessions!
                    </h3>

                    <p
                      style={{
                        color: "rgb(50, 51, 49)",
                        fontSize: "30px",
                        fontWeight: 600,
                        marginBottom: 5,
                      }}
                    >
                      {session.date}
                    </p>
                    <p
                      style={{
                        color: "rgb(50, 51, 49)",
                        fontSize: "17px",
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
                          height: 30,
                          marginLeft: -3,
                          marginRight: 5,
                        }}
                      />{" "}
                      {session.time}
                      <p
                        style={{
                          color: "rgb(50, 51, 49)",
                          fontSize: "17px",
                          marginLeft: 25,
                          display: "flex",

                          alignItems: "center",
                          flexDirection: "row",
                        }}
                      >
                        <LockOpenIcon
                          style={{
                            color: "rgb(110 110 110 / 96%)",
                            width: 25,
                            height: 25,
                            marginLeft: -3,
                            marginRight: 5,
                          }}
                        />{" "}
                        {session.room_code}
                      </p>
                    </p>
                    <div
                      style={{
                        color: "rgb(50, 51, 49)",
                        fontSize: "16px",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "row",
                      }}
                    >
                      <Avatar
                        src={therapistImage}
                        sx={{
                          bgcolor: "grey",
                          border: "1px solid #5f6ac4",
                          width: 30,
                          height: 30,
                          marginRight: 1,
                        }}
                      />
                      <div>
                        <p
                          style={{
                            fontSize: 12,
                            color: "grey",
                            marginBottom: -5,
                          }}
                        >
                          Therapist
                        </p>
                        {session.therapist_name}
                      </div>
                    </div>
                  </div>
                  <img
                    style={{
                      color: "aqua",
                      width: 190,
                      height: 175,
                      margin: "0px 20px 30px",
                    }}
                    src={calendar}
                    alt="calendar"
                  />
                </div>
              </div>
            ))}
        </div>
      )}
    </>
  );
}

export default NoUpcomingSession;
