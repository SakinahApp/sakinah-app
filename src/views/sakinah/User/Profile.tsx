import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../Firebase";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import Card from "../../../components/Cards/Card";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SnackbarX from "./Components/SnackbarX";
import { useStore, useStoreTemporary } from "../../../Zustand";

const theme = createTheme();

function Profile(props: any) {
  const { snackbarOpen, setSnackbarOpen } = useStoreTemporary((state) => state);

  useEffect(() => {
    const timeout = setTimeout(() => setSnackbarOpen(false), 4000);

    return () => clearTimeout(timeout);
  }, [snackbarOpen]);

  return (
    <Grid sx={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
          }}
        >
          {/* <SnackbarX
            open={snackbarOpen}
            setOpen={setSnackbarOpen}
            backgroundColor="#32a676"
            message="Success! Your sessions has been successfully booked"
          /> */}
          <Sidebar />
          <Box
            style={{
              background: "white",
              padding: "20px",
              borderRadius: 5,
              maxWidth: "none",
              height: "calc(100vh - 100px)",
              margin: "5px 10px 10px 5px",
              width: "100%",
              overflowY: "scroll",
            }}
          >
            <Outlet />
          </Box>
        </Grid>
      </ThemeProvider>
    </Grid>
  );
}

export default Profile;
