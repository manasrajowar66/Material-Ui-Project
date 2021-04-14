import React from "react";
import Lottie from "react-lottie";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import vision from "../../../assets/vision.svg";
import { makeStyles, useTheme } from "@material-ui/styles";
import technologyAnimationData from "../../../animations/technologyAnimation/data.json";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "40em",
  },
  mainContainer: {
    padding: "2em 5em 10em 5em",
    [theme.breakpoints.down("md")]: {
      padding: "2em 3em 10em 3em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "1em 1em 10em 1em",
    },
  },
  heading: {
    fontFamily: "Pacifico",
    fontWeight: 300,
  },
}));
const Technology = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const technologyOptions = {
    loop: true,
    autoplay: true,
    animationData: technologyAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <Grid
        item
        container
        direction="column"
        className={classes.mainContainer}
        alignItems={matchMd ? "center" : undefined}
      >
        {/*----- First Row -----*/}
        <Grid item container justify={matchMd ? "center" : undefined}>
          <Grid item>
            <Typography
              variant="h2"
              align={matchMd ? "center" : undefined}
              className={classes.heading}
            >
              The Revolution
            </Typography>
          </Grid>
        </Grid>
        {/*----- Second Row -----*/}
        <Grid
          item
          container
          justify={matchMd ? undefined : "space-between"}
          alignItems="center"
          style={{ marginTop: matchSm ? "10em" : "5em" }}
          direction={matchMd ? "column" : "row"}
        >
          <Grid item md>
            <img
              src={vision}
              style={{
                maxWidth: matchXs ? "20em" : matchMd ? "30em" : "45em",
                marginRight: matchMd ? 0 : "3em",
              }}
              alt="vision.svg"
            />
          </Grid>
          <Grid
            item
            className={classes.itemContainer}
            md
            style={{ marginTop: "3em" }}
          >
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" align={matchMd ? "center" : "right"}>
                  Vision
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "right"}
                >
                  The rise of computers, and subsequently the Internet, has
                  completely altered every aspect of human life. This has
                  increased our comfort, broadened our connections, and reshaped
                  how we view the world.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "right"}
                >
                  What once was confined to huge rooms and teams of engineers
                  now resides in every single one of our hands. Harnessing this
                  unlimited potential by using it to solve problems and better
                  lives is at the heart of everything we do.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "right"}
                >
                  We want to help businesses capitalize on the latest and
                  greatest technology. The best way to predict the future is to
                  be the one building it, and we want to help guide the world
                  into this next chapter of technological expansion,
                  exploration, and innovation.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "right"}
                >
                  By holding ourselves to rigorous standards and pristine
                  quality, we can ensure you have the absolute best tools
                  necessary to thrive in this new frontier.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "right"}
                >
                  We see a future where every individual has personalized
                  software custom tailored to their lifestyle, culture, and
                  interests, helping them overcome life’s obstacles. Each
                  project is a step towards that goal.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/*----- Third Row -----*/}
        <Grid
          item
          container
          justify={matchMd ? undefined : "space-between"}
          alignItems="center"
          style={{ marginTop: "15em" }}
          direction={matchMd ? "column" : "row"}
        >
          <Grid item className={classes.itemContainer}>
            <Grid container direction="column">
              <Grid item>
                <Typography variant="h4" align={matchMd ? "center" : "left"}>
                  Technology
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "left"}
                >
                  In 2013, Facebook invented a new way of building websites.
                  This new system, React.js, completely revolutionizes the
                  process and practice of website development.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "left"}
                >
                  Instead of chaining together long individual pages, like
                  traditional websites, React websites are built with little
                  chunks of code called components. These components are faster,
                  easier to maintain, and are easily reused and customized, each
                  serving a singular purpose.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "left"}
                >
                  Two years later they shocked the world by releasing a similar
                  system, React Native, for producing iOS and Android apps.
                  Instead of having to master two completely separate
                  development platforms, you can leverage the knowledge you
                  already possessed from building websites and reapply it
                  directly! This was a huge leap forward.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "left"}
                >
                  This technology is now being used by companies like AirBnB,
                  Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and
                  when Facebook purchased Instagram large portions of it were
                  even rebuilt using React.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "left"}
                >
                  Developers have since built on top of these systems by
                  automating project setup and deployment, allowing creators to
                  focus as much as possible on their work itself.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "left"}
                >
                  These technical advancements translate into savings by
                  significantly reducing the workload and streamlining the
                  workflow for developing new pieces of software, while also
                  lowering the barrier to entry for mobile app development.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  align={matchMd ? "center" : "left"}
                >
                  This puts personalization in your pocket — faster, better, and
                  more affordable than ever before.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie
              options={technologyOptions}
              style={{
                width: matchXs ? "20em" : matchMd ? "30em" : "40em",
                margin: 0,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Technology;
