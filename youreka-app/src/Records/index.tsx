import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { apiResponse } from "../api";
import { Records } from "./Model/records";
import { EmptyRecord } from "./Model/emptyRecords";
import { RecordDialog } from "./components/recordDialog";

const useStyles = makeStyles({
  recordsSearchBar: {
    display: "block",
    marginTop: "5%",
    textAlign: "center",
  },
  recordSearch: {
    width: "65%",
  },
  recordSearchButton: {
    marginLeft: "1rem",
    marginTop: ".5rem",
  },
  recordsSelect: {
    width: "30%",
    marginLeft: "1rem",
  },
  recordsGrid: {
    marginTop: "5%",
    padding: "0 5%",
  },
  recordsCard: {
    border: "1px solid",
    padding: "10px",
    boxShadow: "1px 5px black",
  },
  recordsCardActions: {
    margin: "auto",
  },
  backDrop: {
    backdropFilter: "blur(3px)",
    backgroundColor: "rgba(0,0,30,0.4)",
  },
  recordsUpSell_Yes: {
    color: "green",
  },
  recordsUpsell_Maybe: {
    color: "#ffeb3b",
  },
});

export const RecordsContainer = () => {
  const classes = useStyles();
  const [searchBarText, setSearchBarText] = useState<string>("");
  const [records, setRecords] = useState<Records>(EmptyRecord);
  const [filterRecords, setFilterRecords] = useState<Records>(EmptyRecord);
  const [openCard, setOpenCard] = useState<boolean>(false);
  const [recordIndex, setRecordIndex] = useState<number>(0);

  useEffect(() => {
    const records: Records = apiResponse;
    setRecords(records);
    setFilterRecords(records);
  }, []);

  useEffect(() => {
    const currRecords = records;
    const filterCurrRecord = currRecords.records.filter((record) => {
      return record.Name?.toLowerCase().includes(searchBarText.toLowerCase());
    });
    const updatedRecords = { ...currRecords, records: filterCurrRecord };
    setFilterRecords(updatedRecords);
  }, [records, searchBarText]);

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarText(event.target.value);
  };

  const handleOpenClick = (index: number) => {
    setOpenCard(true);
    setRecordIndex(index);
  };

  const handleCloseClick = () => {
    setOpenCard(false);
  };

  const displayPriority = (upSellOpportunity: string | null) => {
    const priority =
      upSellOpportunity === "No" ? null : (
        <div>
          <IconButton
            aria-label="settings"
            className={
              upSellOpportunity === "Yes"
                ? classes.recordsUpSell_Yes
                : classes.recordsUpsell_Maybe
            }
          >
            <AttachMoneyIcon />
          </IconButton>
        </div>
      );
    return priority;
  };

  return (
    <div className={classes.recordsSearchBar}>
      <TextField
        className={classes.recordSearch}
        placeholder={"Account or Contact"}
        value={searchBarText}
        onChange={handleTextChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />

      <Button className={classes.recordSearchButton} variant="contained">
        Search
      </Button>

      <RecordDialog
        open={openCard}
        record={records.records[recordIndex]}
        handleClose={handleCloseClick}
      />

      <Grid className={classes.recordsGrid} container spacing={2}>
        {filterRecords.records.map((element, index) => (
          <Grid item key={element.Id} xs={12} md={6} lg={4}>
            <Card className={classes.recordsCard}>
              <CardHeader
                action={displayPriority(element.UpsellOpportunity__c)}
                title={element.Name}
              ></CardHeader>
              <Divider />
              <CardContent>
                <Typography variant="body2">
                  <p>Website: {element.Website}</p>
                  <p>Account-Number: {element.AccountNumber}</p>
                  <p>
                    Annual-Revenue: $
                    {element.AnnualRevenue === null ? 0 : element.AnnualRevenue}
                  </p>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.recordsCardActions}
                  onClick={() => handleOpenClick(index)}
                  variant="contained"
                >
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
