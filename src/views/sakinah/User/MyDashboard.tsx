import React from "react";
import NoUpcomingSession from "./Components/NoUpcomingSession";
import Statistics from "./Components/Statistics";
import TherapistAvatars from "./Components/TherapistAvatars";
import MyTherapists from "./MyTherapists";
import Navbar from "./Navbar";

function MyDashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 2, flexDirection: "column" }}>
          <NoUpcomingSession num={1} />
          <Statistics />
          {/* <TherapistAvatars /> */}
          <MyTherapists />
        </div>
      </div>
    </div>
  );
}

export default MyDashboard;
