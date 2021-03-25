import React from "react";
import Header from "./ui/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/theme";
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Router>
    <Header />
      <Switch >
        <Route path='/' exact component={()=><div>Home</div>} />
        <Route path='/services' exact component={()=><div>Services</div>} />
        <Route path='/revolution' exact component={()=><div>The Revolution</div>} />
        <Route path='/about' exact component={()=><div>About Us</div>} />
        <Route path='/contact-us' exact component={()=><div>Contact Us</div>} />
      </Switch>
    </Router>
    </ThemeProvider>
  );
};

export default App;
