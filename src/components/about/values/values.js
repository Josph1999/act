import { Box, Typography } from "@mui/material";
import { useWindowWidth } from "src/components/helpers/useWindowWidth";
import { useLanguage } from "src/contexts/language-context";
import { valuesData } from "../data";

export default function Values() {
  const { renderLanguage } = useLanguage();
  const windowSize = useWindowWidth();
  return (
    <Box
      id="Values"
      sx={{
        display: "flex",
        padding: "128px 0px",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        "@media (max-width: 1200px)": {
          flexDirection: "column",
        },
        "@media (max-width: 1000px)": {
          padding: "64px 64px",
        },
        "@media (max-width: 760px)": {
          padding: "24px !important",
        },
      }}
    >
      {windowSize > 1200 ? (
        <Box sx={{ height: "575px" }}>
          <Typography
            sx={{
              fontFeatureSettings: "'case' on",
              textTransform: "uppercase",
              writingMode: "vertical-rl",
              transform: "rotate(180deg)",
              fontSize: "30px",
            }}
          >
            {renderLanguage(`ღირებულებები`, `Values`)}
          </Typography>
        </Box>
      ) : (
        <Box>
          <Typography
            sx={{
              fontFeatureSettings: "'case' on",
              textTransform: "uppercase",
              fontSize: "30px",
            }}
          >
            {renderLanguage(`ღირებულებები`, `Values`)}
          </Typography>
        </Box>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            "@media (max-width: 1200px)": {
              flexDirection: "column",
            },
          }}
        >
          {valuesData.map((item, idx) =>
            idx === 0 || idx === 1 ? (
              <Box
                key={item.id}
                sx={{
                  width: "480px",
                  height: "300px",
                  padding: "32px",
                  backgroundColor: "#F0F5FE",
                  "@media (max-width: 1200px)": {
                    width: "100%",
                    padding: "64px",
                  },
                  "@media (max-width: 1000px)": {
                    padding: "64px",
                  },
                  "@media (max-width: 760px)": {
                    padding: "24px !important",
                  },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    gap: "12px",
                    fontWeight: 500,
                    fontSize: "20px",
                    alignItems: "center",
                  }}
                >
                  {item.icon} {renderLanguage(item.title_ka, item.title_eng)}
                </Typography>
                <Typography sx={{ color: "black", marginTop: "16px" }}>
                  {renderLanguage(item.description_ka, item.description_eng)}
                </Typography>
              </Box>
            ) : null
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            "@media (max-width: 1200px)": {
              flexDirection: "column",
            },
          }}
        >
          {valuesData.map((item, idx) =>
            idx === 2 || idx === 3 ? (
              <Box
                key={item.id}
                sx={{
                  width: "480px",
                  padding: "32px",
                  backgroundColor: "#F0F5FE",
                  "@media (max-width: 1200px)": {
                    width: "100%",
                  },
                  "@media (max-width: 1000px)": {
                    padding: "64px",
                  },
                  "@media (max-width: 760px)": {
                    padding: "24px !important",
                  },
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    gap: "12px",
                    fontWeight: 500,
                    fontSize: "20px",
                    alignItems: "center",
                  }}
                >
                  {item.icon} {renderLanguage(item.title_ka, item.title_eng)}
                </Typography>
                <Typography sx={{ color: "black", marginTop: "16px" }}>
                  {renderLanguage(item.description_ka, item.description_eng)}
                </Typography>
              </Box>
            ) : null
          )}
        </Box>
      </Box>
    </Box>
  );
}
