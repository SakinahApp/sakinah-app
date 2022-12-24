import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackbarX({ open, setOpen, message, backgroundColor }) {
  return (
    <Stack
      spacing={2}
      sx={{ width: "100%", position: "absolute", zIndex: 99999 }}
    >
      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        style={{ background: "transparent" }}
      >
        <Alert
          onClose={() => setOpen(false)}
          sx={{ width: "100%", background: backgroundColor }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
