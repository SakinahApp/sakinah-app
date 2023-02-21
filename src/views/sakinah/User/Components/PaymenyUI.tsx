import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, InputAdornment, Typography } from "@mui/material";
import AddCardIcon from "@mui/icons-material/AddCard";
import NumbersIcon from "@mui/icons-material/Numbers";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export default function PaymentUI({ handleBook, setOpen }) {
  const [cardNumber, setCardNumber] = React.useState({
    number: null,
    cvv: null,
    expiryDate: null,
  });

  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "10px 20px 10px 0px",
        // background: "grey",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        sx={{
          fontWeight: 600,
          marginBottom: 5,
          fontSize: "1.5rem",
        }}
      >
        Payment
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{ fontWeight: 600, color: "rgb(50, 50, 93)", marginBottom: 1 }}
        >
          Card Number
        </Typography>
        <TextField
          type="number"
          fullWidth
          id="outlined-basic"
          variant="outlined"
          helperText="Enter the 16-digit card number on the card"
          value={cardNumber.number}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddCardIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            marginTop: 3,
          }}
        >
          <Box sx={{ width: "100%", marginRight: 2 }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "rgb(50, 50, 93)",
                marginBottom: 1,
              }}
            >
              CVV
            </Typography>
            <TextField
              fullWidth
              type="number"
              id="outlined-basic"
              variant="outlined"
              helperText="Enter the CVV number on the card"
              value={cardNumber.cvv}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <NumbersIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Typography
              sx={{
                fontWeight: 600,
                color: "rgb(50, 50, 93)",
                marginBottom: 1,
              }}
            >
              Expiry Date
            </Typography>
            <TextField
              fullWidth
              sx={{}}
              id="outlined-basic"
              type="number"
              variant="outlined"
              helperText="Enter the expiration date of the card"
              value={cardNumber.expiryDate}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonthIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            onClick={handleBook}
            style={{
              background: "rgb(50, 50, 93)",
              color: "white",
              width: "100%",
            }}
          >
            Pay Now
          </Button>
          <Button
            onClick={() => setOpen(false)}
            style={{
              background: "#ededed",
              marginTop: "10px",
              color: "rgb(50, 50, 93)",
              width: "100%",
            }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
