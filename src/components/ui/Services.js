import { Button, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { Link } from "react-router-dom";
import customSoftwareSvg from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";

const useStyles = makeStyles((theme) => ({
  icons: {
    width: "15px",
    height: "15px",
    marginLeft: "8px",
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderRadius: "50px",
    height: 35,
    padding: 5,
    fontSize: "0.7rem",
    "& $icons": {
      width: "10px",
      height: "10px",
      marginLeft: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subttitle: {
    marginBottom: "1rem",
  },
  sevicesContainer: {
    marginTop: "10em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
}));

const Services = ({ setTab, setIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems={matchSm ? "center" : undefined}
      >
        <Grid item style={{ marginLeft: matchSm ? 0 : "5em" }}>
          <Typography variant="h2">Services</Typography>
        </Grid>
        {/* -----Custom Software Block----- */}
        <Grid item>
          <Grid
            container
            direction="row"
            className={classes.sevicesContainer}
            style={{ marginTop: matchXs ? "1em" : "5em" }}
            justify={matchSm ? "center" : "flex-end"}
          >
            <Grid
              item
              style={{
                textAlign: matchSm ? "center" : undefined,
                width: matchSm ? undefined : "35em",
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subttitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button
                component={Link}
                to="/customsoftware"
                onClick={() => {
                  setTab(1);
                  setIndex(1);
                }}
                variant="outlined"
                className={classes.learnButton}
              >
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchSm ? 0 : "5em" }}>
              <img alt="" className={classes.icon} src={customSoftwareSvg} />
            </Grid>
          </Grid>
        </Grid>
        {/* -----Custom Software Block End---- */}

        {/* -----iOs/Android Block----- */}
        <Grid item>
          <Grid
            container
            direction="row"
            className={classes.sevicesContainer}
            justify={matchSm ? "center" : undefined}
          >
            <Grid
              item
              style={{
                textAlign: matchSm ? "center" : undefined,
                marginLeft: matchSm ? 0 : "5em",
                // width: matchSm ? undefined : "35em",
              }}
            >
              <Typography variant="h4">iOS/Andriod Development</Typography>
              <Typography variant="subtitle1" className={classes.subttitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app{" "}
                {matchSm ? null : <br />}
                with either mobile platform.
              </Typography>
              <Button
                component={Link}
                to="/mobileapps"
                onClick={() => {
                  setTab(1);
                  setIndex(2);
                }}
                variant="outlined"
                className={classes.learnButton}
              >
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
            <Grid item>
              <img
                alt=""
                width="250em"
                className={classes.icon}
                src={mobileAppIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* -----iOS/Android Block End---- */}

        {/* -----Website Block----- */}
        <Grid item>
          <Grid
            container
            direction="row"
            className={classes.sevicesContainer}
            justify={matchSm ? "center" : "flex-end"}
            style={{ marginBottom: matchXs ? "2em" : "10em" }}
          >
            <Grid
              item
              style={{
                textAlign: matchSm ? "center" : undefined,
                // width: matchSm ? undefined : "35em",
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subttitle}>
                Reach More. Discover More. Sell more.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button
                component={Link}
                to="/webapps"
                onClick={() => {
                  setTab(1);
                  setIndex(3);
                }}
                variant="outlined"
                className={classes.learnButton}
              >
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchSm ? 0 : "5em" }}>
              <img
                alt=""
                width="250em"
                className={classes.icon}
                src={websiteIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/* -----Website Block End---- */}
      </Grid>
    </>
  );
};

export default Services;
