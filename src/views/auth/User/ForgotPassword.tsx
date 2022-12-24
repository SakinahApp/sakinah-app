import { Alert, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { Link, Navigate } from "react-router-dom";
import { auth } from "../../../Firebase";

function ForgotPassword(props) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(auth, email)
      .then(() => {
        setMessage("Please check your email");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorMessage", errorMessage);
        // ..
      });
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <CssBaseline />

      <Typography component="h1" variant="h5" mb="10px">
        Reset Password
      </Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {message && <Alert severity="success">{message}</Alert>}
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3 }}>
        Reset password
      </Button>
      <Link to="/auth/login">
        <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
          Go to Login
        </Button>
      </Link>
    </Box>
  );
}

export default ForgotPassword;
