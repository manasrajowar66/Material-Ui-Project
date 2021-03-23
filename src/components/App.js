import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/theme";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello React
    </ThemeProvider>
  );
};

export default App;