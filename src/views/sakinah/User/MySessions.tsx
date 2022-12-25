import React from "react";
import NoUpcomingSession from "./Components/NoUpcomingSession";
import PrevSessions from "./MySessions/PrevSessions";

function MySessions() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <UpcomingSession /> */}
      <div style={{ maxHeight: 500, overflowY: "scroll" }}>
        <NoUpcomingSession />
      </div>
      <PrevSessions />
    </div>
  );
}

export default MySessions;
