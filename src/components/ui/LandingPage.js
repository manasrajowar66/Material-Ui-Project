import { Button, Card, CardContent, Grid, Typography, useMediaQuery } from "@material-ui/core";
import React from "react";
import Lottie from "react-lottie";
import animationData from "../../animations/landinganimation/data";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles, useTheme } from "@material-ui/styles";
import customSoftwareSvg from "../../assets/Custom Software Icon.svg";
import mobileAppIcon from "../../assets/mobileIcon.svg";
import websiteIcon from "../../assets/websiteIcon.svg";
import revolutonBackgroundSvg from '../../assets/repeatingBackground.svg';
import informationBackgroundSvg from '../../assets/infoBackground.svg';
import CallToAction from './CallToAction';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  icons: {
    width: "15px",
    height: "15px",
    marginLeft: "8px",
  },
  animation: {
    maxWidth: "50rem",
    minWidth: "21rem",
    marginLeft: "10%",
    marginTop: "2rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30rem",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "50px",
    height: 45,
    width: 145,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    borderRadius: "50px",
    height: 45,
    width: 145,
    fontSize: "0.9rem",
  },
  mainContainer: {
   
  },
  heroTextContainer: {
    minWidth: "21.5rem",
    marginLeft: "1rem",
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
  },
  heroText: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
    },
  },
  learnButton: {
    ...theme.typography.learnButton,
    borderRadius: "50px",
    height: 35,
    padding: 5,
    fontSize: "0.7rem",
    "& $icons": {
      width: "10px",
      height: "10px",
      marginLeft: "6px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subttitle: {
    marginBottom: "1rem",
  },
  sevicesContainer: {
    marginTop: "18rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "12rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "8rem",
      // padding: 25,
    },
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
  revolutonBackground:{
    backgroundImage:`url(${revolutonBackgroundSvg})`,
    height:'100%',
    width:'100%',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
    backgroundSize:'cover'
  },
  revolutionCard:{
    position:'absolute',
    boxShadow:theme.shadows[10],
    borderRadius:'15px',
    padding:'10em',
    [theme.breakpoints.down('sm')]:{
      padding:'8em 0 8em 0',
      borderRadius:0,
      width:'100%'
    }
  },
  informationBackground:{
    backgroundImage:`url(${informationBackgroundSvg})`,
    height:'80em',
    width:'100%',
    backgroundPosition:'top',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
  },
}));

