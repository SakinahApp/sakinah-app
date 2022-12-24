import React from "react";
import NoUpcomingSession from "./Components/NoUpcomingSession";
import PrevSessions from "./MySessions/PrevSessions";

function MySessions() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <UpcomingSession /> */}
      <NoUpcomingSession />
      <PrevSessions />
    </div>
  );
}

export default MySessions;
