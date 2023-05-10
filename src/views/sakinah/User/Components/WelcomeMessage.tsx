import React from "react";
import welcomeImage from "../images/welcomeImage.svg";

function WelcomeMessage(props) {
  return (
    <div
      style={{
        background: "#5f6ac4",
        padding: "20px 30px 30px",
        flex: 1,
        margin: 10,
        borderRadius: 8,
        color: "white",
        maxWidth: "450px",
      }}
    >
      <h3 style={{ marginBottom: 20, fontWeight: 600, fontSize: 22 }}>
        As-salamu aleikum! 🙂
      </h3>
      <p>
        We are glad that you have taken the step to seek support and guidance
        for your mental health and well-being. We are here to provide a safe and
        confidential space for you to share your thoughts, feelings, and
        experiences.
      </p>
      <br />
      <p>
        May Allah bless and guide you on your journey towards healing and
        growth.
      </p>
      <img src={welcomeImage} style={{ width: 400, margin: "auto" }} alt="" />
    </div>
  );
}

export default WelcomeMessage;
