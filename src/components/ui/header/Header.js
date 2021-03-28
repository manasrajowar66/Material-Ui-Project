import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import logo from "../../../assets/world-grid.svg";
import { Link } from "react-router-dom";
import DrawerUtils from "./DrawerUtils";
import TabsUtils from "./TabsUtils";

//Scroll Elevation Effect

const ElevetionScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

//MUI Styling classes

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "1rem",
  },
  appBar: {
    backgroundColor: theme.palette.primary.main,
    zIndex: theme.zIndex.modal + 1,
  },
  logo: {
    height: "2rem",
    marginRight: "0.3rem",
  },
  text: {
    textDecoration: "none",
    textTransform: "none",
    fontFamily: "Train One,cursive",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.1rem",
    },
  },
  buttonLogo: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    marginLeft: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
}));

const Header = ({ activeTab, setTab, selectedIndex, setIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  //State for active Tab

  const [anchorEl, setAnchorEl] = useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  useEffect(() => {
    switch (window.location.pathname) {
      case "/":
        if (activeTab !== 0) setTab(0);
        break;
      case "/services":
        if (activeTab !== 1) {
          setTab(1);
          setIndex(0);
        }
        break;
      case "/customsoftware":
        if (activeTab !== 1) {
          setTab(1);
          setIndex(1);
        }
        break;
      case "/mobileapps":
        if (activeTab !== 1) {
          setTab(1);
          setIndex(2);
        }
        break;
      case "/webapps":
        if (activeTab !== 1) {
          setTab(1);
          setIndex(1);
        }
        break;
      case "/revolution":
        if (activeTab !== 2) {
          setTab(2);
        }
        break;
      case "/about":
        if (activeTab !== 3) {
          setTab(3);
        }
        break;
      case "/contact-us":
        if (activeTab !== 4) {
          setTab(4);
        }
        break;
      case "/estimate":
        if (activeTab !== 5) {
          setTab(5);
        }
        break;
      default:
        break;
    }
  }, [setTab, activeTab, setIndex, selectedIndex]);

  return (
    <>
      <ElevetionScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar disableGutters>
            <Button
              component={Link}
              to="/"
              onClick={(e) => setTab(0)}
              disableRipple
              className={classes.buttonLogo}
            >
              <img src={logo} alt="logo" className={classes.logo} />
              <Typography variant="h5" className={classes.text}>
                Dev Connector
              </Typography>
            </Button>
            {matches ? (
              <DrawerUtils
                setOpenDrawer={setOpenDrawer}
                openDrawer={openDrawer}
                setTab={setTab}
                activeTab={activeTab}
              />
            ) : (
              <TabsUtils
                setTab={setTab}
                activeTab={activeTab}
                setAnchorEl={setAnchorEl}
                anchorEl={anchorEl}
                setIndex={setIndex}
                selectedIndex={selectedIndex}
              />
            )}
          </Toolbar>
        </AppBar>
      </ElevetionScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
