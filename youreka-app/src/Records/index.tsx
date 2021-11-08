import React from "react";
import { makeStyles } from "@mui/styles";
import { SearchContainer } from "../components/Search";
import { MenuItem, Select } from "@mui/material";

const useStyles = makeStyles({
  recordsSearchBar: {
    display: "block",
    marginTop: "5%",
    textAlign: "center",
  },
  recordsSelect: {
    marginLeft: "1rem",
  },
});

export const RecordsContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.recordsSearchBar}>
      <SearchContainer />
      <Select className={classes.recordsSelect} label="Age">
        <MenuItem value="account">Account</MenuItem>
        <MenuItem value="contact">Contact</MenuItem>
      </Select>
    </div>
  );
};
