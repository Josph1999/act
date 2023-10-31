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
import AdminNewsCard from "../admin-news-card/admin-news-card";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import styles from "./published-news.module.css";
import { TicketsSearch } from "src/sections/my-raffles/tickets-search";
import { useLanguage } from "src/contexts/language-context";

const MyPublishedNews = () => {
  const rowsPerPage = 6;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  const { renderLanguage } = useLanguage();

  const router = useRouter();

  const [news, setNews] = useState([]);

  const getNews = useCallback(async () => {
    const newsRef = collection(db, "news");

    let documentSnapshots;

    if (searchText !== "") {
      documentSnapshots = await getDocs(
        query(newsRef, where(renderLanguage("title_ka", "title_eng"), ">=", searchText))
      );
    } else {
      documentSnapshots = await getDocs(query(newsRef, orderBy("created_at", "desc")));
    }

    setLoading(true);

    const newsData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setNews(newsData);
    setLoading(false);
  }, [page, searchText]);

  useEffect(() => {
    getNews();
  }, [page, searchText]);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedNews = news.slice(startIndex, endIndex);

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
        <title>Published News| Dbef</title>
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
                  {renderLanguage("განთავსებული სიახლეები", "Published News")}
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
                  onClick={() => router.push("/dashboard/add-news")}
                >
                  {renderLanguage("სიახლის დამატება", "Add News")}
                </Button>
              </div>
            </Stack>
            <TicketsSearch
              onChange={handleSearch}
              value={searchText}
              text={renderLanguage("სიახლის ძებნა", "Search news")}
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
                : paginatedNews?.map((item) => <AdminNewsCard news={item} key={item.id} />)}
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
                count={Math.ceil(news.length / rowsPerPage) || 1}
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

export default MyPublishedNews;
