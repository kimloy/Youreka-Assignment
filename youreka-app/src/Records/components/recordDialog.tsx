import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { RecordsAccount } from "../Model/records";

interface Props {
  open: boolean;
  record: RecordsAccount;
  handleClose: () => void;
}

const useStyles = makeStyles({
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
});

export const RecordDialog = (props: Props) => {
  const { open, record, handleClose } = props;
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{"Use Google's location service?"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Let Google help apps determine location. This means sending anonymous
          location data to Google, even when no apps are running.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
