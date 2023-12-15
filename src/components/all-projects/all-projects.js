import { Box, Button, Pagination, Typography } from "@mui/material";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { db } from "src/firebase/firebase";
import parser from "html-react-parser";
import SeeMore from "../icons/SeeMore";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { useRouter } from "next/router";

export default function AllProjects() {
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const { renderLanguage, renderFontFamily } = useLanguage();

  const windowSize = useWindowWidth();
  const router = useRouter();

  const getProjects = useCallback(async () => {
    const projectsRef = collection(db, "projects");

    let documentSnapshots;

    documentSnapshots = await getDocs(
      query(projectsRef, orderBy("created_at", "desc"))
    );

    setLoading(true);

    const projectsData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setProjects(projectsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    getProjects();
  }, []);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedProjects = projects.slice(startIndex, endIndex);

  return (
    <Box marginTop={10}>
      <Box
        sx={{
          width: "100%",
          height: "385px",
          backgroundImage: `linear-gradient(90deg, #000 0%, rgba(0, 0, 0, 0.00) 50%), url(/assets/ProjectsBack.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          padding: "0px 128px",
          "@media (max-width: 800px)": {
            padding: "20px",
            marginTop: 10,
          },
        }}
      >
        <Typography
          sx={{fontFeatureSettings: "'case' on"}}
          fontSize={32}
          color="white"
          marginLeft={10}
        >
          {renderLanguage("პროექტები", "Projects")}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "0px 128px",
          "@media (max-width: 800px)": {
            padding: "0px 20px",
          },
        }}
      >
        {paginatedProjects.map((item, index) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
              gap: "120px",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "130px",
              "@media (max-width: 800px)": {
                flexWrap: "wrap-reverse",
                gap: "10px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                gap: "20px",
                flexDirection: "column",
                width: "40%",
                "@media (max-width: 800px)": {
                  width: "100%",
                  gap: "5px",
                },
              }}
            >
              {" "}
              <Typography sx={{ fontFeatureSettings: "'case' on", textTransform: 'uppercase' }} fontWeight={700}>
                {renderLanguage(item?.title_ka, item?.title_eng)}
              </Typography>
              <Typography>
                {parser(
                  renderLanguage(
                    item?.description_ka.substring(
                      0,
                      windowSize > 800 ? 1000 : 500
                    ) + "..." || "",
                    item?.description_eng.substring(
                      0,
                      windowSize > 800 ? 1000 : 500
                    ) + "..." || ""
                  )
                )}
              </Typography>
              <Button
                sx={{
                  fontFeatureSettings: "'case' on",
                  "@media (max-width: 800px)": {
                    width: "100%",
                  },
                }}
                endIcon={<SeeMore />}
                onClick={() => router.push(`/projects/${item?.id}`)}
                variant="outlined"
              >
                {renderLanguage("პროექტის სრულად ნახვა", "See Project Details")}
              </Button>
            </Box>
            <img
              src={item?.photos?.[0]?.url}
              width={windowSize > 800 ? 650 : 0}
              height={windowSize > 800 ? 550 : 0}
              alt={item?.photos?.[0]?.name}
              style={{
                width: windowSize > 800 ? 650 : "100%",
                height: windowSize > 800 ? 550 : 350,
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <Pagination
            onChange={handlePageChange}
            page={page}
            count={Math.ceil(projects.length / rowsPerPage) || 1}
            rowsPerPage={rowsPerPage}
            size="small"
          />
        </Box>
      </Box>
    </Box>
  );
}
