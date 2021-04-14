import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import historyIcon from "../../../assets/history.svg";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1em 5em 1em",
    },
  },
  itemContainer: {
    maxWidth: "45em",
  },
}));

const History = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid item container direction="column" className={classes.mainContainer}>
        <Grid
          item
          container
          justify={matchSm ? "center" : undefined}
          style={{ marginBottom: "5em" }}
        >
          <Typography variant="h2" align={matchSm ? "center" : undefined}>
            About Us
          </Typography>
        </Grid>
        <Grid item container justify="center">
          <Typography
            variant="body1"
            style={{
              fontFamily: "Raleway",
              fontSize: "1.25rem",
              color: theme.palette.common.blue,
              fontWeight: 400,
              maxWidth: "60em",
            }}
            paragraph
            align="center"
          >
            Whether it be person to person, business to consumer, or an
            individual to their interests, technology is meant to bring us
            closer to what we care about in the best way possible. Dev Connector
            will use that principle to provide fast, modern, inexpensive, and
            aesthetic software to the Midwest and beyond.
          </Typography>
        </Grid>

        <Grid
          item
          container
          justify={matchSm ? undefined : "space-between"}
          alignItems={matchSm ? "center" : undefined}
          direction={matchSm ? "column" : "row"}
          style={{ marginTop: "15em" }}
        >
          <Grid item container direction="column" md>
            <Grid item className={classes.itemContainer}>
              <Typography variant="h4" align={matchSm ? "center" : undefined}>
                History
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ fontWeight: 500 }}
              >
                We’re the new kid on the block.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchSm ? "center" : undefined}
              >
                Founded in 2019, we’re ready to get our hands on the world’s
                business problems.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchSm ? "center" : undefined}
              >
                It all started with one question: Why aren’t all businesses
                using available technology? There are many different answers to
                that question: economic barriers, social barriers, educational
                barriers, and sometimes institutional barriers.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchSm ? "center" : undefined}
              >
                We aim to be a powerful force in overcoming these obstacles.
                Recent developments in software engineering and computing power,
                compounded by the proliferation of smart phones, has opened up
                infinite worlds of possibility. Things that have always been
                done by hand can now be done digitally and automatically, and
                completely new methods of interaction are created daily. Taking
                full advantage of these advancements is the name of the game.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                align={matchSm ? "center" : undefined}
              >
                All this change can be a lot to keep up with, and that’s where
                we come in.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            md
            className={classes.itemContainer}
            style={{ marginLeft: matchSm ? "3em" : "5em" }}
          >
            <img src={historyIcon} alt="historyIcon" width="80%" height="80%" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default History;
