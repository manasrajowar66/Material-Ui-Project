import {
  Grid,
  IconButton,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import forwardArrow from "../../assets/forwardArrow.svg";
import backArrow from "../../assets/backArrow.svg";
import { makeStyles, useTheme } from "@material-ui/styles";
import androidAnimationData from "../../animations/integrationAnimation/data2.json";
import Lottie from "react-lottie";
import swissKnife from "../../assets/swissKnife.svg";
import extendAccess from "../../assets/extendAccess.svg";
import increaseEngagement from "../../assets/increaseEngagement.svg";
import CallToAction from "./CallToAction";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
  },
  arrowButton: {
    marginTop: "0.5em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
  images: {
    maxWidth: "28em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "20em",
    },
  },
}));

const Android = ({ setTab, setIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const androidOptions = {
    loop: true,
    autoplay: true,
    animationData: androidAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/*----- First Row -----*/}
        <Grid item container justify={matchMd ? "center" : undefined}>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowButton}
              style={{ marginLeft: "-4em", marginRight: "1em" }}
              component={Link}
              to="/services"
              onClick={() => {
                setTab(1);
                setIndex(0);
              }}
            >
              <IconButton style={{ backgroundColor: "transparent" }}>
                <img src={backArrow} alt="back to services page" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid
            item
            container
            direction="column"
            alignItems={matchMd ? "center" : undefined}
            style={{ maxWidth: "45em" }}
          >
            <Typography variant="h2" align={matchMd ? "center" : undefined}>
              iOS/Android App Development
            </Typography>
            <Typography
              variant="body1"
              align={matchMd ? "center" : undefined}
              paragraph
            >
              Mobile apps allow you to take your tools on the go.
            </Typography>
            <Typography
              variant="body1"
              align={matchMd ? "center" : undefined}
              paragraph
            >
              Whether you want an app for your customers, employees, or
              yourself, we can build cross-platform native solutions for any
              part of your business process. This opens you up to a whole new
              world of possibilities by taking advantage of phone features like
              the camera, GPS, push notifications, and more.
            </Typography>
            <Typography
              variant="body1"
              align={matchMd ? "center" : undefined}
              paragraph
            >
              Convenience. Connection.
            </Typography>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowButton}
              component={Link}
              to="/webapps"
              onClick={() => {
                setTab(1);
                setIndex(3);
              }}
            >
              <IconButton style={{ backgroundColor: "transparent" }}>
                <img src={forwardArrow} alt="go to website development page" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>

        {/*----- Second Row -----*/}
        <Grid
          item
          container
          style={{ marginTop: "15em" }}
          justify={matchSm ? undefined : "space-between"}
          alignItems={matchSm ? "center" : undefined}
          direction={matchSm ? "column" : "row"}
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Typography variant="h4" align={matchSm ? "center" : undefined}>
              Integration
            </Typography>
            <Typography
              variant="body1"
              align={matchSm ? "center" : undefined}
              paragraph
            >
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
            <Typography
              variant="body1"
              align={matchSm ? "center" : undefined}
              paragraph
            >
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
          <Grid
            item
            style={{
              marginLeft: matchMd ? 0 : "2em",
              marginRight: matchMd ? 0 : "2em",
              marginTop: matchMd ? "3em" : 0,
              marginBottom: matchMd ? "3em" : 0,
            }}
            md
          >
            <Lottie options={androidOptions} style={{ maxWidth: "30em" }} />
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Typography variant="h4" align={matchSm ? "center" : "right"}>
              Simultaneous Platform Support
            </Typography>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "right"}
              paragraph
            >
              Our cutting-edge development process allows us to create apps for
              iPhone, Android, and tablets — all at the same time.
            </Typography>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "right"}
              paragraph
            >
              This significantly reduces costs and creates a more unified brand
              experience across all devices.
            </Typography>
          </Grid>
        </Grid>

        {/*----- Third Row -----*/}
        <Grid
          item
          container
          style={{ marginTop: "20em", marginBottom: "10em" }}
          justify={matchMd ? undefined : "space-between"}
          alignItems={matchMd ? "center" : undefined}
          direction={matchMd ? "column" : "row"}
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            alignItems="center"
            md
          >
            <Grid item>
              <Typography variant="h4" align="center">
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.images}
                src={swissKnife}
                alt="swiss knife"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            alignItems="center"
            style={{
              marginLeft: matchMd ? 0 : "6em",
              marginRight: matchMd ? 0 : "6em",
              marginTop: matchMd ? "10em" : 0,
              marginBottom: matchMd ? "10em" : 0,
            }}
            md
          >
            <Grid item>
              <Typography variant="h4" align="center">
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.images}
                src={extendAccess}
                alt="extend access"
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            alignItems="center"
            md
          >
            <Grid item>
              <Typography variant="h4" align="center">
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.images}
                src={increaseEngagement}
                alt="increase engagement"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setTab={setTab} setIndex={setIndex} />
    </>
  );
};

export default Android;
