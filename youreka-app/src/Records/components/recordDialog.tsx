import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { RecordsAccount } from "../Model/records";
import { RECORD_STRINGS } from "../strings";

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
      fullWidth
      BackdropProps={{
        classes: {
          root: classes.backDrop,
        },
      }}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>{record.Name}</DialogTitle>
      <DialogContent>
        <DialogContentText component="span" variant="body2">
          <div>
            <p>
              {RECORD_STRINGS.WEBSITE}: {record.Website}
            </p>
            <p>
              {RECORD_STRINGS.ACCOUNT_NUMBER}: {record.AccountNumber}
            </p>
            <p>
              {RECORD_STRINGS.ACCOUNT_REVENUE}: $
              {record.AnnualRevenue === null ? 0 : record.AnnualRevenue}
            </p>
          </div>
          <Divider />
          <h4>{RECORD_STRINGS.CONTACTS}</h4>
          {record.Contacts.records.map((contact) => (
            <div key={contact.Id}>
              <p>
                {RECORD_STRINGS.NAME}: {contact.Name}
              </p>
              <p>
                {RECORD_STRINGS.TITLE}: {contact.Title}
              </p>
              <p>
                {RECORD_STRINGS.DEPARTMENT}: {contact.Department}
              </p>
              <p>
                {RECORD_STRINGS.EMAIL}: {contact.Email}
              </p>
              <Divider />
            </div>
          ))}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
