import { Box, Button, Typography } from "@mui/material";
import NewsCard from "./news-card/news-card";
import { useCallback, useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "src/firebase/firebase";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";
import { useWindowWidth } from "../helpers/useWindowWidth";

export default function News() {
  const [loading, setLoading] = useState(false);

  const [news, setNews] = useState([]);

  const router = useRouter();

  const { renderLanguage, renderFontFamily } = useLanguage();

  const getNews = useCallback(async () => {
    const newsRef = collection(db, "news");

    let documentSnapshots;

    documentSnapshots = await getDocs(
      query(newsRef, orderBy("created_at", "desc"), limit(4))
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
        marginTop: "50px",
        "@media (max-width: 920px)": {
          padding: "64px 64px",
          marginTop: "20px",
        },
        "@media (max-width: 760px)": {
          padding: "24px",
          marginTop: "20px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 800px)": {
            padding: "10px 20px",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          fontSize={20}
          fontWeight={600}
        >
          {renderLanguage("სიახლეები", "News")}
        </Typography>
        <Button
          sx={{
            fontFeatureSettings: "'case' on",
            borderRadius: "0px",
            borderBottom: "1px solid #232C65",
          }}
          fontSize={16}
          fontWeight={600}
          onClick={() => router.push("/news")}
        >
          {renderLanguage("ყველა სიახლე", "All News")}
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginTop: "40px",
          "@media (max-width: 760px)": {
            flexWrap: "wrap",
          },
        }}
      >
        {news?.map((item, idx) =>
          <NewsCard news={item} idx={idx} />
        )}
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px",
          marginTop: "32px",
          "@media (max-width: 760px)": {
            flexWrap: "wrap",
          },
        }}
      >
        {news?.map((item, idx) =>
          idx === 2 || idx === 3 ? <NewsCard news={item} idx={idx} /> : null
        )}
      </Box> */}
    </Box>
  );
}
