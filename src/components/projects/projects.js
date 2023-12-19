import { Box, IconButton, Typography } from "@mui/material";
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
import SeeMore from "../icons/SeeMore";
import styles from "./projects.module.css";

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
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "16px",
        padding: "128px 0px",
        "@media (max-width: 900px)": {
          padding: "0px 30px",
          marginTop: 10,
        },
        "@media (max-width: 760px)": {
          padding: "0px 24px",
          marginTop: 10,
        },
      }}
    >
      <Box>
        {windowSize > 900 ? (
          <Box>
            <Typography
              sx={{
                fontFeatureSettings: "'case' on",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              {renderLanguage("პროექტები", "Projects")}
            </Typography>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              padding: "0px 24px",
            }}
          >
            <Typography
              sx={{
                fontFeatureSettings: "'case' on",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              {renderLanguage("პროექტები", "Projects")}
            </Typography>
            <Button
              sx={{
                fontFeatureSettings: "'case' on",
                fontSize: "16px",
                fontWeight: 100,
                padding: "0px",
                borderRadius: "0px",
                borderBottom: "1px solid #232C65",
              }}
            >
              {renderLanguage("ყველა პროექტი", "All Projects")}
            </Button>
          </Box>
        )}
        <Box
          sx={{
            display: "flex",
            marginTop: "48px",
            "@media (max-width: 760px)": {
              padding: "0px 24px",
            },
          }}
        >
          <IconButton size="small">
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
          </IconButton>
          <IconButton size="small">
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </IconButton>
        </Box>
        <Typography
          sx={{
            width: "384px",
            fontFeatureSettings: "'case' on",
            fontSize: "16px",
            fontWeight: 700,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "50px",
            marginTop: "30px",
          }}
        >
          {renderLanguage(projects[0]?.title_ka, projects[0]?.title_eng)}
        </Typography>
        <img
          style={{
            objectFit: "cover",
            transition: "opacity 0.5s ease-in-out",
            width: "384px",
            marginTop: "16px",
          }}
          className={styles.imageStyles}
          src={projects[0]?.photos?.[0]?.url}
          width={0}
          height={512}
          loading="lazy"
        />
      </Box>
      <Box>
        {windowSize > 900 ? (
          <>
            <Box
              sx={{
                display: "flex",
                width: "384px",
                justifyContent: "flex-end",
              }}
            >
              <Button
                sx={{
                  fontFeatureSettings: "'case' on",
                  fontSize: "16px",
                  fontWeight: 100,
                  padding: "0px",
                  borderRadius: "0px",
                  borderBottom: "1px solid #232C65",
                }}
              >
                {renderLanguage("ყველა პროექტი", "All Projects")}
              </Button>
            </Box>
            <Box sx={{ marginTop: "155px" }}>
              <Typography
                sx={{
                  width: "384px",
                  fontFeatureSettings: "'case' on",
                  fontSize: "16px",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  maxHeight: "50px",
                }}
              >
                {renderLanguage(projects[1]?.title_ka, projects[1]?.title_eng)}
              </Typography>
              <img
                style={{
                  objectFit: "cover",
                  transition: "opacity 0.5s ease-in-out",
                  width: "384px",
                  opacity: selected ? 1 : 0,
                  marginTop: "16px",
                }}
                src={projects[1]?.photos?.[0]?.url}
                width={0}
                height={512}
                loading="lazy"
              />
            </Box>
          </>
        ) : null}
      </Box>
    </Box>
  );
}
