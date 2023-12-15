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
import { data } from "../team-info.js/data";
import { useLanguage } from "src/contexts/language-context";
import { IconButton } from "@mui/material";

function TeamSlider() {
  const theme = useTheme();
  const { renderLanguage } = useLanguage();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

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
    <Box sx={{ maxWidth: "484px", flexGrow: 1 }}>
      <Typography
        sx={{
          fontFeatureSettings: "'case' on",
          fontSize: "20px",
          fontWeight: 700,
          marginBottom: "16px",
        }}
      >
        გუნდი
      </Typography>

      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                  width: "484px",
                  display: "block",
                  overflow: "hidden",
                  height: "554px",
                }}
                src={step.photo}
                alt={step.name_eng}
              />
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Box
        sx={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Typography
            sx={{ fontFeatureSettings: "'case' on", fontWeight: 700 }}
          >
            {renderLanguage(
              data[activeStep].name_ka,
              data[activeStep].name_eng
            )}
          </Typography>
          <Typography sx={{ fontSize: "12px", fontWeight: "400px" }}>
            {renderLanguage(
              data[activeStep].position_ka,
              data[activeStep].position_eng
            )}
          </Typography>
        </Box>
        <Box sx={{ display: "flex" }}>
          <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}

export default TeamSlider;
