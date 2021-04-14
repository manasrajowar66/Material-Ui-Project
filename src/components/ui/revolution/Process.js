import React from "react";
import { Grid, Typography, useMediaQuery } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import consultationIcon from "../../../assets/consultationIcon.svg";
import mockupIcon from "../../../assets/mockupIcon.svg";
import reviewIcon from "../../../assets/reviewIcon.svg";
import designIcon from "../../../assets/designIcon.svg";
import buildIcon from "../../../assets/buildIcon.svg";
import launchIcon from "../../../assets/launchIcon.svg";
import maintainIcon from "../../../assets/maintainIcon.svg";
import itrateIcon from "../../../assets/iterateIcon.svg";

const useStyles = makeStyles((theme) => ({
  itemContainer: {
    maxWidth: "35em",
  },
  paddingContainer: {
    padding: "5em 5em 5em 5em",
    [theme.breakpoints.down("md")]: {
      padding: "5em 3em 5em 3em",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "3em 1em 0 1em",
    },
  },
}));

const Process = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Grid item container direction="column" style={{ marginTop: "15em" }}>
        {/*----- First Row -----*/}
        <Grid item container justify="center" style={{ marginBottom: "5em" }}>
          <Grid item>
            <Typography variant="h2">Process</Typography>
          </Grid>
        </Grid>

        {/*----- Second Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#979DA6",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
          justify={matchSm ? undefined : "center"}
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Consultation
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Our process begins the moment you realize you need a piece of
                technology for your business. Whether you already have an idea
                for where to start and what to do, or if you just know you want
                to step things up, our initial consultation will help you
                examine your business holistically to find the best solutions.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Detailed notes will be taken on your requirements and
                constraints, while taking care to identify other potential areas
                for consideration.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Detailed notes will be taken on your requirements and
                constraints, while taking care to identify other potential areas
                for consideration.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={consultationIcon}
              style={{ maxWidth: matchXs ? "20em" : matchMd ? "25em" : "30em" }}
              alt="consultationIcon"
            />
          </Grid>
        </Grid>

        {/*----- Third Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#F24162",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Mockup
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                After we settle on the best path forward and decide on a
                solution to pursue, details like the cost and timeline will be
                finalized.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Then it’s time for us to start on your minimum viable product.
                That’s just a fancy term for a mockup, which doesn’t include
                colors, images, or any other polished design elements, but
                captures the essential layout structure and functionality.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                This helps us understand and refine the solution itself before
                getting distracted by specifics and looks.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={mockupIcon}
              style={{ maxWidth: matchXs ? "20em" : matchMd ? "25em" : "30em" }}
              alt="mockupIcon"
            />
          </Grid>
        </Grid>

        {/*----- Fourth Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#53BF36",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Review
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Before moving any farther we come back to you with our progress.
                This gives you the freedom to discuss any changes you may want
                or any ideas you may have come up with before any heavy lifting
                has been done.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                We give you an interactive demonstration of the mockups,
                thoroughly explaining the thought process that went into each
                screen and every anticipated feature.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Once you’re completely satisfied with the vision for our
                solution we get down to the nitty gritty, fine-details of
                design.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={reviewIcon}
              style={{ maxWidth: matchXs ? "15em" : matchMd ? "20em" : "30em" }}
              alt="reviewIcon"
            />
          </Grid>
        </Grid>

        {/*----- Fifth Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#A68250",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Design
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Using the mockups and notes taken during the consultation as
                guides, we will start ironing out what the final product will
                look like. This also involves using any brand material like
                fonts, colors, and logos to extend the experience you’re already
                familiar with.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                No aspect is superfluous, and care will be taken with every
                decision.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={designIcon}
              style={{ maxWidth: matchXs ? "20em" : matchMd ? "25em" : "30em" }}
              alt="designIcon"
            />
          </Grid>
        </Grid>

        {/*----- Sixth Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#53BF36",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Review
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                A second round of review is essential to our goal of creating
                exactly what you want, exactly how you want it.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                This time we’ll be going over the finalized designs in another
                fully interactive demonstration. Again this gives you an
                opportunity to tweak things and make sure we get everything
                right the first time.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={reviewIcon}
              style={{ maxWidth: matchXs ? "15em" : matchMd ? "20em" : "30em" }}
              alt="reviewIcon"
            />
          </Grid>
        </Grid>

        {/*----- Seventh Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#F2C744",
            width: "100vw",
            height: matchSm ? "130vh" : "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Build
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Here’s where we get down to business.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Engineering begins after your approval on the final designs. We
                start by scaffolding out the project on a high level,
                prioritizing some areas over others.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Each area is then developed in order of importance until ready
                to be connected to the next piece.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Typically the backend, behind the scenes operations are
                completed first. Once all the services are in place we can then
                create the front end, user side of things.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Finishing the application doesn’t mean we’re done though,
                because we use extensive testing to guarantee compatibility with
                all intended devices.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Only after our rigorous examinations will we accept a product as
                finished, then pushing it through the production pipeline. This
                produces an optimized, compressed, consumer version of the code
                and assets ready for deployment.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={buildIcon}
              style={{
                maxWidth: matchXs ? "20em" : matchMd ? "25em" : "30em",
              }}
              alt="buildIcon"
            />
          </Grid>
        </Grid>

        {/*----- Eight Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#C41120",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Launch
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                A second round of review is essential to our goal of creating
                exactly what you want, exactly how you want it.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                This time we’ll be going over the finalized designs in another
                fully interactive demonstration. Again this gives you an
                opportunity to tweak things and make sure we get everything
                right the first time.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            style={{ marginLeft: matchSm ? 0 : "10em", marginTop: "2em" }}
            md
          >
            <img
              src={launchIcon}
              style={{
                maxWidth: matchXs ? "20em" : matchMd ? "25em" : "30em",
                maxHeight: matchXs ? "25em" : matchSm ? "30em" : "40em",
              }}
              alt="launchIcon"
            />
          </Grid>
        </Grid>

        {/*----- Nineth Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#9A00FF",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Maintain
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Our work doesn’t end there.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                After a successful launch we keep in close contact to listen to
                feedback and hear how the project is being received.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                From there on out we make sure your application is kept up to
                date and taking advantage of the best features and practices
                available. When new developments arise or new techniques are
                discovered in future projects, we will implement those
                advancements in your project as part of our routine maintenance.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={maintainIcon}
              style={{
                maxWidth: matchXs ? "20em" : matchMd ? "25em" : "30em",
                maxHeight: matchXs ? "20em" : matchSm ? "25em" : "40em",
              }}
              alt="maintainIcon"
            />
          </Grid>
        </Grid>

        {/*----- Tenth Row -----*/}
        <Grid
          item
          container
          direction={matchSm ? "column" : "row"}
          style={{
            backgroundColor: "#41C0F2",
            width: "100vw",
            height: "100vh",
          }}
          className={classes.paddingContainer}
          alignItems="center"
        >
          <Grid
            item
            container
            direction="column"
            className={classes.itemContainer}
            md
          >
            <Grid item>
              <Typography
                variant="h4"
                align={matchSm ? "center" : undefined}
                style={{ color: "#111" }}
              >
                Iterate
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                The cycle repeats whenever you come up with a new idea for
                extending your current project, or come up with a brand new
                system entirely.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                By planning for future features and changes we can build and
                evolve your application over time. As new use cases and customer
                needs develop we can respond with continuous integration of new
                content.
              </Typography>
              <Typography
                variant="body1"
                align={matchSm ? "center" : undefined}
                style={{ color: "#fff" }}
                paragraph
              >
                Our iterative process will keep you current and competitive,
                allowing you to quickly implement changes instead of waiting
                months for a single update.
              </Typography>
            </Grid>
          </Grid>
          <Grid item style={{ marginLeft: matchSm ? 0 : "10em" }} md>
            <img
              src={itrateIcon}
              style={{
                maxWidth: matchXs ? "20em" : matchMd ? "25em" : "30em",
                // maxHeight: matchXs ? "20em" : matchSm ? "25em" : "40em",
              }}
              alt="iterateIcon"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Process;
