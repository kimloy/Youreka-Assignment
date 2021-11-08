import React from "react";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { SearchContainer } from "./components/Search";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { RecordsContainer } from "./Records";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00c4cb",
      light: "#47afa5",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d63939",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <RecordsContainer />
      </ThemeProvider>
    </>
  );
}

export default App;
