import React,{useState} from "react";
import Header from "./ui/header/Header";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./ui/theme";
import {Switch,BrowserRouter as Router,Route} from 'react-router-dom';
import Footer from "./ui/footer/Footer";
import LandingPage from "./ui/LandingPage";
import Services from './ui/Services';
import Android from './ui/Android';
import CustomSoftware from './ui/CustomSoftware';


const App = () => {
  const [activeTab, setTab] = useState(0);
  const [selectedIndex, setIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header
          activeTab={activeTab}
          setTab={setTab}
          selectedIndex={selectedIndex}
          setIndex={setIndex}
        />
        <Switch>
          <Route path="/" exact render={(props) => (
              <LandingPage {...props} setTab={setTab} setIndex={setIndex}  />
            )}/>
          <Route path="/services" exact render={(props) => (
              <Services {...props} setTab={setTab} setIndex={setIndex}  />
            )} />
          <Route
            path="/revolution"
            exact
            component={() => <div>The Revolution</div>}
          />
          <Route path="/about" exact component={() => <div>About Us</div>} />
          <Route
            path="/contact-us"
            exact
            component={() => <div>Contact Us</div>}
          />
          <Route
            path="/customsoftware"
            exact
            render={(props) => (
              <CustomSoftware {...props} setTab={setTab} setIndex={setIndex}  />
            )}
          />
          <Route
            path="/mobileapps"
            exact
            render={(props) => (
              <Android {...props} setTab={setTab} setIndex={setIndex}  />
            )}
          />
          <Route
            path="/webapps"
            exact
            component={() => <div>Website Development</div>}
          />
          <Route path="/estimate" exact component={() => <div>Estimate</div>} />
        </Switch>
        <Footer
          activeTab={activeTab}
          setTab={setTab}
          selectedIndex={selectedIndex}
          setIndex={setIndex}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
