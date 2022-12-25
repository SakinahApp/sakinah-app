import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { auth, db } from "../../../Firebase";
import photo from "../../../assets/images/business-account.png";
import { useStoreUser } from "../../../Zustand";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export default function MySettings() {
  const { userInfo } = useStoreUser((state) => state);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [email, setEmail] = React.useState(userInfo?.email || "");

  // set gender
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setCurrentUser({ ...currentUser, gender: newAlignment });
  };

  // Fetch users data - ALL USERS
  // React.useEffect(() => {
  //   async function fetchData() {
  //     const usersData = await getDocs(collection(db, "users"));
  //     const arrayUsers = usersData.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     setCurrentUser(arrayUsers[0]);
  //   }
  //   fetchData();
  // }, []);

  // Add user data
  async function addUser() {
    try {
      const user = await addDoc(collection(db, "users"), {
        name: currentUser?.name,
        age: currentUser?.age,
        gender: currentUser?.gender,
      });
      console.log("Document written with ID: ", user);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  // Update user data
  async function updateData(id: string) {
    const userDoc = doc(db, "users", id);
    try {
      const user = await updateDoc(userDoc, {
        name: currentUser.name,
      });
      console.log("Updated user: ", user);
    } catch (e) {
      console.error("Error updating user: ", e);
    }
  }

  // Delete user data
  async function deleteData(id: string) {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  }

  // Handle Submit button
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // updateData();
    // deleteData("AMtfntrB8PZUs3fx6Ui8");
    // addUser();
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          margin: "20px 40px",
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
        <p>Change your basix account settings here</p>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
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
                  value={currentUser?.name}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, name: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  type="number"
                  fullWidth
                  label="Age"
                  value={currentUser?.age}
                  onChange={(e) =>
                    setCurrentUser({ ...currentUser, age: e.target.value })
                  }
                />
              </Grid>
              <Grid item xs={6}>
                <ToggleButtonGroup
                  color="primary"
                  value={currentUser?.gender || "male"}
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
                      width: 117,
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
                      width: 117,
                      borderColor: "#e5e7eb",
                    }}
                  >
                    Female
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  value={email}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button>Change Password</Button>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 8, mb: 2, background: "rgb(226, 109, 128)" }}
            >
              Update
            </Button>
          </Box>
          <img src={photo} style={{ width: 400 }} alt="profile" />
        </Box>
      </Box>
    </>
  );
}
