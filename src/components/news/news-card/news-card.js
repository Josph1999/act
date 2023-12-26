import { Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import Image from "next/image";
import SeeMore from "src/components/icons/SeeMore";
import { useLanguage } from "src/contexts/language-context";
import { Dates } from "../constants";
import { useRouter } from "next/router";
import parse from "html-react-parser";

export default function NewsCard({ news, idx, type }) {
  const { renderLanguage } = useLanguage();

  const router = useRouter();

  console.log("type:",type)

  return (
    <Box
      onClick={() =>
        router.push(
          type === "project" ? `/projects/${news?.id}` : `/news/${news?.id}`
        )
      }
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        width: "100%",
        gap: "20px",
        cursor: "pointer",
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
      <Typography
        sx={{ fontFeatureSettings: "'case' on" }}
        fontWeight={700}
        height="50px"
      >
        {renderLanguage(
          news?.title_ka.substring(0, 68) + "...",
          news?.title_eng.substring(0, 68) + "..."
        )}
      </Typography>
    </Box>
  );
}
