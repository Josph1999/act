import { Box, Button, Typography } from "@mui/material";
import NewsCard from "./news-card/news-card";
import { useCallback, useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";

export default function News() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  const router = useRouter();

  const { renderLanguage, renderFontFamily } = useLanguage();

  const getNews = useCallback(async () => {
    const newsRef = collection(db, "news");

    let documentSnapshots;

    documentSnapshots = await getDocs(
      query(newsRef, orderBy("created_at", "desc"), limit(3))
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

  return (
    <Box
      padding="0px 128px"
      sx={{
        "@media (max-width: 800px)": {
          padding: "0px",
          marginTop: "20px",
          padding: "0px",
        },
      }}
    >
      <Box >
        <Typography fontFamily={renderFontFamily()} fontSize={32} fontWeight={600}>
          {renderLanguage("სიახლეები", "News")}
        </Typography>
        <Typography
          fontFamily={renderFontFamily()}
          color="#2F2F2F"
          fontWeight={300}
        >
          {renderLanguage(
            "აღმოაჩინე უკანასკნელი სიახლეები ფონდის შესახებ",
            "Discover the latest news about the Foundation"
          )}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
        }}
      >
        {news.map((item) => (
          <NewsCard news={item} />
        ))}
      </Box>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        marginTop={10}
      >
        <Button
          variant="outlined"
          sx={{
            fontFamily: renderFontFamily(),
          }}
          onClick={() => router.push("/news")}
        >
          {renderLanguage("ყველა სიახლე", "All News")}
        </Button>
      </Box>
    </Box>
  );
}
