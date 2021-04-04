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
    estimate:{
      fontFamily:'Pacifico',
      textTransform:'none',
      color:'#fff',
      fontSize:'1rem'
    },
    learnButton:{
      borderColor: devBlue,
      color: devBlue,
      fontFamily: "Roboto",
      textTransform: "none",
      borderWidth: 2,
      fontWeight: "bold",
    },
    h2:{
      fontFamily:'Raleway',
      fontWeight:700,
      fontSize:'2.5rem',
      lineHeight:1.5,
      color:devBlue
  },
  h4:{
    fontFamily:'Raleway',
    fontSize:'1.75rem',
    color:devBlue,
    fontWeight:700
  },
  subtitle1:{
    color:devGrey,
    fontSize:'1.25rem',
    fontWeight:300
  }
}
});

export default theme;
