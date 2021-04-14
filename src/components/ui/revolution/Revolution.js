import { Grid } from "@material-ui/core";
import React from "react";
import Technology from "./Technology";
import Process from "./Process";
import CallToAction from "../CallToAction";

const Revolution = ({ setTab, setIndex }) => {
  return (
    <>
      <Grid container direction="column">
        <Technology />
        <Process />
        <CallToAction setTab={setTab} setIndex={setIndex} />
      </Grid>
    </>
  );
};

export default Revolution;
