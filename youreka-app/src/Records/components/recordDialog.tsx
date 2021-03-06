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
              {RECORD_STRINGS.WEBSITE}:{" "}
              {record.Website ? (
                <a href={`mailto:${record.Website}`}>{record.Website}</a>
              ) : (
                RECORD_STRINGS.NA
              )}
            </p>
            <p>
              {RECORD_STRINGS.ACCOUNT_NUMBER}:{" "}
              {record.AccountNumber ? record.AccountNumber : RECORD_STRINGS.NA}
            </p>
            <p>
              {RECORD_STRINGS.ACCOUNT_REVENUE}:{" "}
              {record.AnnualRevenue ? record.AnnualRevenue : RECORD_STRINGS.NA}
            </p>
          </div>
          <Divider />
          <h4>{RECORD_STRINGS.CONTACTS}</h4>
          {record.Contacts.records.map((contact) => (
            <div key={contact.Id}>
              <p>
                {RECORD_STRINGS.NAME}:{" "}
                {contact.Name ? contact.Name : RECORD_STRINGS.NA}
              </p>
              <p>
                {RECORD_STRINGS.TITLE}:{" "}
                {contact.Title ? contact.Title : RECORD_STRINGS.NA}
              </p>
              <p>
                {RECORD_STRINGS.DEPARTMENT}:{" "}
                {contact.Department ? contact.Department : RECORD_STRINGS.NA}
              </p>
              <p>
                {RECORD_STRINGS.EMAIL}:{" "}
                {contact.Email ? (
                  <a href={`mailto:${contact.Email}`}>{contact.Email}</a>
                ) : (
                  RECORD_STRINGS.NA
                )}
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
