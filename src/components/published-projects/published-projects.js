import Head from "next/head";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Skeleton,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import AdminProjectsCard from "../admin-projects-card/admin-projects-card";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import styles from "./published-projects.module.css";
import { TicketsSearch } from "src/sections/my-raffles/tickets-search";
import { useLanguage } from "src/contexts/language-context";

const MyPublishedProjects = () => {
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const { renderLanguage } = useLanguage();

  const router = useRouter();

  const [projects, setProjects] = useState([]);

  const getProjects = useCallback(async () => {
    const ProjectsRef = collection(db, "projects");

    let documentSnapshots;

    if (searchText !== "") {
      documentSnapshots = await getDocs(
        query(ProjectsRef, where(renderLanguage("title_ka", "title_eng"), ">=", searchText))
      );
    } else {
      documentSnapshots = await getDocs(query(ProjectsRef, orderBy("created_at", "desc")));
    }

    setLoading(true);

    const ProjectsData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setProjects(ProjectsData);
    setLoading(false);
  }, [page, searchText]);

  useEffect(() => {
    getProjects();
  }, [page, searchText]);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedProjects = projects.slice(startIndex, endIndex);

  let debounceTimer;
  const handleSearch = (value) => {
    setLoading(true);
    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      setSearchText(value);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Published Projects | Dbef</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="column" justifyContent="space-between" gap="20px" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">
                  {renderLanguage("განთავსებული პროექტები", "Published Projects")}
                </Typography>
              </Stack>
              <div>
                <Button
                  startIcon={
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                  onClick={() => router.push("/dashboard/add-project")}
                >
                  {renderLanguage("პროექტის დამატება", "Add Project")}
                </Button>
              </div>
            </Stack>
            <TicketsSearch
              onChange={handleSearch}
              value={searchText}
              text={renderLanguage("პროექტის ძებნა", "Search Project")}
            />
            <Box className={styles.cardsContainer}>
              {loading
                ? Array.from({ length: 6 }, (value, index) => (
                    <Skeleton
                      key={index}
                      className={styles.skeleton}
                      sx={{ height: "506px", marginBottom: "-200px" }}
                    />
                  ))
                : paginatedProjects?.map((item) => (
                    <AdminProjectsCard projects={item} key={item.id} />
                  ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
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
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default MyPublishedProjects;
