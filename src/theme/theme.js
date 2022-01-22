import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff",
    },
    secondary: {
      main: "#188736",
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
    fontFamily: "Roboto,sans-serif",
    color: "#FFFFFF",

    tab: {
      fontWeight: 700,
      color: "white",
      fontSize: "1rem",
    },

    h1: {
      fontFamily: "Roboto",
      fontSize: "3.5rem",
      fontWeight: 700,
    },
    h2: {
    
      fontSize: "1.8rem",
      fontWeight: 900,
    },
    h3: {
    
      fontSize: "2rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
    h5: {
    
      fontSize: "1rem",
      fontWeight: 300,
    },
    h6: {
    
      fontSize: "0.9rem",
      fontWeight: 600,
    },

    body1: {
      fontSize: "0.9rem",
      fontWeight: "400",
    },
    body2: {
      color: "#ffff",
      fontSize: "0.9rem",
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
          minWidth: "80%",
        },
      },
    },
  },
});

export default theme;
