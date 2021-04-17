import {
  Button,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import send from "../../../assets/send.svg";
import check from "../../../assets/check.svg";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  sendButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    width: 180,
    height: 50,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    borderRadius: "50px",
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    borderRadius: "5px",
  },
  specialText: {
    fontFamily: "Raleway",
    fontWeight: 700,
    fontSize: "1.5rem",
    color: theme.palette.common.orange,
  },
}));

const EstimateDialog = ({
  dialogOpen,
  setDialogOpen,
  total,
  service,
  platforms,
  features,
  customFeature,
  user,
  questions,
  catagory,
}) => {
  const theme = useTheme();
  const classes = useStyles();
  // const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [helperState, setHelperState] = useState({
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const onChangeHandeler = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
    let valid;
    switch (e.target.id) {
      case "email":
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          e.target.value
        );
        if (!valid) {
          setHelperState({ ...helperState, email: "Invalid Email" });
        } else {
          setHelperState({ ...helperState, email: "" });
        }
        break;
      case "phone":
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          e.target.value
        );
        if (!valid) {
          setHelperState({ ...helperState, phone: "Invalid phone" });
        } else {
          setHelperState({ ...helperState, phone: "" });
        }
        break;
      default:
        break;
    }
  };

  const onConfirm = async () => {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        "/send-message/estimate",
        {
          ...state,
          total,
          service,
          platforms,
          features,
          customFeature,
          user,
          catagory,
        },
        config
      );
      setLoading(false);
      setState({
        name: "",
        email: "",
        message: "",
        phone: "",
      });
      setDialogOpen(!dialogOpen);
      setAlert({
        open: true,
        message: "Message send successfully!",
        backgroundColor: theme.palette.success.main,
      });
    } catch (error) {
      setLoading(false);
      setAlert({
        open: true,
        message: "Something went wrong,please try again!",
        backgroundColor: theme.palette.error.main,
      });
    }
  };

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullScreen={matchSm ? true : false}
        style={{ zIndex: 1302 }}
        PaperProps={{
          style: {
            padding: matchMd ? 0 : "2em 4em 2em 4em",
            minWidth: "80vw",
          },
        }}
      >
        <Grid container justify="center">
          <Typography variant="h4" align="center">
            Estimate
          </Typography>
        </Grid>
        <DialogContent>
          <Grid
            container
            // lg={4}
            // xl={3}
            alignItems={matchSm ? "center" : undefined}
            justify={matchSm ? "center" : "space-between"}
            // style={{
            //   marginTop: "2em",
            // }}
            direction={matchSm ? "column" : "row"}
          >
            <Grid
              item
              container
              direction="column"
              alignItems="center"
              justify="center"
              md={6}
              style={{
                maxWidth: matchSm ? "30em" : matchMd ? "25em" : "30em",
                marginBottom: matchSm ? "2em" : 0,
                marginRight: matchSm ? 0 : "0.5em",
              }}
            >
              <Grid item style={{ marginBottom: "1em", width: "100%" }}>
                <TextField
                  fullWidth
                  id="name"
                  label="Name"
                  value={state.name}
                  onChange={onChangeHandeler}
                />
              </Grid>
              <Grid item style={{ marginBottom: "1em", width: "100%" }}>
                <TextField
                  fullWidth
                  error={helperState.email.length !== 0}
                  helperText={helperState.email}
                  id="email"
                  label="Email"
                  value={state.email}
                  onChange={onChangeHandeler}
                />
              </Grid>
              <Grid item style={{ marginBottom: "1em", width: "100%" }}>
                <TextField
                  fullWidth
                  error={helperState.phone.length !== 0}
                  helperText={helperState.phone}
                  id="phone"
                  label="Phone"
                  value={state.phone}
                  onChange={onChangeHandeler}
                />
              </Grid>
              <Grid item style={{ marginBottom: "0.5em", width: "100%" }}>
                <TextField
                  InputProps={{ disableUnderline: true }}
                  multiline
                  fullWidth
                  rows="8"
                  id="message"
                  value={state.message}
                  onChange={onChangeHandeler}
                  className={classes.message}
                />
              </Grid>
              <Grid item>
                <Typography variant="body1" paragraph>
                  We can create this digital solution for an estimated{" "}
                  <span className={classes.specialText}>
                    ${total.toFixed(2)}
                  </span>
                </Typography>
                <Typography variant="body1" paragraph>
                  Fill your name,phone number and email,place your request,and
                  we'll get back to you with details moving forward and final
                  price.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md={6}
              style={{ maxWidth: "30em", marginTop: matchSm ? 0 : "2em" }}
            >
              <Grid container direction="column">
                <Grid
                  item
                  container
                  justify="center"
                  alignItems="center"
                  style={{ marginBottom: "1em" }}
                >
                  <Grid item xs={1}>
                    <img
                      style={{ width: "25px" }}
                      src={check}
                      alt="checkmark"
                    />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography align="left" variant="body1">
                      You want{" "}
                      {questions.length > 2 ? (
                        service
                      ) : (
                        <>{`${
                          catagory === "Basic" ? "a" : "an"
                        } ${catagory} website`}</>
                      )}{" "}
                      {questions.length > 2 &&
                        platforms.length !== 0 &&
                        `for 
                      ${
                        platforms.indexOf("Web Application") > -1 &&
                        platforms.length === 1
                          ? //then finish sentence here
                            "a Web Application."
                          : //otherwise, if web application and another platform is selected...
                          platforms.indexOf("Web Application") > -1 &&
                            platforms.length === 2
                          ? //then finish the sentence here
                            `a Web Application and an ${platforms[1]}.`
                          : //otherwise, if only one platform is selected which isn't web application...
                          platforms.length === 1
                          ? //then finish the sentence here
                            `an ${platforms[0]}`
                          : //otherwise, if other two options are selected...
                          platforms.length === 2
                          ? //then finish the sentence here
                            "an iOS Application and an Android Application."
                          : //otherwise if all three are selected...
                          platforms.length === 3
                          ? //then finish the sentence here
                            "a Web Application, an iOS Application, and an Android Application."
                          : null
                      }
                      `}
                    </Typography>
                  </Grid>
                </Grid>
                {features.length > 0 && (
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    style={{ marginBottom: "1em" }}
                  >
                    <Grid item xs={1}>
                      <img
                        style={{ width: "25px" }}
                        src={check}
                        alt="checkmark"
                      />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography align="left" variant="body1">
                        {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                          ? //...and there's only 1...
                            features.length === 1
                            ? //then end the sentence here
                              `${features[0]}.`
                            : //otherwise, if there are two features...
                            features.length === 2
                            ? //...then end the sentence here
                              `${features[0]} and ${features[1]}.`
                            : //otherwise, if there are three or more features...
                              features
                                //filter out the very last feature...
                                .filter(
                                  (feature, index) =>
                                    index !== features.length - 1
                                )
                                //and for those features return their name...
                                .map((feature, index) => (
                                  <span key={index}>{`${feature}, `}</span>
                                ))
                          : null}
                        {features.length > 0 &&
                        features.length !== 1 &&
                        features.length !== 2
                          ? //...and then finally add the last feature with 'and' in front of it
                            ` and ${features[features.length - 1]}.`
                          : null}
                      </Typography>
                    </Grid>
                  </Grid>
                )}
                {(customFeature.length > 0 || user.length > 0) && (
                  <Grid
                    item
                    container
                    justify="center"
                    alignItems="center"
                    style={{ marginBottom: "1em" }}
                  >
                    <Grid item xs={1}>
                      <img
                        style={{ width: "25px" }}
                        src={check}
                        alt="checkmark"
                      />
                    </Grid>
                    <Grid item xs={11}>
                      <Typography align="left" variant="body1">
                        The custom feature will be of{" "}
                        {customFeature.toLowerCase()}
                        {`,and the project will be used by about ${user} users.`}
                      </Typography>
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid
                item
                container
                style={{
                  marginTop: "2em",
                  marginBottom: "2em",
                  // marginLeft: "-1em",
                }}
                alignItems="center"
                justify="space-evenly"
              >
                <Grid item>
                  <Button
                    onClick={() => setDialogOpen(false)}
                    style={{ textTransform: "none" }}
                  >
                    Cancen
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={onConfirm}
                    className={classes.sendButton}
                    disabled={
                      state.name.length === 0 ||
                      state.email.length === 0 ||
                      state.phone.length === 0 ||
                      state.message.length === 0
                    }
                  >
                    {loading ? (
                      <>
                        <CircularProgress size={30} />
                      </>
                    ) : (
                      <>
                        Place Request
                        <img
                          style={{
                            marginLeft: "0.2em",
                            verticalAlign: "bottom",
                          }}
                          src={send}
                          alt="send.svg"
                        />
                      </>
                    )}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{ style: { backgroundColor: alert.backgroundColor } }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={4000}
        onClose={() => {
          setAlert({ ...alert, open: false });
        }}
      />
    </>
  );
};

export default EstimateDialog;
