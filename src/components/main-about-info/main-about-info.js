import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useLanguage } from "src/contexts/language-context";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { Autoplay } from "swiper/modules";
import TeamSlider from "../team-slider/team-slider";
import { valuesData } from "../about/data";

export default function MainAboutInfo() {
  const windowSize = useWindowWidth();

  const { renderLanguage } = useLanguage();

  return (
    <Box
      sx={{
        display: "flex",
        padding: "0px 128px",
        width: "100%",
        marginTop: '150px',
        justifyContent: "space-between",
        "@media (max-width: 1600px)": {
          flexDirection: "column",
        },
        "@media (max-width: 1000px)": {
          padding: "64px 64px",
        },
        "@media (max-width: 760px)": {
          padding: "24px !important",
        },
      }}
    >
      {windowSize > 1000 ? (
        <Box>
          <Box
            display="flex"
            gap="16px"
            sx={{
              "@media (max-width: 1600px)": {
                marginTop: "60px",
                justifyContent: "space-between",
              },
            }}
          >
            {valuesData.map((item, idx) =>
              idx === 0 || idx === 1 ? (
                <Box
                  key={item.id}
                  sx={{
                    width: "480px",
                    height: "300px",
                    "@media (max-width: 1200px)": {
                      width: "100%",
                      padding: "64px",
                    },
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
                      display: "flex",
                      gap: "12px",
                      fontWeight: 500,
                      fontSize: "20px",
                      alignItems: "center",
                    }}
                  >
                    {item.icon} {renderLanguage(item.title_ka, item.title_eng)}
                  </Typography>
                  <Typography sx={{ color: "black", marginTop: "16px" }}>
                    {renderLanguage(item.description_ka, item.description_eng)}
                  </Typography>
                </Box>
              ) : null
            )}
          </Box>
          <Box
            display="flex"
            gap="16px"
            sx={{
              "@media (max-width: 1600px)": {
                marginTop: "60px",
                justifyContent: "space-between",
              },
            }}
          >
            {valuesData.map((item, idx) =>
              idx === 2 || idx === 3 ? (
                <Box
                  key={item.id}
                  sx={{
                    width: "480px",
                    height: "300px",
                    "@media (max-width: 1200px)": {
                      width: "100%",
                      padding: "64px",
                    },
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
                      display: "flex",
                      gap: "12px",
                      fontWeight: 500,
                      fontSize: "20px",
                      alignItems: "center",
                    }}
                  >
                    {item.icon} {renderLanguage(item.title_ka, item.title_eng)}
                  </Typography>
                  <Typography sx={{ color: "black", marginTop: "16px" }}>
                    {renderLanguage(item.description_ka, item.description_eng)}
                  </Typography>
                </Box>
              ) : null
            )}
          </Box>
        </Box>
      ) : (
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            360: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            920: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1224: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
          }}
          pagination={{
            type: "fraction",
          }}
        >
          {valuesData.map((item) => (
            <SwiperSlide>
              <Box
                key={item.id}
                sx={{
                  width: "480px",
                  height: "300px",
                  "@media (max-width: 1200px)": {
                    width: "100%",
                    padding: "64px",
                  },
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
                    display: "flex",
                    gap: "12px",
                    fontWeight: 500,
                    fontSize: "20px",
                    alignItems: "center",
                    "@media (max-width: 1000px)": {
                      flexDirection: "column",
                    },
                  }}
                >
                  {item.icon} {renderLanguage(item.title_ka, item.title_eng)}
                </Typography>
                <Typography sx={{ color: "black", marginTop: "16px" }}>
                  {renderLanguage(item.description_ka, item.description_eng)}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <TeamSlider />
    </Box>
  );
}
