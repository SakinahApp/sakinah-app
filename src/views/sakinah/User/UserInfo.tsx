import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../../Firebase";
import photo from "../../../assets/images/business-account.png";
import { useStoreUser } from "../../../Zustand";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function UserInfo() {
  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(null);
  const [gender, setGender] = React.useState(null);
  const { setUserInfo } = useStoreUser();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setGender(newAlignment);
  };

  // Add user data with specified ID, if you want with auto generated ID -> use addDoc()
  async function addUser(id: string, name: string, email: string) {
    try {
      const user = await setDoc(doc(db, "users", id), {
        uid: id,
        name: name,
        email: email,
        age: age,
        gender: gender,
        phone: null,
        company: null,
        therapists: [],
        therapistsSessions: [],
        consultationType: [],
      });

      setUserInfo({
        uid: id,
        name: name,
        email: email,
        age: age,
        gender: gender,
        phone: null,
        company: null,
        therapists: [],
        therapistsSessions: [],
        consultationType: [],
      });

      console.log("Document written with ID: ", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Handle register
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (name.length) {
      updateProfile(auth.currentUser, {
        displayName: name,
      })
        .then((user) => {
          // Signed in
          addUser(
            auth.currentUser.uid,
            auth.currentUser.displayName,
            auth.currentUser.email
          );
          navigate("/user-preferences");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    } else {
      console.log("Please enter a name");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: "20px 40px",
        padding: "100px",
        background: "white",
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          maxWidth: "650px",
          background: "#5f6ac40f",
          borderRadius: "8px",
          padding: 5,
          paddingTop: "30px",
          margin: "10px",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "Start",
            fontWeight: 600,
            fontSize: 22,
            margin: "10px 0px",
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: "rgb(95, 106, 196)" }}>
            <SettingsIcon />
          </Avatar> */}
          Profile details
        </p>
        <p>Enter details to set up ypur account (*Use any name)</p>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{ mt: 5, maxWidth: 500 }}
        >
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                type="number"
                fullWidth
                label="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <ToggleButtonGroup
                color="primary"
                value={gender}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                style={{ borderColor: "#e5e7eb", height: 56 }}
              >
                <ToggleButton
                  value="male"
                  style={{
                    display: "flex",
                    flex: 1,
                    width: 250,
                    borderColor: "#e5e7eb",
                  }}
                >
                  Male
                </ToggleButton>
                <ToggleButton
                  value="female"
                  style={{
                    display: "flex",
                    flex: 1,
                    width: 250,
                    borderColor: "#e5e7eb",
                  }}
                >
                  Female
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 8, mb: 2, background: "rgb(226, 109, 128)" }}
          >
            Next
          </Button>
        </Box>
      </Box>
      <img src={photo} style={{ width: 450 }} alt="profile" />
    </Box>
  );
}
