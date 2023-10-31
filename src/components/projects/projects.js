import { Box, Typography } from "@mui/material";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { db } from "src/firebase/firebase";
import parse from "html-react-parser";
import { useWindowWidth } from "../helpers/useWindowWidth";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useRouter } from "next/router";

export default function Projects() {
  const windowSize = useWindowWidth();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [selected, setSelected] = useState(projects[0]);
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const router = useRouter();

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const getProjects = useCallback(async () => {
    const projectsRef = collection(db, "projects");

    let documentSnapshots;

    documentSnapshots = await getDocs(
      query(projectsRef, orderBy("created_at", "desc"), limit(3))
    );

    setLoading(true);

    const projectsData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setProjects(projectsData);
    setSelected(projectsData[0]);
    setLoading(false);
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  const { renderLanguage, renderFontFamily } = useLanguage();
  return (
    <Box
      sx={{
        padding: "128px 128px",
        "@media (max-width: 900px)": {
          padding: "0px 30px",
          marginTop: 10,
        },
      }}
    >
      <Typography sx={{ fontFamily: renderFontFamily(), fontSize: "32px" }}>
        {renderLanguage("პროექტები", "Projects")}
      </Typography>
      <Typography sx={{ fontFamily: renderFontFamily(), color: "#111927" }}>
        {renderLanguage(
          "დასრულებული და მიმდინარე პროექტები",
          "Completed and ongoing projects"
        )}
      </Typography>
      {windowSize > 900 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: 'space-between',
            marginTop: "32px",
            gap: '128px',
            flexWrap: "no-wrap",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: '50px',
            }}
          >
            {projects.map((item) => (
              <Box
                sx={
                  selected?.id === item.id
                    ? {
                        borderLeft: "4px solid #4338CA",
                        height: "112px",
                        paddingLeft: "32px",
                        cursor: "pointer",
                        width: "500px",
                        overflow: 'hidden',
                        transition:
                          "border-left-color 0.3s, height 0.3s, padding-left 0.3s",
                      }
                    : {
                        height: "112px",
                        cursor: "pointer",
                        width: "500px",
                        overflow: 'hidden',
                        transition:
                          "border-left-color 0.3s, height 0.3s, padding-left 0.3s",
                        "&:hover": {
                          paddingLeft: "32px",
                          cursor: "pointer",
                          borderLeft: "4px solid #8338CA",
                        },
                      }
                }
                key={item.id}
                onClick={() => setSelected(item)}
              >
                <Typography fontFamily={renderFontFamily()} fontWeight={600}>
                  {renderLanguage(
                    item.title_ka.substring(0, 80) + "...",
                    item.title_eng.substring(0, 80) + "..."
                  )}
                </Typography>
                <Typography>
                  {renderLanguage(
                    parse(item.description_ka.substring(0, 150) + "..."),
                    parse(item.description_eng.substring(0, 150) + "...")
                  )}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box>
            <img
              style={{
                objectFit: "cover",
                borderRadius: "32px",
                transition: "opacity 0.5s ease-in-out",
                width: '100%',
                opacity: selected ? 1 : 0, 
              }}
              src={selected?.photos?.[0]?.url}
              width={0}
              height={512}
              loading="lazy"
            />
          </Box>
        </Box>
      ) : (
        <Box>
          <Box borderTop="4px solid #4338CA" paddingTop={5} marginTop={5}>
            <Typography fontFamily={renderFontFamily()} fontWeight={600}>
              {renderLanguage(
                projects?.[activeStep]?.title_ka.substring(0, 80) + "...",
                projects?.[activeStep]?.title_eng.substring(0, 80) + "..."
              )}
            </Typography>
            <Typography>
              {renderLanguage(
                parse(
                  projects?.[activeStep]?.description_ka.substring(0, 150) +
                    "..."
                ),
                parse(
                  projects?.[activeStep]?.description_eng.substring(0, 150) +
                    "..."
                )
              )}
            </Typography>
          </Box>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {projects.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: 255,
                      display: "block",
                      maxWidth: 400,
                      overflow: "hidden",
                      width: "100%",
                      objectFit: "cover",
                    }}
                    src={step?.photos?.[0].url}
                    alt={step?.photos?.[0].name}
                  />
                ) : null}
              </div>
            ))}
          </SwipeableViews>
        </Box>
      )}
      <Box marginTop={13} width="100%" display="flex" justifyContent="center">
        <Button variant="outlined" onClick={() => router.push(`/projects`)}>
          {renderLanguage("ყველა პროექტი", "All Projects")}
        </Button>
      </Box>
    </Box>
  );
}
