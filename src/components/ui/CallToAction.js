import React from "react";
import { Grid, Typography, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  icons: {
    width: "10px",
    height: "10px",
    marginLeft: "6px",
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderRadius: "50px",
    height: 35,
    padding: 5,
    fontSize: "0.7rem",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  },
  background: {
    backgroundImage: `url(${background})`,
    height: "60em",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    [theme.breakpoints.down("sm")]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: "inherit",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50px",
    height: 80,
    width: 205,
    fontSize: "1.5rem",
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
}));

const CallToAction = ({ setTab, setIndex }) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        className={classes.background}
        alignItems="center"
        justify={matchSm ? "center" : "space-between"}
        direction={matchSm ? "column" : "row"}
      >
        <Grid item style={{ marginLeft: matchSm ? 0 : "5em" }}>
          <Grid
            container
            direction="column"
            style={{ textAlign: matchSm ? "center" : "inherit" }}
          >
            <Grid item>
              <Typography variant="h2">
                Simple Software <br />
                Revolutionary Result.
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" style={{ fontSize: "1.5rem" }}>
                Take advantage of the 21st Century
              </Typography>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                className={classes.learnButton}
                component={Link}
                to="/revolution"
                onClick={() => {
                  setTab(2);
                }}
              >
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item style={{ marginRight: matchSm ? 0 : "5em" }}>
          <Button
            variant="contained"
            className={classes.estimateButton}
            component={Link}
            to="/estimate"
            onClick={() => {
              setTab(5);
            }}
          >
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CallToAction;
