import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    minWidth: 600,
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
    minWidth: 600,
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
    <DialogTitle sx={{ m: 0, p: "20px 30px 0px", fontWeight: 600 }} {...other}>
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

export default function ConfirmationModal({
  openConfirm,
  setOpenConfirm,
  action,
  message,
  topic,
}) {
  const handleNo = () => {
    setOpenConfirm(false);
  };

  const handleYes = () => {
    action();
    setOpenConfirm(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleNo}
        aria-labelledby="customized-dialog-title"
        open={openConfirm}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleNo}>
          {topic}
        </BootstrapDialogTitle>
        <DialogContent style={{ padding: "15px 30px 10px" }}>
          <Typography gutterBottom>{message}</Typography>
        </DialogContent>
        <DialogActions style={{ padding: "10px 20px 15px" }}>
          <Button onClick={handleNo} style={{ color: "rgba(0, 0, 0, 0.87)" }}>
            No
          </Button>
          <Button
            onClick={handleYes}
            autoFocus
            style={{ backgroundColor: "rgb(95, 106, 196)", color: "white" }}
          >
            Yes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
