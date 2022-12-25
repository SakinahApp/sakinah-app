import React from "react";

function ChosenPrefrences({ item }) {
  return (
    <div
      style={{
        padding: "10px",
        fontWeight: 600,
        margin: 10,
        borderRadius: 10,
        height: 50,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column",
        background: "#f5f5f5",
        color: "rgb(50, 51, 49)",
        border: "1px solid rgb(95, 106, 196, 1)",
        borderColor: "white",
        fontSize: 16,
      }}
    >
      {item} 😔
    </div>
  );
}

export default ChosenPrefrences;