const LandingPage = ({setTab,setIndex}) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const classes = useStyles();
  const theme = useTheme();
  const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchXs = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <>
      <Grid container direction="column" className={classes.mainContainer}>
        {/*-----Hero Block-----*/}
        <Grid item>
          <Grid
            container
            alignItems="center"
            justify={`${matchSm ? "center" : "flex-end"}`}
            direction="row"
            className={classes.heroContainer}
          >
            <Grid item sm className={classes.heroTextContainer}>
              <Grid container justify={`${matchSm ? "center" : "flex-end"}`}>
                <Grid item>
                  <Grid container direction="column" spacing={1}>
                    <Grid item>
                      <Typography
                        variant="h2"
                        align="center"
                        className={classes.heroText}
                      >
                        Bringing West Coast Technology <br /> to the Midwest
                      </Typography>
                    </Grid>

                    <Grid item>
                      <Grid container justify="center" spacing={2}>
                        <Grid item>
                          <Button
                            variant="contained"
                            className={classes.estimateButton}
                            component={Link}
                            to='/estimate'
                            onClick={()=>setTab(5)}
                          >
                            Free Estimate
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="outlined"
                            className={classes.learnButtonHero}
                            component={Link}
                            to='/revolution'
                            onClick={()=>setTab(2)}
                          >
                            Learn More{" "}
                            <ArrowForwardIcon className={classes.icons} />
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item sm className={classes.animation}>
              <Lottie options={defaultOptions} width={"100%"} height={"100%"} />
            </Grid>
          </Grid>
        </Grid>
        {/*-----Hero Block End-----*/}

        {/* -----Services Block----- */}
        <Grid item>
          <Grid
            container
            direction="row"
            className={classes.sevicesContainer}
            justify={matchSm ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchSm ? 0 : "5rem",
                textAlign: matchSm ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>
              <Typography variant="subtitle1" className={classes.subttitle}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solutions, from investigation to{" "}
                <span className={classes.specialText}>celebration.</span>
              </Typography>
              <Button component={Link}
                            to='/customsoftware' onClick={()=>{setTab(1);setIndex(1)}} variant="outlined" className={classes.learnButton}>
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
            <Grid item>
              <img alt="" className={classes.icon} src={customSoftwareSvg} />
            </Grid>
          </Grid>
        </Grid>
        {/* -----Services Block End---- */}

        {/* -----iOs/Android Block----- */}
        <Grid item>
          <Grid
            container
            direction="row"
            style={{ marginTop: "8rem" }}
            // className={classes.sevicesContainer}
            justify={matchSm ? "center" : "flex-end"}
          >
            <Grid item style={{ textAlign: matchSm ? "center" : undefined }}>
              <Typography variant="h4">iOS/Andriod Development</Typography>
              <Typography variant="subtitle1" className={classes.subttitle}>
                Extend Functionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app{" "}
                {matchSm ? null : <br />}
                with either mobile platform.
              </Typography>
              <Button component={Link}
                            to='/mobileapps' onClick={()=>{setTab(1);setIndex(2)}} variant="outlined" className={classes.learnButton}>
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
            <Grid item style={{ marginRight: matchSm ? 0 : "5rem" }}>
              <img alt="" className={classes.icon} src={mobileAppIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/* -----iOS/Android Block End---- */}

        {/* -----Website Block----- */}
        <Grid item>
          <Grid
            container
            direction="row"
            style={{ marginTop: "8rem" }}
            // className={classes.sevicesContainer}
            justify={matchSm ? "center" : undefined}
          >
            <Grid
              item
              style={{
                marginLeft: matchSm ? 0 : "5rem",
                textAlign: matchSm ? "center" : undefined,
              }}
            >
              <Typography variant="h4">Website Development</Typography>
              <Typography variant="subtitle1" className={classes.subttitle}>
                Reach More. Discover More. Sell more.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.
              </Typography>
              <Button component={Link}
                            to='/webapps' onClick={()=>{setTab(1);setIndex(3)}} variant="outlined" className={classes.learnButton}>
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
            <Grid item>
              <img alt="" className={classes.icon} src={websiteIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/* -----Website Block End---- */}
 
        {/* -----Revolution Block---- */}
        <Grid item>
        <Grid container justify='center' alignItems='center' style={{height:'100em',marginTop:'12em'}}>
           <Card className={classes.revolutionCard}>
             <CardContent>
               <Grid container direction='column' style={{textAlign:'center'}} >
               <Grid item>
                 <Typography variant='h3' gutterBottom>The Revolution</Typography>
               </Grid>
                <Grid item>
                  <Typography variant='subtitle1'>Visionary insights coupled with cutting-edge technology is a recipe for revolution.</Typography>
                  <Button
                  variant="outlined"
                  className={classes.learnButtonHero}
                  component={Link}
                  to='/revolution' onClick={()=>{setTab(2)}}
                  >
                  Learn More{" "}
                  <ArrowForwardIcon className={classes.icons} />
                 </Button>
                </Grid>
               </Grid>
             </CardContent>
           </Card>
           <div className={classes.revolutonBackground}/>
        </Grid>
        </Grid>
        {/* -----Revolution Block End---- */}

        {/* -----Information Block---- */}
        <Grid item >
        <Grid container alignItems='center'className={classes.informationBackground} >
        <Grid item container style={{margin:0}} direction={matchXs?'column':'row'}  justify='space-between'
        spacing={matchXs?10:0}
        >
        <Grid item  style={{marginLeft:matchXs?0:matchSm?'2em':'5em'}} >
          <Grid container direction='column' style={{textAlign:matchXs?'center':'left'}}>
            <Grid item>
              <Typography variant='h2' style={{color:'white'}}>About Us</Typography>
              </Grid>
              <Grid item>
            <Typography variant='subtitle2'>Let's get personal</Typography>
            </Grid>
            <Grid item>
            <Button variant="outlined" style={{color:'white',borderColor:'white'}} className={classes.learnButton}
            component={Link}
            to='/about' onClick={()=>{setTab(3)}}
            >
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
              </Grid>
          </Grid>

          </Grid>
          <Grid item  style={{marginRight:matchXs?0:matchSm?'2em':'5em'}}>
          <Grid container direction='column' style={{textAlign:matchXs?'center':'right'}}>
            <Grid item>
              <Typography variant='h2' style={{color:'white'}}>Contact Us</Typography>
            </Grid>
            <Grid item>
            <Typography variant='subtitle2'>Say Hello👋</Typography>
            </Grid>
            <Grid item>
            <Button variant="outlined" style={{color:'white',borderColor:'white'}} className={classes.learnButton}
            component={Link}
            to='/contact-us' onClick={()=>{setTab(4)}}
            >
                Learn More <ArrowForwardIcon className={classes.icons} />
              </Button>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
          
        </Grid>

        </Grid>
        
        {/* -----Information Block End---- */}

        {/* -----Call To Action Block----- */}
        <Grid item>
          <CallToAction setTab={setTab} setIndex={setIndex}/>
        </Grid>
        {/* -----Call To Action Block End----- */}
      </Grid>
    </>
  );
};

export default LandingPage;
