import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Container, Grid } from "@material-ui/core";
import { KeyboardArrowLeftOutlined } from "@material-ui/icons";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://i.ytimg.com/vi/bfrtBpWuILg/maxresdefault.jpg",
  },
  {
    label: "Bird",
    imgPath:
      "https://i.ytimg.com/vi/iSPIq5dT9Ws/maxresdefault.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://cdn11.bigcommerce.com/s-8smrzb0w7f/images/stencil/558x558/products/55256/56560/818-LDG7mgL._SL1500___00673.1602904407.jpg?c=1",
  },
  {
    label: "NeONBRAND Digital Marketing, Las Vegas, United States",
    imgPath:
      "https://i.ytimg.com/vi/dOLwvIzzx7g/maxresdefault.jpg",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://i.ytimg.com/vi/LFsVoVkMelo/maxresdefault.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "auto",
    position: "relative",
    top: 0,
    width: "100%",
  },
  arrowLeft: {
    position: "absolute",
    top: "50%",
  },
  arrowRight: {
    position: "absolute",
    top: "50%",
    right: 10,
  },

  img: {
    height: "auto",
    display: "block",
    width: "100%",
    overflow: "hidden",
    maxHeight: 400,
    objectFit: "contain",
  },
  stepper: {
    width: "100%",
    flexGrow: 1,
    backgroundColor: "#fff",
    display: "grid",
    justifyContent: "center",
  },
}));

function Banner() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      {/* <Button
        size="small"
        className={classes.arrowLeft}
        onClick={handleBack}
        disabled={activeStep === 0}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </Button> */}
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img
                className={classes.img}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={tutorialSteps.length}
        position="static"
        activeStep={activeStep}
        className={classes.stepper}
      />
      {/* <Button
        size="small"
        onClick={handleNext}
        disabled={activeStep === maxSteps - 1}
        className={classes.arrowRight}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeftOutlined />
        ) : (
          <KeyboardArrowRight />
        )}
      </Button> */}
    </div>
  );
}

export default Banner;
