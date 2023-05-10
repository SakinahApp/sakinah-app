//@ts-nocheck
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import CheckboxesGroup from "./Components/CheckboxesGroup";
import { db } from "../../../Firebase";
import { updateDoc, doc } from "firebase/firestore";
import { useStoreUser } from "../../../Zustand";
import SnackbarX from "./Components/SnackbarX";
import ConditionsTags from "./Components/ConditionsTags";

// Feelings and emotions, complex experiences and states
const situationData = [
  "Apathy",
  "Mood change",
  "Burnout",
  "Depression",
  "Guilt",
];

// Behavior and thoughts, uncontrollable actions
const relationshipData = [
  "Compulsive thoughts",
  "Anger issues",
  "Selfharm",
  "Self-control",
  "Violent trauma",
  "Suicide attempts",
];

// Bad habits and addictions
const workData = [
  "Nicotine withdrawal",
  "Substance abuse",
  "Compuslive behaviour",
  "Consumatory behavior",
];

// Self-relationships, self-esteem, psychosomatics
const psychosomatics = [
  "Life purpose",
  "Self-assessment",
  "Lack of conviction",
  "Loneliness",
];

// Relationships, intimacy, family, sex
const intimacy = [
  "Codependency",
  "Intercourse",
  "Betrayal",
  "Breakup",
  "Paternity",
  "Pregnancy care",
  "LGBTQ-relations",
  "Relationship",
  "Jealousy",
];

// Self-development and changing living conditions
const self_development = [
  "Professional relationship",
  "Crisis",
  "Self-improvement",
  "Finance",
  "New normal",
  "Grief",
  "Trauma",
  "PTSD",
];

// Difficult experiences and states
const difficult_experiences = [
  "Panic attacks ",
  "Chronic stress",
  "Grief",
  "Trauma",
  "Psychosomatics",
];

const styling = {
  borderRadius: 10,
  padding: "10px 5px",
};

export default function MyPreferences() {
  const { userInfo, setUserInfo } = useStoreUser();
  const [preferences, setPreferences] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
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
      setOpen(true);
      setMessage("Your request has been successfully saved!");
    } catch (e) {
      console.error("Error updating user: ", e);
      setOpen(true);
      setMessage("Something went wrong, please try again later.");
    }
  }

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    updateData();
    location.pathname.includes("user-preferences") && navigate("/");
  }

  return (
    <Container
      style={{
        marginTop: location.pathname.includes("user-pref") ? 80 : 0,
        padding: "20px 40px",
      }}
    >
      <SnackbarX
        open={open}
        setOpen={setOpen}
        backgroundColor="#32a676"
        message={message}
      />
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
            flex: 2,
            borderRadius: 8,
            width: "100%",
            display: "flex",
            color: "white",
            justifyContent: "start",
            alignItems: "center",
            flexDirection: "row",
            marginBottom: 20,
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "transparent" }}>
            <AcUnitIcon />
          </Avatar>
          <h2 style={{ fontWeight: 700, fontSize: 20 }}>
            What would you like to discuss with your therapist?
          </h2>
        </div>
        <ConditionsTags />
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12} sm={6} style={styling}>
            <CheckboxesGroup
              title="Feelings and emotions, complex experiences and states"
              data={situationData}
              preferences={preferences}
              setPreferences={setPreferences}
            />
          </Grid>
          <Grid item xs={12} sm={6} style={styling}>
            <CheckboxesGroup
              data={relationshipData}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Behavior and thoughts, uncontrollable actions"
            />
          </Grid>
          <Grid item xs={12} sm={6} style={styling}>
            <CheckboxesGroup
              data={workData}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Bad habits and addictions"
            />
          </Grid>
          <Grid item xs={12} sm={6} style={styling}>
            <CheckboxesGroup
              data={psychosomatics}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Self-relationships, self-esteem, psychosomatics"
            />
          </Grid>
          <Grid item xs={12} sm={6} style={styling}>
            <CheckboxesGroup
              data={intimacy}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Relationships, intimacy, family, sex"
            />
          </Grid>
          <Grid item xs={12} sm={6} style={styling}>
            <CheckboxesGroup
              data={self_development}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Self-development and changing living conditions"
            />
          </Grid>
          <Grid item xs={12} sm={6} style={styling}>
            <CheckboxesGroup
              data={difficult_experiences}
              preferences={preferences}
              setPreferences={setPreferences}
              title="Difficult experiences and states"
            />
          </Grid>
        </Grid>
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
