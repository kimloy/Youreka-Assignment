import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
