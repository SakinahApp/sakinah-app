import React from "react"
import { therapistData } from "../../../data/Data"
// import {therapistData}
import { useStore, useStoreTemporary } from "../../../Zustand"
import ConditionsTags from "./Components/ConditionsTags"
import ChosenPrefrences from "./Therapists/ChosenPrefrences"
import TherapistCard from "./Therapists/TherapistCard"
import { collection, query, where, getDocs } from "firebase/firestore"
import { db } from "../../../Firebase"

function MyTherapists() {
  const { sidebarWidth } = useStoreTemporary()
  const { therapistsList, setTherapistsList } = useStore()

  async function fetchData() {
    const list = []
    try {
      const q = query(collection(db, "therapist-profile"))
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((doc) => {
        list.push({ ...doc.data(), docId: doc.id })
      })

      setTherapistsList(list)
    } catch (error) {
      console.log("error", error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div
      style={{
        overflowY: "scroll",
        overflow: "hidden",
        width: `calc(100vw - ${sidebarWidth}px)`,
        marginTop: "30px",
      }}
    >
      <h3
        style={{ margin: 10, fontWeight: 600, fontSize: 19, color: "#5f616a" }}
      >
        Matched Therapists
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          overflowX: "scroll",
          marginBottom: 45,
          marginLeft: "10px",
        }}
      >
        {therapistsList?.map((item, index) => (
          <div key={index}>
            <TherapistCard details={item} />
          </div>
        ))}
      </div>
      <ConditionsTags />
    </div>
  )
}

export default MyTherapists
