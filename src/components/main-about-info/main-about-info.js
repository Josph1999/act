import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { mainAboutData } from "./data";
import { useLanguage } from "src/contexts/language-context";
import SeeMore from "../icons/SeeMore";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { useRouter } from "next/router";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import TeamSlider from "../team-slider/team-slider";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function MainAboutInfo() {
  const windowSize = useWindowWidth();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const { renderLanguage, renderFontFamily } = useLanguage();
  const router = useRouter();

  return (
    <Box sx={{display: 'flex', marginTop: '128px', width: '100%', paddingRight: '128px', gap: '26px'}}>
      <Box
        sx={{
          backgroundColor: "#DEE7FB",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "64px 128px",
          alignItems: "center",
          overflow: "auto",
          gap: "16px",
        }}
      >
        {mainAboutData.map((item, idx) => {
          return (
            <Accordion
              sx={{
                color: "#232C65",
                backgroundColor: "#DEE7FB",
                boxShadow: "none",
                border: "none",
                width: "100%",
              }}
              expanded={expanded === idx}
              onChange={handleChange(idx)}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ backgroundColor: "#DEE7FB" }}
              >
                <Typography
                  sx={{
                    fontFeatureSettings: "'case' on",
                    textTransform: "uppercase",
                  }}
                >
                  {renderLanguage(item.title_ka, item.title_eng)}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ borderBottom: "1px solid #232C65" }}>
                <Typography>
                  {renderLanguage(item.description_ka, item.description_eng)}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
      <TeamSlider />
    </Box>
  );
}
