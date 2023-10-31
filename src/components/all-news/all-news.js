import { Box, Pagination, Typography } from "@mui/material";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { db } from "src/firebase/firebase";
import NewsCard from "../news/news-card/news-card";

export default function AllNews() {
  const rowsPerPage = 12;
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const { renderLanguage, renderFontFamily } = useLanguage();
  const getNews = useCallback(async () => {
    const newsRef = collection(db, "news");

    let documentSnapshots;

    documentSnapshots = await getDocs(
      query(newsRef, orderBy("created_at", "desc"), limit(12))
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
          height: "385px",
          backgroundImage: `url(/assets/NewsBackground.png)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          fontFamily={renderFontFamily()}
          fontSize={32}
          color="white"
          marginLeft={10}
        >
          {renderLanguage("ყველა სიახლე", "All News")}
        </Typography>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            marginTop: "40px",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {paginatedNews.map((item) => (
            <NewsCard news={item} />
          ))}
        </Box>
      </Box>
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
          count={Math.ceil(news.length / rowsPerPage) || 1}
          rowsPerPage={rowsPerPage}
          size="small"
        />
      </Box>
    </Box>
  );
}
