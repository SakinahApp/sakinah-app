import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from "../../../Firebase";
import photo from "../../../assets/images/business-account.png";
import { useStore } from "../../../Zustand";
import { updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";

export default function UserInfo() {
  const { userInfo } = useStore((state) => state);

  const navigate = useNavigate();
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(null);
  const [gender, setGender] = React.useState(null);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setGender(newAlignment);
  };

  // Add user data
  async function addUser(id: string, name: string, email: string) {
    try {
      const user = await addDoc(collection(db, "users"), {
        id: id,
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
        photoURL: "https://example.com/jane-q-user/profile.jpg",
      })
        .then((user) => {
          // Signed in
          addUser(
            auth.currentUser.uid,
            auth.currentUser.displayName,
            auth.currentUser.email
          );
          navigate("/");
          console.log("auth.currentUser :>> ", auth.currentUser);
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
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "start",
          margin: "20px 40px",
          padding: "100px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              display: "flex",
              alignItems: "center",
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
          <p>
            Please fill basic information about yourself. (*You can use any
            name)
          </p>
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
    </>
  );
}
