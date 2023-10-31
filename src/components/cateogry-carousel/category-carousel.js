import React, { useRef } from "react";
import Carousel from "../carousel/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Button } from "@mui/material";
import { Navigation } from "swiper/modules";
import CarouselRightIcon from "../icons/CarouselRightIcon";
import CarouselLeftIcon from "../icons/CarouselLeftIcon";
import categories from "src/constants/categories";
import Link from "next/link";

const CategoryCarousel = () => {
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {categories.map(({ name, value }) => (
          <SwiperSlide>
            <Link href={value}>{name}</Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        sx={{
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          margin: 0,
          padding: 0,
          zIndex: 2,
        }}
        onClick={handlePrev}
      >
        <CarouselLeftIcon />
      </Button>
      <Button
        sx={{
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          margin: 0,
          padding: 0,
          zIndex: 2,
        }}
        onClick={handleNext}
      >
        <CarouselRightIcon />
      </Button>
    </Box>
  );
};

export default CategoryCarousel;
