import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  Dialog,
  DialogContent,
  CircularProgress,
} from "@material-ui/core";
import Snackbar from '@material-ui/core/Snackbar';
import React, { useState } from "react";
import { useTheme, makeStyles } from "@material-ui/styles";
import CallToAction from "./CallToAction";
import phone from "../../../assets/phone.svg";
import email from "../../../assets/email.svg";
import send from "../../../assets/send.svg";
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
}));

const ContactUs = ({ setTab, setIndex }) => {
  const theme = useTheme();
  const classes = useStyles();
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
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
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert,setAlert] = useState({open:false,message:'',backgroundColor:''});
  const onClose = () => {
    setOpen(false);
  };
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
       await axios.post("/send-message", state, config);
       setLoading(false);
       setState({
         name:"",
         email:"",
         message:"",
         phone:""
       });
       setOpen(!open);
       setAlert({open:true,message:"Message send successfully!",backgroundColor:theme.palette.success.main});
     } catch (error) {
      setLoading(false);
      setAlert({open:true,message:"Something went wrong,please try again!",backgroundColor:theme.palette.error.main});
     }
   };
  return (
    <>
      <Grid container style={{ marginTop: matchMd ? 0 : "-1.2em" }}>
        <Grid
          item
          container
          direction="column"
          lg={4}
          xl={3}
          alignItems="center"
          justify="center"
          style={{
            padding: matchMd ? "1em 2em 0 2em" : "0 3em 0 3em",
            marginTop: matchMd ? 0 : "-2.5em",
          }}
        >
          <Grid item container direction="column" alignItems="center">
            <Typography variant="h2" style={{ marginBottom: "-0.3em" }}>
              Contact Us
            </Typography>
            <Typography
              variant="body1"
              style={{
                color: theme.palette.common.blue,
              }}
            >
              We’re waiting.
            </Typography>
          </Grid>
          <Grid item container style={{ marginTop: "2em" }} justify="center">
            <Grid item>
              <img style={{ marginRight: "0.5em" }} src={phone} alt="phone" />
            </Grid>
            <Grid
              item
              component="a"
              href="tel:9635765113"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                (+91) 9635765113
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justify="center" style={{ marginBottom: "2em" }}>
            <Grid item>
              <img
                style={{ verticalAlign: "bottom", marginRight: "0.5em" }}
                src={email}
                alt="phone"
              />
            </Grid>
            <Grid
              item
              component="a"
              href="mailto:manasrajowar66@gmail.com"
              style={{ textDecoration: "none" }}
            >
              <Typography
                variant="body1"
                style={{ color: theme.palette.common.blue }}
              >
                manasrajowar66@gmail.com
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            style={{ maxWidth: "25em" }}
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
            <Grid item style={{ marginBottom: "1em", width: "100%" }}>
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
            <Grid item style={{ marginBottom: matchMd ? "5em" : 0 }}>
              <Button
                disabled={
                  state.name.length === 0 ||
                  state.email.length === 0 ||
                  state.phone.length === 0 ||
                  state.message.length === 0
                }
                variant="contained"
                className={classes.sendButton}
                onClick={() => {
                  setOpen(!open);
                }}
              >
                Send Massage
                    <img src={send} alt="send" />
                
              </Button>
            </Grid>
          </Grid>
        </Grid>
        {/*----- Dialog Section Start -----*/}
        <Dialog
          open={open}
          onClose={onClose}
          fullScreen={matchXs ? true : false}
          style={{ zIndex: 1302 }}
        >
          <DialogContent>
            <Grid
              item
              container
              direction="column"
              // lg={4}
              // xl={3}
              alignItems="center"
              justify="center"
              style={{
                padding: matchXs ? 0 : matchSm ? "0 2em 0 2em" : "0 3em 0 3em",
              }}
            >
              <Grid item container direction="column" alignItems="center">
                <Typography variant="h4" style={{ marginBottom: "1em" }}>
                  Confirm Message
                </Typography>
              </Grid>

              <Grid
                item
                container
                direction="column"
                alignItems="center"
                style={{ maxWidth: "25em" }}
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
                <Grid item style={{ marginBottom: "1em", width: "100%" }}>
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
                <Grid
                  item
                  container
                  style={{
                    marginBottom: matchXs ? 0 : "1em",
                    marginTop: matchXs ? "1em" : 0,
                  }}
                  alignItems="center"
                  justify="space-around"
                >
                  <Grid
                    item
                    onClick={() => {
                      setOpen(!open);
                    }}
                    style={{ marginRight: "1em" }}
                  >
                    <Button
                      style={{
                        textTransform: "none",
                        color: theme.palette.common.blue,
                        fontSize: "1rem",
                      }}
                    >
                      Cancel
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      disabled={
                        state.name.length === 0 ||
                        state.email.length === 0 ||
                        state.phone.length === 0 ||
                        state.message.length === 0
                      }
                      variant="contained"
                      className={classes.sendButton}
                      onClick={onConfirm}
                    >
                      {loading ? 
                      <CircularProgress size={30}/>:
                     <>
                       Send Massage
                       <img src={send} alt="send" />
                     </>
                     }
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
        {/*----- Dialog Section End -----*/}
        <Grid item container lg={8} xl={9}>
          <CallToAction setTab={setTab} setIndex={setIndex} />
        </Grid>
      </Grid>
      <Snackbar open={alert.open} message={alert.message} ContentProps={{style:{backgroundColor:alert.backgroundColor}}}
      anchorOrigin={{vertical:"top",horizontal:"center"}} 
       autoHideDuration={4000} onClose={()=>{setAlert({...alert,open:false})}}/>
    </>
  );
};

export default ContactUs;
