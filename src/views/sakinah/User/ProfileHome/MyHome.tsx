import React from "react";
import NoUpcomingSession from "../Components/NoUpcomingSession";
import TherapistAvatars from "../Components/TherapistAvatars";
import welcomeImage from "./subscribe.svg";
import { useStore } from "../../../../Zustand";
import { auth } from "../../../../Firebase";

function MyHome() {
  const { userInfo } = useStore((state) => state);
  const userName = auth.currentUser.displayName;
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ display: "flex" }}>
        <div
          style={{
            background: "#5f6ac4",
            padding: "20px 30px 30px",
            flex: 1,
            margin: 10,
            borderRadius: 8,
            color: "white",
            // height: "100%",
          }}
        >
          <h3 style={{ marginBottom: 20, fontWeight: 600, fontSize: 22 }}>
            As-salamu alaykum, {userName}! 🙂
          </h3>
          <p>
            We are glad that you have taken the step to seek support and
            guidance for your mental health and well-being. We are here to
            provide a safe and confidential space for you to share your
            thoughts, feelings, and experiences.
          </p>
          <br />
          <p>
            May Allah bless and guide you on your journey towards healing and
            growth.
          </p>
          <img
            src={welcomeImage}
            style={{ width: 400, margin: "auto" }}
            alt=""
          />
        </div>
        <div style={{ display: "flex", flex: 2, flexDirection: "column" }}>
          <NoUpcomingSession />
          <TherapistAvatars />
        </div>
      </div>
      {/* <div style={{ display: "flex", height: "100%" }}>
        <div
          style={{
            background: "#5f6ac4",
            padding: "20px 20px 30px",
            flex: 1,
            margin: 10,
            borderRadius: 8,
            color: "white",
            height: "100%",
          }}
        >
          How to deal with mental health?
        </div>
        <div
          style={{
            background: "#5f6ac4",
            padding: "20px 20px 30px",
            flex: 1,
            margin: 10,
            borderRadius: 8,
            color: "white",
            height: "100%",
          }}
        >
          How to deal with mental health?
        </div>
      </div> */}
    </div>
  );
}

export default MyHome;
