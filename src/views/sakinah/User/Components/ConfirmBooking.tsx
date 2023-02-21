import React from "react";
import { Link } from "react-router-dom";
import calendar from "../images/calendar.svg";
import {
  Box,
  Button,
  CssBaseline,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useStore, useStoreTemporary, useStoreUser } from "../../../../Zustand";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Firebase";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import PaymentUI from "./PaymenyUI";

function ConfirmBooking({
  therapist,
  open,
  setOpen,
  date,
  time,
  setOpenSnackbar,
}) {
  const { setUpcomingSession } = useStore((state) => state);
  const { userInfo, setUserInfo } = useStoreUser((state) => state);

  // Add a new session with a generated id.
  async function addSession() {
    try {
      await addDoc(collection(db, "therapy-session"), {
        // room_code: Math.floor(100000 + Math.random() * 900000),
        therapist_id: therapist.id,
        therapist_name: therapist.fullName,
        therapist_email: therapist.email || null,
        time: time,
        date: date,
        type: "single",
        user_id: userInfo.uid,
        user_name: userInfo.name,
        user_email: userInfo.email,
        cancel: false,
        price: therapist.price,
      });
      setOpenSnackbar(true);
      return;
    } catch (e) {
      console.log(e);
      return;
    }
  }

  function handleBook() {
    setOpen(false);
    addSession();
    setUpcomingSession({ ...therapist, date: date, time: time });
  }

  return (
    <BootstrapDialog
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
      maxWidth="lg"
    >
      <CssBaseline />
      <Grid container sx={{ padding: 5 }}>
        <Grid item xs={12} sm={9} sx={{ borderRadius: "4px" }}>
          <PaymentUI handleBook={handleBook} setOpen={setOpen} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={3}
          sx={{
            borderRadius: "4px",
            background: "rgba(226, 230, 251, 0.3)",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <DialogTitle id="alert-dialog-title">
            <h2
              style={{
                fontWeight: 600,
                fontSize: "1.2rem",
                textAlign: "center",
                padding: "20px 30px 10xp",
              }}
            >
              Chosen Date and Time
            </h2>
          </DialogTitle>
          <DialogContent>
            <Box
              style={{
                width: "100%",
                background: "white",
                padding: "10px 0px 20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "10px auto",
                maxWidth: 270,
                fontSize: 16,
                borderRadius: "6px",
              }}
            >
              <List>
                <ListItem disablePadding>
                  <ListItemButton
                    className="onHover"
                    style={{
                      color: "black",
                      borderRadius: 5,
                      marginBottom: 5,
                    }}
                  >
                    <ListItemIcon
                      style={{
                        color: "inherit",
                        fontWeight: 600,
                        fontSize: 19,
                      }}
                    >
                      <CalendarMonthIcon
                        style={{ width: 30, height: 30, marginRight: 5 }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={date} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    className="onHover"
                    style={{
                      color: "black",
                      borderRadius: 5,
                      marginBottom: 5,
                    }}
                  >
                    <ListItemIcon style={{ color: "inherit", fontWeight: 600 }}>
                      <AccessTimeIcon
                        style={{ width: 30, height: 30, marginRight: 5 }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={time} />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton
                    className="onHover"
                    style={{
                      color: "black",
                      borderRadius: 5,
                      marginBottom: 5,
                    }}
                  >
                    <ListItemIcon style={{ color: "inherit", fontWeight: 600 }}>
                      <PersonIcon
                        style={{ width: 30, height: 30, marginRight: 5 }}
                      />
                    </ListItemIcon>
                    <ListItemText primary={therapist.fullName} />
                  </ListItemButton>
                </ListItem>
              </List>
              <img
                style={{
                  color: "aqua",
                  height: 100,
                  marginTop: 20,
                }}
                src={calendar}
                alt="calendar"
              />
            </Box>
          </DialogContent>
          <Divider style={{ color: "red" }} />
          <DialogActions
            style={{
              margin: "auto",
              color: "black",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <p style={{ fontSize: 10 }}>You have to Pay</p>
            <h2 style={{ fontSize: 30 }}>
              £ <strong>{therapist.price}</strong>
            </h2>
            {/* <Button
              onClick={handleBook}
              color="inherit"
              style={{
                borderRadius: "4px",
                backgroundColor: "rgb(95, 106, 196)",
                color: "white",
                padding: "5px 20px",
                width: "100px",
                boxShadow: "none",
                margin: 5,
              }}
            >
              Book
            </Button>
            <Button
              onClick={() => setOpen(false)}
              color="inherit"
              style={{
                padding: "5px 20px",
                width: "100px",
                margin: 5,
              }}
            >
              Cancel
            </Button> */}
          </DialogActions>
        </Grid>
      </Grid>
    </BootstrapDialog>
  );
}

export default ConfirmBooking;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    flexGrow: 1,
    height: "50vh",
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    flexGrow: 1,
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}
