import { Box, Button, Typography } from "@mui/material";
import { aboutData } from "./data";
import styles from "./about.module.css";
import { useEffect, useState } from "react";
import LeftIcon from "../icons/LeftIcon";
import { useLanguage } from "src/contexts/language-context";
import AboutInfo from "../about-info/about-info";
import AuthorInfo from "../author-info/author-info";
import TeamInfo from "../team-info.js/team-info";
import YearCalculation from "../year-calculation/year-calculation";
import { useWindowWidth } from "../helpers/useWindowWidth";
import MobileAbout from "../mobile-about/mobile-about";
import { useRouter } from "next/router";

export default function About() {
  const [selected, setSelected] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    if (selected >= aboutData.length - 1) {
      return setSelected(0);
    }

    return setSelected(selected + 1);
  };

  const router = useRouter();
  // str.replace(/\s/g, '')
  console.log("ROUTER QUERY:", router.query);

  useEffect(() => {
    if (router.query.data) {
      setSelected(
        aboutData.findIndex(
          (item) => item.title_eng.replace(/\s/g, "") === router.query.data
        )
      );
    }
  }, [router]);

  const windowSize = useWindowWidth();

  const handlePrev = () => {
    if (selected <= 0) {
      return setSelected(aboutData.length - 1);
    }

    return setSelected(selected - 1);
  };

  const { renderLanguage } = useLanguage();

  const renderInfo = (info) => {
    let component = <AboutInfo />;

    switch (info) {
      case "About Foundation":
        component = <AboutInfo />;
        break;
      case "Year Calculation":
        component = <YearCalculation />;
        break;
      case "Team":
        component = <TeamInfo />;
        break;
      case "Author":
        component = <AuthorInfo />;
        break;
    }

    return component;
  };

  return (
    <>
      {windowSize > 800 ? (
        <>
          <Box className={styles.mainContainer}>
            {selected > 0 && (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  marginTop: "53px",
                  cursor: "pointer",
                }}
                onClick={handlePrev}
              >
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(53deg, #000 0%, rgba(0, 0, 0, 0.00) 95.77%), url(${
                      aboutData[selected - 1].picture
                    })`,
                    height: "466px",
                    width: "250px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "0.5s",
                  }}
                ></Box>
                {selected > 0 && (
                  <Button startIcon={<LeftIcon />} onClick={handlePrev}>
                    <Typography sx={{ color: "#047852" }}>
                      {renderLanguage(
                        aboutData[selected - 1]?.title_ka,
                        aboutData[selected - 1]?.title_eng
                      )}
                    </Typography>
                  </Button>
                )}
              </Box>
            )}
            <Box
              sx={{
                backgroundImage: `url(${aboutData[selected].picture})`,
                height: "546px",
                width: "800px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "0.5s",
                position: "relative",
              }}
            >
              {" "}
              <Typography
                sx={{
                  fontSize: "24px",
                  color: "white",
                  position: "absolute",
                  bottom: 40,
                  left: 0,
                  right: 0,
                  textAlign: "center",
                }}
              >
                {renderLanguage(
                  aboutData[selected]?.title_ka,
                  aboutData[selected]?.title_eng
                )}
              </Typography>
            </Box>
            {selected < aboutData.length - 1 && (
              <Box
                sx={{ marginTop: "53px", cursor: "pointer" }}
                onClick={handleNext}
              >
                <Box
                  sx={{
                    backgroundImage: `linear-gradient(53deg, #000 0%, rgba(0, 0, 0, 0.00) 95.77%), url(${
                      aboutData[selected + 1].picture
                    })`,
                    height: "466px",
                    width: "250px",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "0.5s",
                  }}
                ></Box>
                {selected <= aboutData.length - 1 && (
                  <Button
                    endIcon={
                      <LeftIcon style={{ transform: "rotateY(180deg)" }} />
                    }
                    onClick={handleNext}
                  >
                    <Typography sx={{ color: "#047852" }}>
                      {renderLanguage(
                        aboutData[selected + 1]?.title_ka,
                        aboutData[selected + 1]?.title_eng
                      )}
                    </Typography>
                  </Button>
                )}
              </Box>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              gap: "900px",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-30px",
            }}
          ></Box>
        </>
      ) : (
        <Box sx={{ marginTop: 10 }}>
          <MobileAbout
            aboutData={aboutData}
            activeStep={selected}
            setActiveStep={setSelected}
          />
        </Box>
      )}
      <Box sx={{ transition: "0.5s" }}>
        {renderInfo(aboutData[selected]?.title_eng)}
      </Box>
    </>
  );
}
