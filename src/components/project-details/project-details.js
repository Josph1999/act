import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { useRouter } from "next/router";
import { db } from "src/firebase/firebase";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import Image from "next/image";
import parser from "html-react-parser";
import { Dates } from "../news/constants";
import NewsLinks from "../news-links/news-links";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NewsCard from "../news/news-card/news-card";
import Subscribe from "../subscribe/subscribe";
import { useWindowWidth } from "../helpers/useWindowWidth";

export default function ProjectsDetails() {
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const [moreProjects, setMoreProjects] = useState([]);
  const { renderLanguage, renderFontFamily } = useLanguage();

  const router = useRouter();

  const { id } = router.query;
  const windowSize = useWindowWidth();
  const getDocumentById = useCallback(async () => {
    try {
      const docRef = doc(db, "projects", id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists) {
        const data = docSnapshot.data();

        data.id = docSnapshot.id;
        data.created_at = docSnapshot.data().created_at.toDate();
        setProjects(data);
      } else {
        toast.error(
          renderLanguage("პროექტი არ მოიძებნა!", "Projects not found!")
        );
      }
    } catch (error) {
      toast.error(
        renderLanguage(
          "შეცდომა დოკუმენტის ძებნის დროს",
          "Error while searching for document"
        )
      );
    }
  }, [id]);

  const getProjects = useCallback(async () => {
    const projectsRef = collection(db, "projects");

    let documentSnapshots;

    documentSnapshots = await getDocs(query(projectsRef));

    setLoading(true);

    const projectsData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));

    function generateUniqueRandomNumbers(min, max, count) {
      if (max - min + 1 < count) {
        throw new Error("Cannot generate unique numbers, range is too small");
      }

      const uniqueNumbers = new Set();

      while (uniqueNumbers.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        uniqueNumbers.add(randomNum);
      }

      return Array.from(uniqueNumbers);
    }

    const randomNumbers = generateUniqueRandomNumbers(
      1,
      projectsData.length - 2,
      3
    );

    const filteredProjectData = projectsData.filter((item) => item.id !== id);

    setMoreProjects([
      filteredProjectData[randomNumbers[0]],
      filteredProjectData[randomNumbers[1]],
      filteredProjectData[randomNumbers[2]],
    ]);
    setLoading(false);
  }, []);
  useEffect(() => {
    getProjects();
    getDocumentById();
  }, [id]);

  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    hour12: false,
  };
  const renderDate = (dateObj) => {
    const formattedDateTime =
      dateObj?.toLocaleDateString("en-US", options) || "";

    const [month, day, year, at, time] = formattedDateTime?.split(" ");

    const formatedDate = `${day} ${renderLanguage(
      Dates[month?.toLocaleLowerCase()],
      month
    )} ${year}`;

    return formatedDate;
  };

  return (
    <>
      <Box
        sx={{
          marginTop: "120px",
          padding: "64px 128px",
          "@media (max-width: 1200px)": {
            padding: "64px 64px",
          },
          "@media (max-width: 980px)": {
            padding: "64px 64px",
            flexDirection: "column",
          },
          "@media (max-width: 760px)": {
            padding: "24px 24px",
          },
        }}
      >
        <Typography
          sx={{
            fontFeatureSettings: "'case' on",
            width: "70%",
            "@media (max-width: 980px)": {
              width: "100%",
            },
          }}
          fontSize={28}
          textAlign="left"
        >
          {renderLanguage(projects?.title_ka, projects?.title_eng)}
        </Typography>
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          textAlign="left"
          color="#232C65"
        >
          {renderDate(projects?.created_at)}
        </Typography>
        <Box
          sx={{
            gap: "16px",
            display: "flex",
            "@media (max-width: 980px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Box>
              <Box>
                {" "}
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "600px", objectFit: "cover" }}
                  src={projects?.photos?.[0]?.url}
                  alt={projects?.photos?.[0]?.name}
                />
              </Box>
            </Box>
            <Box
              sx={{
                "@media (max-width: 800px)": {
                  marginTop: "20px",
                },
              }}
            >
              <Typography color="black !important">
                {parser(
                  renderLanguage(
                    projects?.description_ka || "",
                    projects?.description_eng || ""
                  )
                )}
              </Typography>
            </Box>
            <Box
              sx={{
                "@media (max-width: 800px)": {
                  padding: "20px",
                  marginTop: "20px",
                },
              }}
            >
              {projects?.mediaLinks && projects?.mediaLinks.length > 0 ? (
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{ backgroundColor: "#4338CA", color: "white" }}
                  >
                    <Typography
                      sx={{
                        fontFeatureSettings: "'case' on",
                        textTransform: "uppercase",
                      }}
                    >
                      {renderLanguage("მედია ლინკები", "Media Links")}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                      }}
                    >
                      {projects?.mediaLinks?.map((item) => (
                        <NewsLinks data={item} />
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ) : null}
            </Box>
            <Typography
              sx={{ fontFeatureSettings: "'case' on", marginTop: "40px" }}
              fontSize={28}
              textAlign="left"
            >
              {renderLanguage("გალერია", "GALLERY")}
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                flexWrap: "wrap",
                marginBottom: "64px",
                marginTop: "20px",
              }}
            >
              {projects?.photos?.map((item) => (
                <>
                  <Image
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: windowSize < 761 ? "100%" : "320px",
                      height: "224px",
                      objectFit: "cover",
                      "@media (max-width: 800px)": {
                        marginTop: "20px",
                      },
                    }}
                    src={item?.url}
                    alt={item.name}
                  />
                </>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "550px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              "@media (max-width: 980px)": {
                width: "100%",
              },
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Box
                sx={{ width: "80%", borderBottom: "1px solid #9BBDF5" }}
              ></Box>
            </Box>

            <Typography
              fontSize={24}
              sx={{ fontFeatureSettings: "'case' on", textAlign: "right" }}
            >
              {renderLanguage("მეტი პროექტი", "MORE PROJECTS")}
            </Typography>
            {moreProjects.map((item) => (
              <NewsCard news={item} type="project" />
            ))}
          </Box>
        </Box>
      </Box>
      <Subscribe />
    </>
  );
}
