import Head from "next/head";
import { Box, Container, Unstable_Grid2 as Grid } from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { useMockedUser } from "src/hooks/use-mocked-user";
import { useCallback, useEffect, useState } from "react";
import { db } from "src/firebase/firebase";
import {
  QuerySnapshot,
  collection,
  getDocs,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { OverviewLatestNews } from "src/sections/overview/overview-latest-news";
import { OverviewLatestProjects } from "src/sections/overview/overview-latest-projects";
import { OverviewNewsSize } from "src/sections/overview/overview-news-size";
import { OverviewProjectsSize } from "src/sections/overview/overview-projects-size";

const now = new Date();

const Page = () => {
  const user = useMockedUser();

  const [news, setNews] = useState([]);
  const [newsSize, setNewsSize] = useState(0);
  const [projectsSize, setProjectsSize] = useState(0);
  const [projects, setProjects] = useState([]);

  const getNews = useCallback(async () => {
    const newsRef = collection(db, "news");
    const projectsRef = collection(db, "projects");

    const querySnapshot = await getDocs(newsRef);
    const projectSizesSnapshot = await getDocs(projectsRef);
    setNewsSize(querySnapshot.size);
    setProjectsSize(projectSizesSnapshot.size);

    const news = query(newsRef, orderBy("created_at", "desc"), limit(6));
    const newsSnapshots = await getDocs(news);
    const newsData = newsSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setNews(newsData);

    const projects = query(projectsRef, orderBy("created_at", "desc"), limit(6));
    const projectSnapshots = await getDocs(projects);
    const projectsData = projectSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setProjects(projectsData);
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  return (
    <>
      <Head>
        <title>Overview | DBEF</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewNewsSize difference={12} positive sx={{ height: "100%" }} value={newsSize} />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <OverviewProjectsSize sx={{ height: "100%" }} value={projectsSize} />
            </Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewLatestNews news={news} sx={{ height: "100%" }} />
            </Grid>
            <Grid xs={12} md={12} lg={8}>
              <OverviewLatestProjects projects={projects} sx={{ height: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
