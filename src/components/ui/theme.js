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
    h3: {
      fontWeight: 300,
    },
  },
});

export default theme;
