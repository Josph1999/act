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
      // onClick={() => router.push(`/news/${news?.id}`)}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        gap: "20px",
        cursor: "pointer",
        "@media (max-width: 800px)": {
          padding: "20px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${news?.photos?.[0].url})`,
          height: "279px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></Box>
      <Typography sx={{ fontFeatureSettings: "'case' on"}} fontWeight={700} height='50px' >
        {renderLanguage(
          news?.title_ka.substring(0, 68) + "...",
          news?.title_eng.substring(0, 68) + "..."
        )}
      </Typography>
    </Box>
  );
}
