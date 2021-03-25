import { createMuiTheme } from "@material-ui/core/styles";

const devBlue = "#0B72B9";
const devOrange = "#FFBA60";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${devBlue}`,
      orange: `${devOrange}`,
    },
    primary: {
      main: `${devBlue}`,
    },
    secondary: {
      main: `${devOrange}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.9rem",
    },
    estimate:{
      fontFamily:'Pacifico',
      textTransform:'none',
      color:'#fff',
      fontSize:'1rem'
    }
  },
});

export default theme;
