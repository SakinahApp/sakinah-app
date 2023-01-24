import React from "react";
import { therapistData } from "../../../data/Data";
// import {therapistData}
import { useStoreUser } from "../../../Zustand";
import ConfimrBooking from "./Components/ConfirmBooking";
import ChosenPrefrences from "./Therapists/ChosenPrefrences";
import TherapistCard from "./Therapists/TherapistCard";

function MyTherapists() {
  const { userInfo } = useStoreUser();

  return (
    <div
      style={{
        overflowY: "scroll",
        overflow: "hidden",
        width: "calc(100vw - 290px)",
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
