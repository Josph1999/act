import {
  doc,
  getDoc,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { useRouter } from "next/router";
import { db } from "src/firebase/firebase";
import {
  Box,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import Image from "next/image";
import { Dates } from "../news/constants";
import parser from "html-react-parser";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NewsLinks from "../news-links/news-links";
import { ArrowBack } from "@mui/icons-material";
import Subscribe from "../subscribe/subscribe";

export default function NewsDetails() {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const { renderLanguage, renderFontFamily } = useLanguage();

  const router = useRouter();

  const { id } = router.query;

  const getDocumentById = useCallback(async () => {
    try {
      const docRef = doc(db, "news", id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists) {
        const data = docSnapshot.data();

        data.id = docSnapshot.id;
        data.created_at = docSnapshot.data().created_at.toDate();
        setNews(data);
      } else {
        toast.error(renderLanguage("სიახლე არ მოიძებნა!", "News not found!"));
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

  useEffect(() => {
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
        marginTop={7}
        sx={{
          padding: "64px 128px",
          paddingBottom: "20px",
          "@media (max-width: 1000px)": {
            padding: "64px",
            marginTop: 10,
          },
          "@media (max-width: 760px)": {
            padding: "24px",
            marginTop: 10,
          },
        }}
      >
        <Box
        
          sx={{
            display: "flex",
            gap: "16px",
            "@media (max-width: 760px)": {
              flexWrap: "wrap",
              marginTop: "20px",
            },
          }}
        >
          {" "}
          <Box sx={{ display: "flex", gap: "16px", width: "100%" }}>
            <ArrowBack
              onClick={() => router.push("/news")}
              style={{ cursor: "pointer" }}
            />

            <Box sx={{width: '100%'}}>
              <Typography
                sx={{
                  fontFeatureSettings: "'case' on",
                  "@media (max-width: 760px)": {
                    fontSize: "20px",
                  },
                }}
                fontSize={28}
              >
                {renderLanguage(news?.title_ka, news?.title_eng)}
              </Typography>
              <Typography
                sx={{ fontFeatureSettings: "'case' on", marginTop: "24px" }}
                fontSize={16}
                textAlign="left"
              >
                {renderDate(news?.created_at)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              "@media (max-width: 760px)": {
                marginTop: "24px",
              },
            }}
          >
            {" "}
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "540px", objectFit: "contain" }}
              loading="lazy"
              src={news?.photos?.[0]?.url}
              alt={news?.photos?.[0]?.name}
            />
            <Typography color="black !important">
              {parser(
                renderLanguage(
                  news?.description_ka || "",
                  news?.description_eng || ""
                )
              )}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "128px",
          "@media (max-width: 800px)": {
            padding: "20px",
            marginTop: "20px",
          },
        }}
      >
        {news?.photos?.map((item) => (
          <Image
            width={384}
            height={224}
            src={item?.url}
            alt={item.name}
            style={{ objectFit: "cover" }}
          />
        ))}
      </Box>
      <Subscribe />
    </>
  );
}
