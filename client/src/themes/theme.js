import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    h1: {
      // could customize the h1 variant as well
    },
    h4: {
      fontWeight: 500
    },
    h5: {
      fontWeight: 600
    },
    button: {
      textTransform: "none"
    }
  },
  palette: {
    primary: {
      main: "#f68002",
      button:
        "linear-gradient(270deg, rgba(247,132,0,1) 2%, rgba(247,105,0,1) 53%)"
    }
  }
});
