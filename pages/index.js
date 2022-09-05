import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Layout from "../components/Layout";
import { useEffect } from "react";
import Typewriters from "../components/Typewriter";
import Head from "next/head";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbZPI3GuHkwXQ6gf1rUob3iLTDBx10_6E6_L6qZCVcn6QhivB-P8dqn-wWWErynEpeyCrfnJY_GZTXAdbv2L9Sl1PcLGH8vc7S7XpYJzcc3J.png?r=871",
  },
  {
    imgPath:
      "https://occ-0-2774-2773.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABRwpYXs6qZLaSoDLSedT2b7xqclNLTLENrjIj6NB-5Tl2Q2J8ue69uUOC1RH6_vn2wNf5QnQZO-S60PcwaWjc3s5Aqokux-vNIvU.jpg?r=f84",
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

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
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <Typewriters />
      <Box sx={{ maxWidth: "100%", flexGrow: 1, marginTop: "0rem" }}>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label} sx={{}}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: "500px",
                    display: "block",
                    // maxWidth: 400,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Box>
    </Layout>
  );
}

export default SwipeableTextMobileStepper;
