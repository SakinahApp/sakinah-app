import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/material/Typography";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../Firebase";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <a color="inherit" href="#">
        Your Website
      </a>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log("user :>> ", user);
        if (user.emailVerified) {
          return user.displayName ? navigate("/") : navigate("/user-info");
        } else {
          return setError("Please verify your email");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        if (errorMessage.includes("user-not-found")) {
          return setError("Please sign up first");
        } else if (errorMessage.includes("auth/wrong-password")) {
          return setError("Incorrect password");
        } else if (errorMessage.includes("invalid-email")) {
          return setError("Please enter a valid email");
        } else {
          return setError(errorMessage);
        }
      });
  };

  return (
    <>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container style={{ display: "flex", justifyContent: "column" }}>
            <Grid
              item
              margin="auto"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <NavLink to="/auth/forgot-password">
                <span style={{ textDecoration: "underline", color: "#1976d2" }}>
                  Forgot password?
                </span>
              </NavLink>
            </Grid>
            <Grid
              item
              margin="auto"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
              }}
            >
              <NavLink to="/auth/signup">
                Don't have an account?{" "}
                <span style={{ textDecoration: "underline", color: "#1976d2" }}>
                  Sign Up
                </span>
              </NavLink>
            </Grid>
          </Grid>
          <p style={{ textAlign: "center", color: "grey", margin: 0 }}>or</p>
          <Link to="/auth/login-phone">
            <Button fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
              Sign In with Phone
            </Button>
          </Link>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
    </>
  );
}
