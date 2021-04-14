import { createMuiTheme } from "@material-ui/core/styles";

const devBlue = "#0B72B9";
const devOrange = "#FFBA60";
const devGrey = "#868686";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: devBlue,
      orange: devOrange,
    },
    primary: {
      main: devBlue,
    },
    secondary: {
      main: devOrange,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.9rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      color: "#fff",
      fontSize: "1rem",
    },
    learnButton: {
      borderColor: devBlue,
      color: devBlue,
      fontFamily: "Roboto",
      textTransform: "none",
      borderWidth: 2,
      fontWeight: "bold",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.5,
      color: devBlue,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5em",
      color: devBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: devBlue,
      fontWeight: 700,
    },
    h5: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: "#fff",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1.1rem",
      color: devGrey,
      fontWeight: 300,
    },
    subtitle1: {
      color: devGrey,
      fontSize: "1.1rem",
      fontWeight: 300,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.1rem",
      fontWeight: 300,
    },
    caption : {
      color: devGrey,
      fontSize:'0.6rem'
    },
    
  },
  overrides:{
    MuiInputLabel:{
      root:{
        color:devBlue,
        fontSize:'1rem' ,
      },
    },
    MuiInput:{
      underline:{
        '&:before':{
          borderBottom:`2px solid ${devBlue}` 
        },
        '&:hover:not($disabled):not($focused):not($error):before':{
          borderBottom:`2px solid ${devBlue}`
        },
        
      },
      root:{
        // color:devGrey,
        fontWeight:300
      }
    }
  }
});

export default theme;
