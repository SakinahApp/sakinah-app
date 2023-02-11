import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useStore, useStoreUser, useStoreTemporary } from "../../../../Zustand";
import SnackbarX from "./SnackbarX";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../../../Firebase";
import dayjs from "dayjs";
import TherapySession from "./TherapySession";

function NoUpcomingSession(props) {
  const [open, setOpen] = React.useState(false);
  const { userInfo } = useStoreUser((state) => state);
  const { upcomingSessionState, setUpcomingSession } = useStore(
    (state) => state
  );
  const { sidebarWidth } = useStoreTemporary();

  // Filtering upcoming sessions
  const now = dayjs().unix();

  const upSessions =
    upcomingSessionState?.length > 0 &&
    upcomingSessionState.filter(
      (session) =>
        dayjs(session.date + " " + session.time?.slice(0, 5)).unix() >= now
    );

  // fetch upcoming sessions for the current user and add them to session[]
  async function fetchData() {
    const sessions = [];
    try {
      const q = query(
        collection(db, "therapy-session"),
        where("user_id", "==", userInfo.uid)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        sessions.push({ ...doc.data(), docId: doc.id });
      });

      setUpcomingSession(sessions);
    } catch (error) {
      console.log("error", error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <SnackbarX
        open={open}
        setOpen={setOpen}
        backgroundColor="#32a676"
        message="You have successfully cancelled your sessions!"
      />

      {!upSessions ||
      upSessions.filter((item) => item.cancel !== true).length === 0 ? (
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
            background:
              upSessions?.length === 0 ? "white" : "rgb(95 106 196 / 5%)",
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
        <>
          <h3
            style={{
              margin: 10,
              fontWeight: 600,
              fontSize: 19,
              color: "#5f616a",
            }}
          >
            Upcoming Sessions
          </h3>
          <div
            style={{
              display: "flex",
              overflowX: "scroll",
              overflowY: "hidden",
              boxSizing: "border-box",
              width: `calc(100vw - ${sidebarWidth}px)`,
            }}
          >
            {upSessions?.length > 0 &&
              upSessions
                // ?.slice(0, props.num)
                ?.sort(
                  (a, b) =>
                    dayjs(a.date + " " + a.time?.slice(0, 5)).unix() -
                    dayjs(b.date + " " + b.time?.slice(0, 5)).unix()
                )
                .filter((session) => session.cancel === false)
                .map((session, index) => (
                  <TherapySession session={session} upSessions={upSessions} />
                ))}
          </div>
          {/* <Box>
            {upSessions?.length > 0 &&
              upSessions
                ?.slice(0, props.num)
                ?.sort(
                  (a, b) =>
                    dayjs(a.date + " " + a.time?.slice(0, 5)).unix() -
                    dayjs(b.date + " " + b.time?.slice(0, 5)).unix()
                )
                .filter((session) => session.cancel === true)
                .map((session, index) => (
                  <TherapySession session={session} upSessions={upSessions} />
                ))}
          </Box> */}
        </>
      )}
    </>
  );
}

export default NoUpcomingSession;
