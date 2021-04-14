import {
  Grid,
  Hidden,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import React from "react";
import forwardArrow from "../../assets/forwardArrow.svg";
import backArrow from "../../assets/backArrow.svg";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Link } from "react-router-dom";
import analytics from "../../assets/analytics.svg";
import ecommerce from "../../assets/ecommerce.svg";
import outreach from "../../assets/outreach.svg";
import seo from "../../assets/seo.svg";
import CallToAction from "./CallToAction";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1.5em 10em 1.5em",
    },
    marginBottom: "10em",
  },
  arrowButton: {
    marginTop: "0.5em",
  },
  itemContainer: {
    maxWidth: "40em",
  },
  images: {
    maxWidth: "20em",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "15em",
    },
  },
}));

const WebsiteDevelopment = ({ setTab, setIndex }) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
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
              Website Development
            </Typography>
            <Typography
              variant="body1"
              align={matchMd ? "center" : undefined}
              paragraph
            >
              Having a website is a necessity in today’s business world. They
              give you one central, public location to let people know who you
              are, what you do, and why you’re the best at it.
            </Typography>
            <Typography
              variant="body1"
              align={matchMd ? "center" : undefined}
              paragraph
            >
              From simply having your hours posted to having a full fledged
              online store, making yourself as accessible as possible to users
              online drives growth and enables you to reach new customers.
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
              to="/services"
              onClick={() => {
                setTab(2);
              }}
            >
              <IconButton style={{ backgroundColor: "transparent" }}>
                <img src={forwardArrow} alt="go to revolution page" />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>

        {/*----- Second Row -----*/}
        <Grid
          item
          container
          style={{ marginTop: "15em" }}
          direction={matchSm ? "column" : "row"}
          justify={matchSm ? "center" : "flex-start"}
          alignItems="center"
        >
          <Grid
            item
            container
            style={{ maxWidth: "20em" }}
            direction="column"
            alignItems={matchSm ? "center" : undefined}
            md
          >
            <Grid
              item
              style={{ marginLeft: matchXs ? 0 : matchSm ? "2em" : "3em" }}
              md
            >
              <Typography variant="h4" align={matchSm ? "center" : undefined}>
                Analytics
              </Typography>
            </Grid>
            <Grid item md>
              <img className={classes.images} src={analytics} alt="analytics" />
            </Grid>
          </Grid>
          <Grid item className={classes.itemContainer} md>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "left"}
              paragraph
            >
              Knowledge is power, and data is 21st Century gold. Analyzing this
              data can reveal hidden patterns and trends in your business,
              empowering you to make smarter decisions with measurable effects.
            </Typography>
          </Grid>
        </Grid>

        {/*----- Third Row -----*/}
        <Grid
          item
          container
          style={{ marginTop: "15em" }}
          direction={matchSm ? "column" : "row"}
          justify={matchSm ? "center" : "flex-end"}
          alignItems="center"
        >
          <Grid
            item
            container
            style={{ maxWidth: "20em" }}
            alignItems={matchSm ? "center" : undefined}
            direction="column"
            md
          >
            <Grid
              item
              style={{ marginLeft: matchXs ? 0 : matchSm ? "2em" : "3em" }}
              md
            >
              <Typography variant="h4" align={matchSm ? "center" : undefined}>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item md>
              <img className={classes.images} src={ecommerce} alt="ecommerce" />
            </Grid>
          </Grid>
          <Grid item className={classes.itemContainer} md>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "left"}
              paragraph
            >
              It’s no secret that people like to shop online. In 2017 over $2.3
              trillion was spent in e-commerce, and it’s time for your slice of
              that pie.
            </Typography>
          </Grid>
        </Grid>

        {/*----- Fourth Row -----*/}
        <Grid
          item
          container
          style={{ marginTop: "15em" }}
          direction={matchSm ? "column" : "row"}
          justify={matchSm ? "center" : "flex-start"}
          alignItems="center"
        >
          <Grid
            item
            container
            style={{ maxWidth: "20em" }}
            direction="column"
            alignItems={matchSm ? "center" : undefined}
            md
          >
            <Grid
              item
              style={{ marginLeft: matchXs ? 0 : matchSm ? "2em" : "3em" }}
              md
            >
              <Typography variant="h4" align={matchSm ? "center" : undefined}>
                Outreach
              </Typography>
            </Grid>
            <Grid item md>
              <img className={classes.images} src={outreach} alt="outreach" />
            </Grid>
          </Grid>
          <Grid item className={classes.itemContainer} md>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "left"}
              paragraph
            >
              Draw people in with a dazzling website. Showing off your products
              online is a great way to help customers decide what’s right for
              them before visiting in person.
            </Typography>
          </Grid>
        </Grid>

        {/*----- Fifth Row -----*/}
        <Grid
          item
          container
          style={{ marginTop: "15em" }}
          direction={matchSm ? "column" : "row"}
          justify={matchSm ? "center" : "flex-end"}
          alignItems="center"
        >
          <Grid
            item
            container
            style={{ maxWidth: "20em" }}
            direction="column"
            alignItems={matchSm ? "center" : undefined}
            md
          >
            <Grid
              item
              style={{ marginLeft: matchXs ? 0 : matchSm ? "2em" : "3em" }}
            >
              <Typography variant="h4" align={matchSm ? "center" : undefined}>
                Search Engine Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img className={classes.images} src={seo} alt="seo" />
            </Grid>
          </Grid>
          <Grid item className={classes.itemContainer}>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "left"}
              paragraph
            >
              How often have you ever been to the second page of Google results?
            </Typography>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "left"}
              paragraph
            >
              If you’re like us, probably never.
            </Typography>
            <Typography
              variant="body1"
              align={matchSm ? "center" : "left"}
              paragraph
            >
              Customers don’t go there either, so we make sure your website is
              designed to end up on top.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction setTab={setTab} setIndex={setIndex} />
    </>
  );
};

export default WebsiteDevelopment;
