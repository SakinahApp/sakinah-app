import { Chip } from "@mui/material";
import React from "react";
import { useStoreUser } from "../../../Zustand";
import ConfimrBooking from "./Components/ConfirmBooking";
import ChosenPrefrences from "./Therapists/ChosenPrefrences";
import TherapistCard from "./Therapists/TherapistCard";

function MyTherapists() {
  const { userInfo } = useStoreUser();

  return (
    <div style={{ overflowY: "scroll", overflow: "hidden" }}>
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
        }}
      >
        {therapistData.map((item, index) => (
          <div key={index}>
            <TherapistCard details={item} />
          </div>
        ))}
      </div>
      <h3
        style={{ margin: 10, fontWeight: 600, fontSize: 19, color: "#5f616a" }}
      >
        My Preferences
      </h3>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
        }}
      >
        {userInfo?.consultationType?.map((item) => (
          <ChosenPrefrences item={item} />
        ))}
      </div>
    </div>
  );
}

export default MyTherapists;

const therapistData = [
  {
    id: 1,
    fullName: "Akbar Hussain",
    background: "#f5f5f5",
  },
  {
    id: 2,
    fullName: "Akbar Hussain",
    background: "#fff4e8",
  },
  {
    id: 3,
    fullName: "Akbar Hussain",
    background: "#e0f1f0",
  },
  {
    id: 4,
    fullName: "Akbar Hussain",
    background: "#f1e0e0",
  },
  {
    id: 4,
    fullName: "Akbar Hussain",
    background: "#e0e1f1",
  },
];

const prefData = [
  "Feeling sad",
  "feeling Low",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
];
