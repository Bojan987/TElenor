import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#896666",
    },
    secondary: {
      main: "#896666",
    },
    action: {
      active: "#333333",
    },
    success: {
      main: "#006442",
    },
    warning: {
      main: "#BE2528",
    },
    error: {
      main: "#BE2528",
    },
    info: {
      main: "#ffffff",
    },
    background: "#1111",
  },

  typography: {
    // fontFamily: "Roboto,sans-serif",
    color: "#FFFFFF",

    tab: {
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },

    h1: {
      // fontFamily: "Roboto",
      fontSize: "3.5rem",
      fontWeight: 500,
    },
    h2: {
      // fontFamily: "Roboto",
      fontSize: "1.8rem",
      fontWeight: 900,
    },
    h3: {
      // fontFamily: "Roboto",
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
    h5: {
      // fontFamily: "Roboto",
      fontSize: "1rem",
      fontWeight: 300,
    },
    h6: {
      // fontFamily: "Roboto",
      fontSize: "0.9rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.9rem",
      fontWeight: "400",
    },
    body2: {
      color: "#4E5054",
      fontSize: "1rem",
    },
    caption: {
      color: "#4E5054",
      fontSize: "1rem",
    },
    subtitle1: {
      fontFamily: "Bitter",
      fontSize: "1.3rem",
      fontWeight: 500,
    },
    subtitle2: {
      fontFamily: "Bitter",
      fontSize: "0.75rem",
    },
  },

  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          minWidth: "100%",
        },
      },
    },
  },
});

export default theme;
