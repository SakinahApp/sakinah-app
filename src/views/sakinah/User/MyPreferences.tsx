//@ts-nocheck
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import CheckboxesGroup from "./Components/CheckboxesGroup";
import { db } from "../../../Firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useStoreUser } from "../../../Zustand";

const situationData = [
  "Feeling sad",
  "feeling medium",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
  "feeling Low",
  "Happy",
];
const relationshipData = [
  "Anxious",
  "Depressed",
  "Feeling sad",
  "feeling Low",
  "Happy",
  "feeling Low",
  "Happy",
];
const workData = [
  "Performance",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
  "Feeling sad",
  "feeling Low",
  "Happy",
];

const styling = {
  background: "rgb(245, 245, 245)",
  borderRadius: 10,
  margin: "20px 10px",
  padding: "10px 30px",
};

export default function MyPreferences() {
  const { userInfo, setUserInfo } = useStoreUser();
  const [preferences, setPreferences] = React.useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  // if user already have preferences, load them
  React.useEffect(() => {
    if (userInfo?.consultationType?.length > 0) {
      !location.pathname.includes("user-preferences") &&
        setPreferences(userInfo?.consultationType);
    }
  }, []);

  // Update user data -> add preferences
  async function updateData() {
    const userDoc = doc(db, "users", userInfo.uid);
    try {
      await updateDoc(userDoc, { consultationType: preferences });
      setUserInfo({ ...userInfo, consultationType: preferences });
    } catch (e) {
      console.error("Error updating user: ", e);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    updateData();
    location.pathname.includes("user-preferences") && navigate("/");
  }

  return (
    <Container
      style={{ marginTop: location.pathname.includes("user-pref") ? 80 : 0 }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            boxShadow: "none",
            background: "rgb(95, 106, 196)",
            padding: "10px 20px",
            flex: 2,
            margin: 10,
            borderRadius: 8,
            width: "100%",
            display: "flex",
            color: "white",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "transparent" }}>
            <AcUnitIcon />
          </Avatar>
          <h2 style={{ fontWeight: 700, fontSize: 20 }}>
            What would you like to discuss with your therapist?
          </h2>
        </div>
        <Box
          sx={{
            mt: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box style={styling}>
            <CheckboxesGroup
              data={situationData}
              preferences={preferences}
              setPreferences={setPreferences}
              title="My Situation"
            />
          </Box>
          <Box style={styling}>
            <CheckboxesGroup
              data={relationshipData}
              preferences={preferences}
              setPreferences={setPreferences}
              title="My Relationship"
            />
          </Box>
          <Box style={styling}>
            <CheckboxesGroup
              data={workData}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Work, study"
            />
          </Box>
          <Box style={styling}>
            <CheckboxesGroup
              data={workData}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Work, study"
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          onClick={handleClick}
          style={{
            margin: 20,
            background: "rgb(226, 109, 128)",
            boxShadow: "none",
            padding: "5px 20px",
          }}
        >
          Save
        </Button>
      </Box>
    </Container>
  );
}
