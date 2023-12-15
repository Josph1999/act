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
import { useLanguage } from "src/contexts/language-context";

function MobileAbout({ aboutData, setActiveStep, activeStep }) {
  const theme = useTheme();

  const { renderLanguage, renderFontFamily } = useLanguage();

  const maxSteps = aboutData.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: "100%", padding: "20px" }}>
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
                sx={{
                  backgroundImage: `url(${step.picture})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 255,
                  display: "block",
                  overflow: "hidden",
                  width: "100%",
                  objectFit: "contain",
                }}
              >
                <Typography
                  sx={{fontFeatureSettings: "'case' on"}}
                  color="white"
                  fontSize={25}
                  sx={{
                    bottom: 40,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    marginTop: '220px'
                  }}
                >
                  {renderLanguage(step.title_ka, step.title_eng)}
                </Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </SwipeableViews>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
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
