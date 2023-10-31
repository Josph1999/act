import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import SeeMore from "src/components/icons/SeeMore";
import { useLanguage } from "src/contexts/language-context";
import { Dates } from "../constants";
import { useRouter } from "next/router";

export default function NewsCard({ news }) {
  const { renderLanguage, renderFontFamily } = useLanguage();

  const router = useRouter();

  const options = {
    day: "numeric",
    month: "long",
    hour: "numeric",
    minute: "numeric",
    year: "numeric",
    hour12: false,
  };

  const renderDate = (dateObj) => {
    const formattedDateTime = dateObj.toLocaleDateString("en-US", options);

    const [month, day, year, at, time] = formattedDateTime.split(" ");

    const date = `${day} ${renderLanguage(
      Dates[month.toLocaleLowerCase()],
      month
    )} ${year}`;

    return date;
  };

  return (
    <Box
      onClick={() => router.push(`/news/${news?.id}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "384px",
        gap: "20px",
        cursor: "pointer",
        height: "544px",
        "@media (max-width: 800px)": {
          padding: "20px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${news?.photos?.[0].url})`,
          height: "224px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Typography fontFamily={renderFontFamily()} color="#BDBDBD">
        {renderDate(news.created_at)}
      </Typography>
      <Typography fontFamily={renderFontFamily()} fontWeight={700}>
        {renderLanguage(
          news?.title_ka.substring(0, 68),
          news?.title_eng.substring(0, 68)
        )}
        ...
      </Typography>
      <Typography>
        {renderLanguage(
          news?.title_ka.substring(0, 146),
          news?.title_eng.substring(0, 146)
        )}
        ...
      </Typography>

      <Button
        endIcon={<SeeMore />}
        onClick={() => router.push(`/news/${news?.id}`)}
      >
        {renderLanguage("სრულად ნახვა", "See More")}
      </Button>
    </Box>
  );
}
