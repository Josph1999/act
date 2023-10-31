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

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function MainAboutInfo() {
  const windowSize = useWindowWidth();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

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

  return windowSize > 800 ? (
    <Box
      sx={{
        backgroundColor: "#4338CA",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "0px 128px",
        alignItems: "center",
        height: "350px",
        marginTop: "128px",
        overflow: "auto",
      }}
    >
      {mainAboutData.map((item) => {
        return (
          <Box
            sx={{
              width: "300px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              alignItems: "flex-start",
            }}
          >
            {item.icon}
            <Typography fontFamily={renderFontFamily()}>
              {renderLanguage(item.title_ka, item.title_eng)}
            </Typography>
            <Typography fontSize={16}>
              {renderLanguage(
                item.description_ka.substring(0, 130) + "...",
                item.description_eng.substring(0, 130) + "..."
              )}
            </Typography>
            <Button
              sx={{ color: "white" }}
              endIcon={<SeeMore color="#fff" />}
              onClick={() => router.push(item.path)}
            >
              {renderLanguage("სრულად ნახვა", "See More")}
            </Button>
          </Box>
        );
      })}
    </Box>
  ) : (
    <Box
      sx={{
        backgroundColor: "#4338CA",
        color: "white",
        padding: "20px",
        marginTop: "30px",
      }}
    >
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
                width: "300px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                alignItems: "flex-start",
              }}
            >
              {item.icon}
              <Typography fontFamily={renderFontFamily()}>
                {renderLanguage(item.title_ka, item.title_eng)}
              </Typography>
              <Typography fontSize={16}>
                {renderLanguage(
                  item.description_ka.substring(0, 130) + "...",
                  item.description_eng.substring(0, 130) + "..."
                )}
              </Typography>
              <Button
                sx={{ color: "white" }}
                endIcon={<SeeMore color="#fff" />}
                onClick={() => router.push(item.path)}
              >
                სრულად ნახვა
              </Button>
            </Box>
          );
        })}
      </AutoPlaySwipeableViews>
    </Box>
  );
}
