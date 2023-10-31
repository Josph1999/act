import React, { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, IconButton, MobileStepper, PaginationItem } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import LeftIcon from "../icons/LeftIcon";
import RightIcon from "../icons/RightIcon";
import { Button, Pagination } from "@mui/material";
import { useTheme } from "@emotion/react";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

const ImageCarousel = ({ photos, onClick }) => {
  const swiperRef = useRef(null);
  const theme = useTheme();

  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = photos.length;

  const handleNext = (e, value) => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeStep + 1);
    }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeStep - 1);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Box onClick={onClick}>
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
        >
          {photos.map((photo) => (
            <SwiperSlide>
              <Box
                sx={{
                  position: "relative",
                  height: "200px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <Image
                  fill
                  src={photo.url}
                  alt={photo.name}
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      <MobileStepper
        steps={maxSteps}
        position="static"
        sx={{padding: '0px', marginTop: '-5px', marginBottom: '-5px'}}
        activeStep={activeStep}
        nextButton={
          <IconButton size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            {theme.direction === "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
        }
        backButton={
          <IconButton size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
        }
      />
    </Box>
  );
};

export default ImageCarousel;
