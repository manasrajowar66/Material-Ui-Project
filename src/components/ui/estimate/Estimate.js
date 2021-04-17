import {
  Button,
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/styles";
import React, { useState } from "react";
import { cloneDeep } from "lodash";
import Lottie from "react-lottie";
import estimateAnimationData from "../../../animations/estimateAnimation/data.json";
import customIcon from "../../../assets/Custom Software Icon.svg";
import website from "../../../assets/website.svg";
import mobileIcon from "../../../assets/mobileIcon.svg";
import forwardArrow from "../../../assets/forwardArrow.svg";
import backArrow from "../../../assets/backArrow.svg";
import iphone from "../../../assets/iphone.svg";
import android from "../../../assets/android.svg";
import camera from "../../../assets/camera.svg";
import gps from "../../../assets/gps.svg";
import upload from "../../../assets/upload.svg";
import users from "../../../assets/users.svg";
import biometrics from "../../../assets/biometrics.svg";
import bell from "../../../assets/bell.svg";
import info from "../../../assets/info.svg";
import customized from "../../../assets/customized.svg";
import data from "../../../assets/data.svg";
import person from "../../../assets/person.svg";
import persons from "../../../assets/persons.svg";
import people from "../../../assets/people.svg";
import globe from "../../../assets/globe.svg";
import forwardArrowDisabled from "../../../assets/forwardArrowDisabled.svg";
import backArrowDisabled from "../../../assets/backArrowDisabled.svg";
import EstimateDialog from "./EstimateDialog";

const useStyles = makeStyles((theme) => ({
  icons: {
    width: "12em",
    height: "10em",
  },
  estimate: {
    ...theme.typography.estimate,
    height: 50,
    width: 200,
    borderRadius: "50px",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
    marginTop: "1em",
    fontSize: "1.15rem",
  },
}));

const Estimate = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: estimateAnimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const classes = useStyles();
  const theme = useTheme();

  const defaultQuestions = [
    {
      id: 1,
      title: "Which service are you interested in?",
      active: true,
      options: [
        {
          id: 1,
          title: "Custom Software Development",
          subtitle: null,
          icon: customIcon,
          iconAlt: "Three floating screen",
          selected: false,
          cost: 0,
        },
        {
          id: 2,
          title: "iOS/Android App Development",
          subtitle: null,
          icon: mobileIcon,
          iconAlt: "phone and tablet outline",
          selected: false,
          cost: 0,
        },
        {
          id: 3,
          title: "Website Development",
          subtitle: null,
          icon: website,
          iconAlt: "website outline",
          selected: false,
          cost: 0,
        },
      ],
    },
  ];

  const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: website,
          iconAlt: "computer outline",
          selected: false,
          cost: 100,
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: iphone,
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100,
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: android,
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100,
        },
      ],
      active: true,
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: camera,
          iconAlt: "camera outline",
          selected: false,
          cost: 25,
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: gps,
          iconAlt: "gps pin",
          selected: false,
          cost: 25,
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: upload,
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25,
        },
      ],
      active: false,
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: users,
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25,
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: biometrics,
          iconAlt: "fingerprint",
          selected: false,
          cost: 25,
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: bell,
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25,
        },
      ],
      active: false,
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25,
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: customized,
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50,
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: data,
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100,
        },
      ],
      active: false,
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: person,
          iconAlt: "person outline",
          selected: false,
          cost: 1,
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: persons,
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25,
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: people,
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5,
        },
      ],
      active: false,
    },
  ];

  const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: info,
          iconAlt: "person outline",
          selected: false,
          cost: 100,
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: customized,
          iconAlt: "outline of two people",
          selected: false,
          cost: 200,
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: globe,
          iconAlt: "outline of three people",
          selected: false,
          cost: 250,
        },
      ],
      active: true,
    },
  ];

  const [questions, setQuestion] = useState(defaultQuestions);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [total, setTatal] = useState(0);
  const [service, setService] = useState("");
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeature, setCustomFeature] = useState("");
  const [user, setUser] = useState("");
  const [catagory, setCatagory] = useState("");

  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestion(newQuestions);
  };

  const previousQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex - 1;
    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestion(newQuestions);
  };

  const nevigationPrevDisable = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) return true;
    else return false;
  };
  const nevigationNextDisable = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id)
      return true;
    else return false;
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];
    const previouslySelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );

    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previouslySelected[0]) {
          previouslySelected[0].selected = !previouslySelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }

    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestion(softwareQuestions);
        setService("Custom Software Development");
        setCatagory("");
        setCustomFeature("");
        setFeatures([]);
        setPlatforms([]);
        setUser("");
        break;
      case "iOS/Android App Development":
        setQuestion(softwareQuestions);
        setService("iOS/Android App Development");
        setCatagory("");
        setCustomFeature("");
        setFeatures([]);
        setPlatforms([]);
        setUser("");
        break;
      case "Website Development":
        setQuestion(websiteQuestions);
        setService("Website Development");
        setCatagory("");
        setCustomFeature("");
        setFeatures([]);
        setPlatforms([]);
        setUser("");
        break;
      default:
        setQuestion(newQuestions);
    }
  };

  const getTotal = () => {
    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);
    let cost = 0;
    selections.map((question) =>
      question.map((option) => {
        if (option.title === "0-10") {
          setUser(option.title);
          return (cost *= option.cost);
        } else if (option.title === "10-100") {
          setUser(option.title);
          return (cost *= option.cost);
        } else if (option.title === "100+") {
          setUser(option.title);
          return (cost *= option.cost);
        } else return (cost += option.cost);
      })
    );
    setTatal(cost);
  };

  const getPlatforms = () => {
    let platform = [];
    if (questions.length > 2) {
      platform = questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )[0]
        .options.filter((option) => option.selected)
        .map((option) => option.title);
    }
    setPlatforms(platform);
  };

  const getFeatures = () => {
    let feature = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((options) => options.map((option) => feature.push(option.title)));
    }
    setFeatures(feature);
  };

  const getCustomFeature = () => {
    if (questions.length > 2) {
      const newCustomFeature = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )[0]
        .options.filter((option) => option.selected)[0].title;
      setCustomFeature(newCustomFeature);
    }
  };

  const getCatagory = () => {
    if (questions.length === 2) {
      const newCatagory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;
      setCatagory(newCatagory);
    }
  };

  // const matchSm = useMediaQuery(theme.breakpoints.down("sm"));
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Grid container direction={matchMd ? "column" : "row"}>
        <Grid
          item
          container
          direction="column"
          lg
          alignItems={matchMd ? "center" : undefined}
        >
          <Grid
            item
            style={{ marginTop: "2em", marginLeft: matchMd ? 0 : "5em" }}
          >
            <Typography variant="h2">Estimate</Typography>
          </Grid>
          <Grid
            item
            style={{
              marginRight: matchMd ? 0 : "10em",
              maxWidth: "50em",
              marginTop: matchMd ? "3em" : "7.5em",
            }}
          >
            <Lottie options={defaultOptions} width="100%" height="100%" />
          </Grid>
        </Grid>
        <Grid
          item
          container
          direction="column"
          lg
          style={{ marginRight: "2em", marginBottom: "10em" }}
          alignItems="center"
        >
          {questions
            .filter((question) => question.active)
            .map((question, index) => (
              <React.Fragment key={index}>
                <Grid item>
                  <Typography
                    variant="h2"
                    align="center"
                    style={{
                      fontWeight: 500,
                      marginTop: "2.5em",
                      lineHeight: 1.15,
                      fontSize: "2.25rem",
                    }}
                    gutterBottom
                  >
                    {question.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    style={{ marginBottom: "2.5em" }}
                  >
                    {question.subtitle}
                  </Typography>
                </Grid>
                <Grid item container justify="center">
                  {question.options.map((option, index) => (
                    <React.Fragment key={index}>
                      <Grid
                        item
                        container
                        direction="column"
                        md
                        alignItems="center"
                        component={Button}
                        onClick={() => handleSelect(option.id)}
                        style={{
                          display: "grid",
                          textTransform: "none",
                          backgroundColor: option.selected
                            ? theme.palette.common.orange
                            : null,
                          borderRadius: "0px",
                        }}
                      >
                        <Grid
                          item
                          style={{ maxWidth: "14em", marginBottom: "1em" }}
                        >
                          <Typography variant="h6" align="center">
                            {option.title}
                          </Typography>
                          <Typography variant="caption" align="center">
                            {option.subtitle}
                          </Typography>
                        </Grid>
                        <Grid item>
                          <img
                            className={classes.icons}
                            src={option.icon}
                            alt={option.iconAlt}
                          />
                        </Grid>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </React.Fragment>
            ))}

          <Grid
            item
            container
            justify="space-between"
            style={{ width: "15em", marginTop: "3em" }}
          >
            <Grid item>
              <IconButton
                disabled={nevigationPrevDisable()}
                onClick={previousQuestion}
              >
                <img
                  src={nevigationPrevDisable() ? backArrowDisabled : backArrow}
                  alt="backArrow.svg"
                />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                disabled={nevigationNextDisable()}
                onClick={nextQuestion}
              >
                <img
                  src={
                    nevigationNextDisable()
                      ? forwardArrowDisabled
                      : forwardArrow
                  }
                  alt="forwardArrow.svg"
                />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              onClick={() => {
                setDialogOpen(true);
                getTotal();
                getPlatforms();
                getFeatures();
                getCustomFeature();
                getCatagory();
              }}
              variant="contained"
              className={classes.estimate}
            >
              Get Estimate
            </Button>
          </Grid>
        </Grid>
        <EstimateDialog
          dialogOpen={dialogOpen}
          setDialogOpen={setDialogOpen}
          total={total}
          service={service}
          platforms={platforms}
          features={features}
          customFeature={customFeature}
          user={user}
          questions={questions}
          catagory={catagory}
        />
      </Grid>
    </>
  );
};

export default Estimate;
