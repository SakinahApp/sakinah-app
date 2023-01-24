import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { auth } from "../../../Firebase";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import AddToHomeScreenIcon from '@mui/icons-material/AddToHomeScreen';


export default function SignInPhone() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [code, setCode] = React.useState("");
  const [expandForm, setExpandForm] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('')


  // STEPS: 
  // 1. Once user clicks the button
  // 2. We expand the form
  // 3. We generate reCaptcha
  // 4. The we sent OTP out to the user
  // 5. Once the user write the code, we confirm it and sign in the user 


  function generateRecaptcha() {
    window.recaptchaVerifier = new RecaptchaVerifier('reCaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
      }
    }, auth);
  }


  function requestOTP(e) {
    e.preventDefault();
    if (phoneNumber.length >= 12) {
      setExpandForm(true)
      generateRecaptcha()

      const appVerifier = window.recaptchaVerifier; // here we get reCaptcha that has been generated by calling window.recaptchaVerifier from global window 

      signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
        })
        .catch((error) => {
          setErrorMessage(error?.errors?.message)
          console.log(error)
        });
    }
  }


  // Here we verify OPT
  const verifyOTP = (e) => {
    e.preventDefault();
    let otpInput = e.target.value
    setCode(otpInput)

    if (otpInput.length === 6) {
      //verify OTP 

      let confirmationResult = window.confirmationResult;

      // Once the user write the code, we confirm OTP and, if it is correct we sign in the user 
      confirmationResult
        .confirm(otpInput)
        .then(function (result) {
          // User signed in successfully.
          let user = result.user;
          navigate('/')
          console.log('verifyOTP user', user)
        })
        .catch(function (error) {
          console.log(error);
          // alert("Incorrect OTP");
        });
    }
  };


  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "450px",
        background: "#5f6ac40f",
        borderRadius: "8px",
        padding: 5,
        paddingTop: "30px",
        margin: "10px",
      }}
    >
      <CssBaseline />
      <Avatar sx={{ m: 1, bgcolor: "rgb(95, 106, 196)", marginBottom: 2 }}>
        <AddToHomeScreenIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in with phone number
      </Typography>
      <Box
        component="form"
        onSubmit={(event) => (requestOTP(event))}
        noValidate
        sx={{ mt: 1, width: '100%' }}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          id="phone"
          label="Enter your phone number"
          name="phone"
          autoComplete="email"
          autoFocus
          style={{ width: '100%' }}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {/* <p>Please enter your phone number</p> */}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, }}
        >
          Send code
        </Button>
      </Box>
      {
        expandForm &&
        <Box
          noValidate
          sx={{ mt: 1, width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            name="code"
            type="number"
            style={{ width: '100%' }}
            autoComplete="current-password"
            value={code}
            onChange={(e) => verifyOTP(e)}
          />
          <p>Please enter the code sent to your phone</p>
        </Box>
      }
      <p style={{ color: 'grey' }}>or</p>
      <Link to="/auth/login" style={{ width: '100%' }}>
        <Button
          fullWidth
          variant="outlined"
          sx={{ mt: 3, mb: 2, width: '100%' }}
        >
          Sign In with Email
        </Button>
      </Link>
      <div id="reCaptcha-container"></div>
    </Box>
  );
}
