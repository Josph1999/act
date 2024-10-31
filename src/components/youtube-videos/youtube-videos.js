import React, { useCallback, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Button, Typography } from "@mui/material";
import { Pagination, Navigation } from "swiper/modules";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { youtubeVideoData } from "./data";

export default function YoutubeVideos() {
  const { renderLanguage, renderFontFamily } = useLanguage();

  const router = useRouter();

  return (
    <Box
      sx={{
        padding: "128px",
        "@media (max-width: 800px)": {
          padding: "24px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 800px)": {
            padding: "10px 20px",
          },
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          fontSize={25}
          fontWeight={600}
        >
          {renderLanguage("უახლესი ვიდეოები", "Videos")}
        </Typography>
        <Button
          sx={{
            fontFeatureSettings: "'case' on",
            borderRadius: "0px",
            borderBottom: "1px solid #232C65",
          }}
          fontSize={16}
          fontWeight={600}
          onClick={() => router.push("/videos")}
        >
          {renderLanguage("ყველა ვიდეო", "All Videos")}
        </Button>
      </Box>
      <Swiper
        className="mySwiper"
        navigation={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          360: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1224: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        pagination={{
          type: "fraction",
        }}
      >
        {youtubeVideoData.map((item) => (
          <SwiperSlide>
            <iframe
              width="100%"
              height="315"
              src={item.url}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
