import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, CssBaseline, Grid, IconButton } from "@mui/material";
import { useStore, useStoreTemporary, useStoreUser } from "../../../../Zustand";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Firebase";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloseIcon from "@mui/icons-material/Close";

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
      // maxWidth="lg"
    >
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{ borderRadius: "4px", margin: "10px" }}
          >
            <DialogTitle id="alert-dialog-title" style={{ minWidth: 400 }}>
              <h2
                style={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  textAlign: "center",
                  padding: "20px 30px 10xp",
                }}
              >
                Please confirm your booking
              </h2>
            </DialogTitle>
            <DialogContent>
              <Box
                style={{
                  width: "100%",
                  background: "rgb(245, 245, 245)",
                  padding: "10px 0px",
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
                <p style={{ fontWeight: 600, fontSize: 16 }}>
                  Chosen Date and Time
                </p>
                <p>{date}</p>
                <p>{time}</p>
              </Box>
            </DialogContent>

            <DialogActions
              style={{
                margin: "auto",
                color: "black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <Link to="/sessions"> */}
              <Button
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
              {/* </Link> */}
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
              </Button>
            </DialogActions>
          </Grid>
          {/* <Grid
            item
            xs={12}
            sm={6}
            sx={{ background: "yellow", borderRadius: "4px", margin: "10px" }}
          >
            <DialogTitle id="alert-dialog-title" style={{ minWidth: 400 }}>
              <h2
                style={{
                  fontWeight: 600,
                  fontSize: "1.25rem",
                  textAlign: "center",
                  padding: "20px 30px 10xp",
                }}
              >
                Please confirm your booking
              </h2>
            </DialogTitle>
            <DialogContent>
              <Box
                style={{
                  width: "100%",
                  background: "rgb(245, 245, 245)",
                  padding: "10px 0px",
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
                <p style={{ fontWeight: 600, fontSize: 16 }}>
                  Chosen Date and Time
                </p>
                <p>{date}</p>
                <p>{time}</p>
              </Box>
            </DialogContent>

            <DialogActions
              style={{
                margin: "auto",
                color: "black",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to="/sessions">
                <Button
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
              </Link>
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
              </Button>
            </DialogActions>
          </Grid> */}
        </Grid>
      </Box>
    </BootstrapDialog>
  );
}

export default ConfirmBooking;

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    flexGrow: 1,
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

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}
