import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { useRouter } from "next/router";
import { db } from "src/firebase/firebase";
import { Box, Typography } from "@mui/material";
import { toast } from "react-toastify";
import Image from "next/image";
import { Dates } from "../news/constants";
import parser from "html-react-parser";

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
          padding: "128px",
          paddingBottom: "20px",
          "@media (max-width: 800px)": {
            padding: "20px",
            marginTop: 10,
          },
        }}
      >
        <Typography
          fontFamily={renderFontFamily()}
          fontSize={20}
          textAlign="center"
        >
          {renderLanguage(news?.title_ka, news?.title_eng)}
        </Typography>
        <Box sx={{ marginTop: 6 }}>
          {" "}
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "600px", objectFit: "cover" }}
            src={news?.photos?.[0]?.url}
            alt={news?.photos?.[0]?.name}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Box
            sx={{ backgroundColor: "#4338CA", padding: "18px", width: "200px" }}
          >
            <Typography fontFamily={renderFontFamily()} textAlign="center">
              {renderDate(news?.created_at)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: "128px",
          "@media (max-width: 800px)": {
            padding: "20px",
            marginTop: "20px",
          },
        }}
      >
        <Typography color="black !important">
          {parser(
            renderLanguage(
              news?.description_ka || "",
              news?.description_eng || ""
            )
          )}
        </Typography>
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
          <Image width={384} height={224} src={item?.url} alt={item.name} />
        ))}
      </Box>
    </>
  );
}