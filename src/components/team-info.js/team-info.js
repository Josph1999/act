import { Box, Typography } from "@mui/material";
import styles from "./teamInfo.module.css";
import { data } from "./data";
import { useLanguage } from "src/contexts/language-context";

export default function TeamInfo() {
  const { renderLanguage, language } = useLanguage();

  return (
    <Box className={styles.mainContainer}>
      {data.map((item) => {
        return (
          <Box
            sx={{
              width: "384px",
              height: "336px",
              backgroundImage: `url(${item.photo})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "70px",
              "@media (max-width: 800px)": {
                marginTop: "20px",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: "270px",

              }}
            >
              <Box
                sx={{
                  width: "336px",
                  padding: "24px",
                  backgroundColor: "white",
                  fontFamily: "UpperCaseGeo",
                  backgroundColor: "#E2E0FF",
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontFamily:
                      language === "GEO"
                        ? "UpperCaseGeo"
                        : `"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";`,
                  }}
                >
                  {renderLanguage(item.name_ka, item.name_eng)}
                </Typography>
                <br></br>
                <Typography
                  sx={{
                    fontFamily:
                      language === "GEO"
                        ? "UpperCaseGeo"
                        : `"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";`,
                    color: "#909090",
                  }}
                >
                  {renderLanguage(item.position_ka, item.position_eng)}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}