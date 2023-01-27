import React from "react";
import { useStoreUser } from "../../../../Zustand";
import ChosenPrefrences from "../Therapists/ChosenPrefrences";

function ConditionsTags(props) {
  const { userInfo } = useStoreUser();
  return (
    <div style={{ width: "100%" }}>
      <h3
        style={{
          margin: 10,
          fontWeight: 600,
          fontSize: 19,
          color: "#5f616a",
        }}
      >
        Conditions
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

export default ConditionsTags;
