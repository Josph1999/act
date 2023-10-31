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

function MobileAbout({ aboutData, setActiveStep, activeStep }) {
  const theme = useTheme();

  const maxSteps = aboutData.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width:'100%' }}>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {aboutData.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  objectFit: 'contain'
                }}
                src={step.picture}
                alt={step.title_eng}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Box sx={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
    </Box>
  );
}

export default MobileAbout;
