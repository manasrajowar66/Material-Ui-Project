import { Avatar, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import founder from "../../../assets/founder3.jpeg";
import yearbook from "../../../assets/yearbook.svg";
import { makeStyles, useTheme } from "@material-ui/styles";
import puppy from "../../../assets/puppy.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 3em 5em 3em",
    [theme.breakpoints.down("md")]: {
      padding: "1em 1em 2em 1em",
    },
  },
}));

const Team = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        item
        container
        direction="column"
        className={classes.mainContainer}
        style={{ marginTop: "10em", marginBottom: "10em" }}
      >
        <Grid item container justify="center">
          <Typography variant="h4" align="center" gutterBottom>
            Team
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography variant="body1" gutterBottom align="center">
            Manas Rajowar, Founder
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography variant="body1" align="center">
            I started coding when I was in College.
          </Typography>
        </Grid>
        <Grid item container justify="center" direction="row">
          <Avatar style={{ width: "8em", height: "8em" }} src={founder} />
        </Grid>
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          alignItems={matchSm ? "center" : undefined}
          justify="space-around"
          style={{ marginTop: matchSm ? "3.5em" : "1em" }}
        >
          <Grid item style={{ maxWidth: "15em", margin: 0 }}>
            <Grid
              container
              //   style={{ maxWidth: "15em", margin: 0 }}
              direction="column"
            >
              <Grid item>
                <img
                  src={yearbook}
                  style={{ width: "15em", height: "15em" }}
                  alt="yearbook"
                />
              </Grid>
              <Typography
                variant="caption"
                align={matchSm ? "center" : undefined}
                gutterBottom
              >
                a page from my Sophomore yearbook
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ maxWidth: "35em", margin: 0 }}>
            <Grid
              container
              //   style={{ maxWidth: "20em", margin: 0 }}
              direction="column"
              alignItems="center"
            >
              <Typography variant="body1" paragraph align="center">
                I taught myself basic coding from a library book in third grade,
                and ever since then my passion has solely been set on learning —
                learning about computers, learning mathematics and philosophy,
                studying design, always just learning.
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Now I’m ready to apply everything I’ve learned, and to help
                others with the intuition I have developed.
              </Typography>
            </Grid>
          </Grid>
          <Grid item md style={{ maxWidth: "15em", margin: 0 }}>
            <Grid
              item
              container
              //   style={{ maxWidth: "15em", margin: 0 }}
              direction="column"
            >
              <Grid item>
                <img
                  src={puppy}
                  style={{ width: "15em", height: "15em" }}
                  alt="yearbook"
                />
              </Grid>
              <Typography
                variant="caption"
                align={matchSm ? "center" : undefined}
              >
                my miniature dapple dachshund, Sterling
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Team;
