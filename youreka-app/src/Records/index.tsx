import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
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
import { useStyles } from "./styles";
import { RECORD_STRINGS } from "./strings";

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

      <Grid
        className={classes.recordsGrid}
        component="span"
        container
        spacing={2}
      >
        {filterRecords.records.map((element, index) => (
          <Grid item key={element.Id} xs={12} md={6} lg={4}>
            <Card className={classes.recordsCard}>
              <CardHeader
                action={displayPriority(element.UpsellOpportunity__c)}
                title={element.Name}
              />
              <Divider />
              <CardContent>
                <Typography component="span" variant="body2">
                  <div>
                    <p>
                      {RECORD_STRINGS.WEBSITE}:{" "}
                      {element.Website ? element.Website : RECORD_STRINGS.NA}
                    </p>
                    <p>
                      {RECORD_STRINGS.ACCOUNT_NUMBER}:{" "}
                      {element.AccountNumber
                        ? element.AccountNumber
                        : RECORD_STRINGS.NA}
                    </p>
                    <p>
                      {RECORD_STRINGS.ACCOUNT_REVENUE}:{" "}
                      {element.AnnualRevenue
                        ? element.AnnualRevenue
                        : RECORD_STRINGS.NA}
                    </p>
                  </div>
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  className={classes.recordsCardActions}
                  onClick={() => handleOpenClick(index)}
                  variant="contained"
                >
                  {RECORD_STRINGS.LEARN_MORE}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
