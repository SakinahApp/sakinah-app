import * as React from "react";
import { deleteUser } from "firebase/auth";
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
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import SnackbarX from "./Components/SnackbarX";
import { sendPasswordResetEmail } from "firebase/auth";
import { Alert } from "@mui/material";
import ConfirmationModal from "../../../components/Confirm/ConfirmationModal";

export default function MySettings() {
  const { userInfo } = useStoreUser((state) => state);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [email, setEmail] = React.useState(userInfo?.email || "");
  const [emailMessage, setEmailMessage] = React.useState("");
  const user = auth.currentUser; // Curent user

  //Snackbar
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  // Onmount set user information
  React.useEffect(() => {
    setCurrentUser({
      ...currentUser,
      name: userInfo.name,
      age: userInfo.age,
      gender: userInfo.gender,
    });
  }, []);

  // Reset Password
  const [openConfirmPassword, setOpenConfirmPassword] = React.useState(false);
  function resetPassword() {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setEmailMessage(
          "Password reset email sent! Please follow the link on your email to reset your password."
        );
      })
      .catch((error) => {
        setEmailMessage("Something went wrong!");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  // set gender
  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    gender: string
  ) => {
    setCurrentUser({ ...currentUser, gender: gender });
  };

  console.log("userInfo", userInfo);
  console.log("currentUser :>> ", currentUser);

  // Update user data
  const [openConfirmUpdate, setOpenConfirmUpdate] = React.useState(false);
  async function updateData() {
    const userDoc = doc(db, "users", userInfo?.uid);
    try {
      const user = await updateDoc(userDoc, currentUser);
      setOpen(true);
      setMessage("Your information has been updated!");
      console.log("Updated user: ", user);
    } catch (e) {
      setMessage("Something went wrong");
      setOpen(true);
    }
  }

  // Delete user data
  const [openConfirmDelete, setOpenConfirmDelete] = React.useState(false);
  async function deleteUserAccount() {
    const userDoc = doc(db, "users", userInfo?.uid);
    await deleteDoc(userDoc);

    deleteUser(user)
      .then(() => {
        setMessage("Your acount has been deleted");
        setOpen(true);
      })
      .catch((error) => {
        setMessage("Something went wrong");
        setOpen(true);
      });
  }

  // Handle Submit button
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateData();
  };

  return (
    <>
      <CssBaseline />
      <ConfirmationModal
        openConfirm={openConfirmDelete}
        setOpenConfirm={setOpenConfirmDelete}
        action={deleteUserAccount}
        topic="Delete"
        message="Are you sure you want to delete your account?"
      />
      <ConfirmationModal
        openConfirm={openConfirmPassword}
        setOpenConfirm={setOpenConfirmPassword}
        action={resetPassword}
        topic="Reset Password"
        message="Are you sure you want to reset your password?"
      />
      <ConfirmationModal
        openConfirm={openConfirmUpdate}
        setOpenConfirm={setOpenConfirmUpdate}
        action={updateData}
        topic="Update Information"
        message="Are you sure you want to update your information?"
      />

      <SnackbarX
        open={open}
        setOpen={setOpen}
        backgroundColor="#32a676"
        message={message}
      />
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
              {/* <Grid item xs={12}>
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
              </Grid> */}
            </Grid>
            <Button
              onClick={() => setOpenConfirmUpdate(true)}
              // type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 8, mb: 2, background: "rgb(226, 109, 128)" }}
            >
              Update
            </Button>
            <Button
              onClick={() => setOpenConfirmDelete(true)}
              style={{
                width: "100%",
                marginBottom: "16px",
                color: "rgb(226, 109, 128)",
                border: "1px solid rgb(226, 109, 128)",
              }}
            >
              Delete My Profile
            </Button>
            <Button
              onClick={() => setOpenConfirmPassword(true)}
              style={{
                width: "100%",
                color: "#1976d2",
                border: "1px solid #1976d2",
                marginRight: "10px",
              }}
            >
              Change Password
            </Button>
            {emailMessage && (
              <Alert severity="success" style={{ marginTop: 10 }}>
                {emailMessage}
              </Alert>
            )}
          </Box>
          <img src={photo} style={{ width: 400 }} alt="profile" />
        </Box>
      </Box>
    </>
  );
}
