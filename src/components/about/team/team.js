import { Box, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";
import { teamInfo } from "../data";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./team.module.css";

export default function TeamInfo() {
  const { renderLanguage } = useLanguage();

  return (
    <Box
      id="ExecutiveTeam"
      sx={{
        padding: "128px",
        "@media (max-width: 1000px)": {
          padding: "64px",
        },
        "@media (max-width: 760px)": {
          padding: "24px !important",
        },
      }}
    >
      <Typography
        sx={{
          fontFeatureSettings: "'case' on",
          fontSize: "30px",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {renderLanguage("აღმასრულებელი გუნდი", "EXECUTIVE TEAM")}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          justifyContent: "space-between",
          "@media (max-width: 1000px)": {
            flexDirection: "column",
          },
        }}
      >
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
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
          {teamInfo.map((item) => (
            <SwiperSlide>
              <Box
                display="flex"
                flexDirection="column"
                className={styles.teamStyles}
              >
                <Box
                  sx={{
                    width: "100%",
                    backgroundImage: `url(${item.image})`,
                    height: "544px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    marginTop: "32px",
                  }}
                  className={styles.image}
                ></Box>
                <Box textAlign="left" padding="16px" className={styles.text}>
                  <Typography
                    sx={{
                      fontFeatureSettings: "'case' on",
                      fontSize: "24px",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    {renderLanguage(item.name_ka, item.name_eng)}
                  </Typography>
                  <Typography width="400px">
                    {renderLanguage(item.position_ka, item.position_eng)}
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
