import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useLanguage } from "src/contexts/language-context";
import Image from "next/image";
import { teamInfo } from "../about/data";

export default function Biography() {
  const router = useRouter();
  const { renderLanguage, renderFontFamily } = useLanguage();

  const { id } = router.query;

  const about = teamInfo.find((item) => item.person_id === id);

  return (
    <>
      <Box
        marginTop={7}
        sx={{
          padding: "50px 256px",
          paddingBottom: "20px",
          "@media (max-width: 800px)": {
            padding: "20px",
            marginTop: 10,
          },
        }}
      >
        <Typography
          sx={{ fontFeatureSettings: "'case' on" }}
          fontSize={20}
          textAlign="center"
        >
          {renderLanguage(about?.name_ka, about?.name_eng)}
        </Typography>
        <Box sx={{ marginTop: 6 }}>
          {" "}
          <Image
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "600px", objectFit: "contain" }}
            src={about?.image}
            alt={about?.image}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          padding: "50px 256px",
          "@media (max-width: 800px)": {
            padding: "20px",
            marginTop: "20px",
          },
        }}
      >
        <Typography color="black !important">
          {renderLanguage(
            about?.biography_ka || "",
            about?.biography_eng || ""
          )}
        </Typography>
      </Box>
    </>
  );
}
