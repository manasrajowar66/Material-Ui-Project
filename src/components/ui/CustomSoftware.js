import {
  Grid,
  IconButton,
  Typography,
  Hidden,
  useMediaQuery,
} from "@material-ui/core";
import Lottie from "react-lottie";
import documentAnimationData from "../../animations/documentsAnimation/data";
import scaleAnimationData from "../../animations/scaleAnimation/data.json";
import automationAnimataionData from "../../animations/automationAnimation/data.json";
import uxAnimationData from "../../animations/uxAnimation/data";
import React from "react";
import forwardArrow from "../../assets/forwardArrow.svg";
import backArrow from "../../assets/backArrow.svg";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import bulbSvg from "../../assets/bulb.svg";
import stopWatch from "../../assets/stopwatch.svg";
import moneySvg from "../../assets/cash.svg";
import roots from "../../assets/root.svg";
import CallToAction from "./CallToAction";

const useStyles = makeStyles((theme) => ({
  arrowButton: {
    marginTop: "0.5em",
  },
  heading: {
    maxWidth: "45em",
  },
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
  },
  itemContainer: {
    maxWidth: "40em",
  },
}));

const CustomSoftware = ({ setTab, setIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const documentOptions = {
    loop: true,
    autoplay: true,
    animationData: documentAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const scaleOptions = {
    loop: true,
    autoplay: true,
    animationData: scaleAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const automationOptions = {
    loop: true,
    autoplay: true,
    animationData: automationAnimataionData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const uxOptions = {
    loop: true,
    autoplay: true,
    animationData: uxAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid container className={classes.mainContainer}>
        {/* -----First Column----- */}
        <Grid
          item
          container
          direction="row"
          justify={matchMd ? "center" : undefined}
        >
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowButton}
              component={Link}
              to="/services"
              onClick={() => {
                setTab(1);
                setIndex(0);
              }}
              style={{ marginRight: "1.5em" }}
            >
              <IconButton style={{ backgroundColor: "transparent" }}>
                <img src={backArrow} alt="Back to Services Page" />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2" align={matchMd ? "center" : undefined}>
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchMd ? "center" : undefined}
                paragraph
              >
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? "center" : undefined}
                paragraph
              >
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? "center" : undefined}
                paragraph
              >
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography
                variant="body1"
                align={matchMd ? "center" : undefined}
                paragraph
              >
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowButton}
              // style={{ marginLeft: "auto" }}
              component={Link}
              to="/mobileapps"
              onClick={() => {
                setTab(1);
                setIndex(2);
              }}
            >
              <IconButton style={{ backgroundColor: "transparent" }}>
                <img src={forwardArrow} alt="Go to iOS/Android Page" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>

        {/* -----Second Column----- */}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          justify="center"
          alignItems={matchSm ? "center" : undefined}
          spacing={matchSm ? 10 : 0}
          style={{ marginTop: "15em", marginBottom: "20em" }}
        >
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src={bulbSvg} alt="bulb svg" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
              <img src={stopWatch} alt="stopwatch svg" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            md
            alignItems="center"
            style={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
              <img src={moneySvg} alt="cash svg" />
            </Grid>
          </Grid>
        </Grid>

        {/* -----Third Column----- */}
        <Grid
          item
          container
          direction={matchMd ? "column" : "row"}
          justify="space-around"
          alignItems={matchMd ? "center" : undefined}
        >
          <Grid
            item
            container
            direction="row"
            className={classes.itemContainer}
            // alignItems={matchSm ? "center" : undefined}
            justify={matchSm ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{ marginBottom: matchSm ? 0 : "10em" }}
            >
              <Grid item>
                <Typography variant="h4" align={matchSm ? "center" : undefined}>
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : undefined}
                  paragraph
                >
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : undefined}
                  paragraph
                >
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : undefined}
                  paragraph
                >
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md style={{ marginBottom: matchSm ? "10em" : 0 }}>
              <Lottie
                options={documentOptions}
                style={{ maxWidth: 275, maxHeight: 275, minHeight: 250 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            className={classes.itemContainer}
            justify={matchSm ? "center" : undefined}
          >
            <Grid item md>
              <Lottie
                options={scaleOptions}
                style={{ maxWidth: 280, maxHeight: 260 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography align={matchSm ? "center" : "right"} variant="h4">
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : "right"}
                  paragraph
                >
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* -----Fourth Column----- */}
        <Grid
          item
          container
          style={{ marginTop: "15em", marginBottom: "15em" }}
          justify="center"
        >
          <Grid item container direction="column" alignItems="center">
            <Grid item>
              <img
                src={roots}
                alt="root.svg"
                style={{
                  width: matchXs ? "20em" : matchSm ? "30em" : "45em",
                  height: matchXs ? "20em" : matchSm ? "30em" : "45em",
                }}
              />
            </Grid>
            <Grid
              item
              container
              direction="column"
              className={classes.itemContainer}
            >
              <Grid item>
                <Typography variant="h4" align="center">
                  Root-Cause Analysis
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph align="center">
                  Many problems are merely symptoms of larger, underlying
                  issues.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph align="center">
                  We can help you thoroughly examine all areas of your business
                  to develop a holistic plan for the most effective
                  implementation of technology.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* -----Fifth Column----- */}
        <Grid
          item
          container
          direction={matchMd ? "column" : "row"}
          justify="space-around"
          alignItems={matchMd ? "center" : undefined}
          style={{ marginBottom: "10em" }}
        >
          <Grid
            item
            container
            direction="row"
            className={classes.itemContainer}
            justify={matchSm ? "center" : undefined}
          >
            <Grid
              item
              container
              direction="column"
              md
              style={{ marginBottom: matchSm ? 0 : "10em" }}
            >
              <Grid item>
                <Typography variant="h4" align={matchSm ? "center" : undefined}>
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : undefined}
                  paragraph
                >
                  Why waste time when you don’t have to?
                </Typography>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : undefined}
                  paragraph
                >
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : undefined}
                  paragraph
                >
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork.
                </Typography>
              </Grid>
            </Grid>
            <Grid item md style={{ marginBottom: matchSm ? "10em" : 0 }}>
              <Lottie
                options={automationOptions}
                style={{ maxWidth: 280, maxHeight: 290 }}
              />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="row"
            className={classes.itemContainer}
            justify={matchSm ? "center" : undefined}
          >
            <Grid item md>
              <Lottie
                options={uxOptions}
                style={{ maxWidth: 155, maxHeight: 310 }}
              />
            </Grid>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography variant="h4" align={matchSm ? "center" : "right"}>
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : "right"}
                  paragraph
                >
                  A good design that isn’t usable isn’t a good design.
                </Typography>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : "right"}
                  paragraph
                >
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
                <Typography
                  variant="body1"
                  align={matchSm ? "center" : "right"}
                  paragraph
                >
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <CallToAction setTab={setTab} setIndex={setIndex} />
    </>
  );
};

export default CustomSoftware;
