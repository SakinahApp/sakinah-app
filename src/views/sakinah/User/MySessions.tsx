import React, { useState } from "react"
import { Grid } from "@mui/material"
import Statistics from "./Components/Statistics"
import SessionsList from "./MySessions/SessionsList"
import { useStoreUser } from "../../../Zustand"
import dayjs from "dayjs"
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"
import { db } from "../../../Firebase"

function MySessions() {
  const { userInfo } = useStoreUser((state) => state)
  const [sessions, setSessions] = useState([])

  // fetch upcoming sessions for the current user and add them to session[]
  async function fetchData() {
    const sessions = []
    try {
      const q = query(
        collection(db, "therapy-session"),
        where("user_id", "==", userInfo.uid)
      )
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        sessions.push({ ...doc.data(), docId: doc.id })
      })

      setSessions(sessions)
    } catch (error) {
      console.log("error", error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  const now = dayjs().unix()

  // Filtering upcoming sessions
  const upcomingSessions =
    sessions?.length > 0 &&
    sessions
      ?.filter(
        (session) =>
          dayjs(session.date + " " + session.time?.slice(0, 5)).unix() > now
      )
      .filter((session) => session.cancel !== true)

  // Filtering previous sessions
  const prevSessions =
    sessions?.length > 0 &&
    sessions
      ?.filter(
        (session) =>
          dayjs(session.date + " " + session.time?.slice(0, 5)).unix() < now
      )
      .filter((session) => session.cancel !== true)

  // Filtering previous sessions
  const cancelledSessions =
    sessions?.length > 0 &&
    sessions?.filter((session) => session.cancel === true)

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Statistics displayGraphs={true} />
      <Grid container>
        <Grid item xs={12}>
          <SessionsList title="Upcoming Sessions" data={upcomingSessions} />
        </Grid>
        <Grid item xs={6}>
          <SessionsList title="Previous Sessions" data={prevSessions} />
        </Grid>
        <Grid item xs={6}>
          <SessionsList title="Cancelled Sessions" data={cancelledSessions} />
        </Grid>
      </Grid>
    </div>
  )
}

export default MySessions
