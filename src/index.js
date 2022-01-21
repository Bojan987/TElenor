import React from "react";
import ReactDOM from "react-dom";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import GlobalStyles from "@mui/material/GlobalStyles";
import theme from "./theme/theme";

import App from "./App";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles
      styles={{
        body: {
          backgroundColor: "#111",
          color: "#ffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
        },
      }}
    />

    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
