import { Box, Grid, Pagination, Typography } from "@mui/material";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { db } from "src/firebase/firebase";
import NewsCard from "../news/news-card/news-card";
import Subscribe from "../subscribe/subscribe";
import { useWindowWidth } from "../helpers/useWindowWidth";

export default function AllNews() {
  const rowsPerPage = 10;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const { renderLanguage, renderFontFamily } = useLanguage();

  const windowWidth = useWindowWidth();

  const getNews = useCallback(async () => {
    const newsRef = collection(db, "news");

    let documentSnapshots;

    documentSnapshots = await getDocs(
      query(newsRef, orderBy("created_at", "desc"))
    );

    setLoading(true);

    const newsData = documentSnapshots.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      created_at: doc.data().created_at.toDate(),
    }));
    setNews(newsData);
    setLoading(false);
  }, []);

  useEffect(() => {
    getNews();
  }, []);

  const handlePageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedNews = news.slice(startIndex, endIndex);

  return (
    <Box marginTop={10}>
      <Box
        sx={{
          width: "100%",
          alignItems: "center",
          color: "black",
          padding: "32px 128px",
          "@media (max-width: 1000px)": {
            padding: "32px 64px",
            marginTop: "20px",
          },
          "@media (max-width: 760px)": {
            padding: "24px !important",
          },
        }}
      >
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          fontSize={34}
          color="#232C65"
        >
          {renderLanguage("ყველა სიახლე", "Articles")}
        </Typography>
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          fontSize={16}
          color="#232C65"
        >
          {renderLanguage(
            "ბოლო სიახლეები ACT ისგან",
            "The latest news about Aisit Georgia"
          )}
        </Typography>
      </Box>
      <Subscribe />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "16px",
          padding: "0px 128px",
          marginTop: "40px",
          "@media (max-width: 1000px)": {
            padding: "0px 64px",
            marginTop: "20px",
          },
          "@media (max-width: 760px)": {
            padding: "24px !important",
          },
        }}
      >
        {windowWidth > 760 ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {paginatedNews.map((item, idx) => (
              <Grid item xs={6}>
                {" "}
                <NewsCard news={item} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              marginTop: "40px",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            {paginatedNews.map((item, idx) => (
              <NewsCard news={item} />
            ))}
          </Box>
        )}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
          marginBottom: '60px'
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
    </Box>
  );
}
