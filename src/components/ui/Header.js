import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import logo from "../../assets/world-grid.svg";
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

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  color: {
    backgroundColor: theme.palette.primary.main,
  },
  logo: {
    height: "2rem",
    margin: "0 0.3rem 0 0.5rem",
  },
  text: {
    fontFamily: "cursive",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <ElevetionScroll>
        <AppBar position="fixed" className={classes.color}>
          <Toolbar disableGutters>
            <img src={logo} alt="logo" className={classes.logo} />
            <Typography variant="h5" className={classes.text}>
              Dev Connector
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevetionScroll>
      <div className={classes.toolbarMargin} />
    </>
  );
};

export default Header;
