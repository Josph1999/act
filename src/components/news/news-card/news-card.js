import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import SeeMore from "src/components/icons/SeeMore";
import { useLanguage } from "src/contexts/language-context";
import { Dates } from "../constants";
import { useRouter } from "next/router";
import parse from "html-react-parser";

export default function NewsCard({ news, idx }) {
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
        "@media (max-width: 1410px)": {
          display: idx === 2 ? 'none' : 'block',
        },
        "@media (max-width: 700px)": {
          display:'block',
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
      <Typography sx={{fontFeatureSettings: "'case' on"}} color="#BDBDBD">
        {renderDate(news.created_at)}
      </Typography>
      <Typography sx={{fontFeatureSettings: "'case' on"}} fontWeight={700} height='50px'>
        {renderLanguage(
          news?.title_ka.substring(0, 68)  + '...',
          news?.title_eng.substring(0, 68)  + '...'
        )}
      </Typography>
      <Typography height='130px'>
        {renderLanguage(
          parse(news?.description_ka.substring(0, 146) + '...'),
          parse(news?.description_eng.substring(0, 146) + '...')
        )}
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
