import React from "react";
import { therapistData } from "../../../data/Data";
// import {therapistData}
import { useStoreUser } from "../../../Zustand";
import ConditionsTags from "./Components/ConditionsTags";
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
      <ConditionsTags />
    </div>
  );
}

export default MyTherapists;
