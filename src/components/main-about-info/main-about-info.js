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
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MobileStepper,
  // makeStyles,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import TeamSlider from "../team-slider/team-slider";
import { aboutData } from "../about/data";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  // Define your custom styles here
  dot: {
    width: "16px",
    height: "16px",
  },
  dots: {
    gap: "16px",
  },
}));

export default function MainAboutInfo() {
  const windowSize = useWindowWidth();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const classes = useStyles();

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

  return windowSize > 1240 ? (
    <Box
      sx={{
        display: "flex",
        marginTop: "128px",
        width: "100%",
        paddingRight: "128px",
        gap: "26px",
        "@media (max-width: 920px)": {
          paddingRight: "64px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#DEE7FB",
          color: "white",
          display: "flex",
          flexDirection: "column",
          padding: "64px 128px",
          alignItems: "center",
          gap: "26px",
          "@media (max-width: 920px)": {
            padding: "64px",
          },
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
  ) : (
    <Box
      sx={{
        display: "flex",
        marginTop: "128px",
        width: "100%",
        paddingRight: "128px",
        gap: "26px",
        "@media (max-width: 920px)": {
          paddingRight: "64px",
        },
        "@media (max-width: 760px)": {
          flexWrap: "wrap",
          padding: "0px",
        },
      }}
    >
      <Box
        sx={{
          backgroundColor: "#DEE7FB",
          padding: "64px 128px",
          alignItems: "center",
          gap: "26px",
          "@media (max-width: 920px)": {
            padding: "32px",
          },
          overflow: "auto",
          gap: "16px",
          width: "100%",
        }}
      >
        <MobileStepper
          steps={aboutData.length}
          position="static"
          activeStep={activeStep}
          classes={{
            dot: classes.dot,
            dots: classes.dots,
          }}
          sx={{
            backgroundColor: "transparent",
            padding: "0px",
          }}
        />
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {mainAboutData.map((item) => {
            return (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                  alignItems: "flex-start",
                  marginTop: "32px",
                }}
              >
                <Typography
                  sx={{ fontFeatureSettings: "'case' on" }}
                  fontWeight={500}
                >
                  {renderLanguage(item.title_ka, item.title_eng)}
                </Typography>
                <Typography fontSize={16}>
                  {renderLanguage(
                    item.description_ka,
                    item.description_eng.substring(0, 130) + "..."
                  )}
                </Typography>
              </Box>
            );
          })}
        </AutoPlaySwipeableViews>
      </Box>
      <TeamSlider />
    </Box>
  );
}
