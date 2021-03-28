import React from "react";
import { makeStyles } from "@material-ui/styles";
import copyright from "../../../assets/Footer Adornment.svg";
import { Grid, Hidden } from "@material-ui/core";
import InstagramIcon from "../../../assets/instagram.svg";
import TwitterIcon from "../../../assets/twitter.svg";
import FacebookIcon from "../../../assets/facebook.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: "100%",
    position: "relative",
    zIndex: 1302,
  },
  copyRight: {
    width: "25rem",
    display: "flex",
    alignContent: "bottom",
    [theme.breakpoints.down("md")]: {
      width: "21rem",
    },
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
  mainContainer: {
    position: "absolute",
  },
  gridItem: {
    margin: "2rem",
  },
  gridLink: {
    color: "white",
    fontSize: "0.75rem",
    fontFamily: "Arial",
    fontWeight: "bold",
    textDecoration: "none",
  },
  icons: {
    color: "#fff",
    height: "2rem",
    width: "2rem",
  },
  socialIcons: {
    position: "absolute",
    marginTop: "-5rem",
    right: "0.6rem",
  },
}));

const Footer = ({ setTab, setIndex }) => {
  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Hidden mdDown>
          <Grid container className={classes.mainContainer} justify="center">
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/"
                  onClick={() => setTab(0)}
                  className={classes.gridLink}
                >
                  Home
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/services"
                  className={classes.gridLink}
                  onClick={() => {
                    setTab(1);
                    setIndex(0);
                  }}
                >
                  Services
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/customsoftware"
                  className={classes.gridLink}
                  onClick={() => {
                    setTab(1);
                    setIndex(1);
                  }}
                >
                  Custom Software Development
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/mobileapps"
                  className={classes.gridLink}
                  onClick={() => {
                    setTab(1);
                    setIndex(2);
                  }}
                >
                  Mobile App Development
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/webapps"
                  className={classes.gridLink}
                  onClick={() => {
                    setTab(1);
                    setIndex(3);
                  }}
                >
                  Web Development
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/revolution"
                  className={classes.gridLink}
                  onClick={() => setTab(2)}
                >
                  The Revolution
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/revolution"
                  className={classes.gridLink}
                  onClick={() => setTab(2)}
                >
                  Vision
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/revolution"
                  className={classes.gridLink}
                  onClick={() => setTab(2)}
                >
                  Technology
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/revolution"
                  className={classes.gridLink}
                  onClick={() => setTab(2)}
                >
                  Process
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/about"
                  className={classes.gridLink}
                  onClick={() => setTab(3)}
                >
                  About Us
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/about"
                  className={classes.gridLink}
                  onClick={() => setTab(3)}
                >
                  History
                </Grid>
                <Grid
                  item
                  component={Link}
                  to="/about"
                  className={classes.gridLink}
                  onClick={() => setTab(3)}
                >
                  Team
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.gridItem}>
              <Grid container direction="column" spacing={2}>
                <Grid
                  item
                  component={Link}
                  to="/contact-us"
                  className={classes.gridLink}
                  onClick={() => setTab(4)}
                >
                  Contact Us
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Hidden>

        <img src={copyright} className={classes.copyRight} alt="" />

        <Grid
          container
          direction="row"
          justify="flex-end"
          spacing={2}
          className={classes.socialIcons}
        >
          <Grid
            item
            component={"a"}
            href="https://www.instagram.com"
            rel="noopener noreferer"
            target="_black"
          >
            <img className={classes.icons} src={InstagramIcon} alt="" />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.twitter.com"
            rel="noopener noreferer"
            target="_black"
          >
            <img className={classes.icons} src={TwitterIcon} alt="" />
          </Grid>
          <Grid
            item
            component={"a"}
            href="https://www.facebook.com/"
            rel="noopener noreferer"
            target="_black"
          >
            <img className={classes.icons} src={FacebookIcon} alt="" />
          </Grid>
        </Grid>
      </footer>
    </>
  );
};

export default Footer;
