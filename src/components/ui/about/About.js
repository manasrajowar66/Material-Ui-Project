import { Grid } from "@material-ui/core";
import React from "react";
import History from "./History";
import Team from "./Team";
import CallToAction from "../CallToAction";

const About = ({ setTab, setIndex }) => {
  return (
    <>
      <Grid container>
        <History />
        <Team />
        <CallToAction setTab={setTab} setIndex={setIndex} />
      </Grid>
    </>
  );
};

export default About;
