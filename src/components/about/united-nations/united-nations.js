import { Box, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";
import { goals } from "../data";
import NoPoverty from "src/components/icons/NoPovertyIcon";

export default function UnitedNations() {
  const { renderLanguage } = useLanguage();

  return (
    <Box
      id="UnitedNationsSustainableDevelopment"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "128px 128px",
        "@media (max-width: 1000px)": {
          padding: "64px 64px",
        },
        "@media (max-width: 760px)": {
          padding: "24px !important",
        },
      }}
    >
      <Typography
        sx={{
          fontFeatureSettings: "'case' on",
          fontSize: "30px",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {renderLanguage(
          `გაეროს მდგრადი განვითარება`,
          `United Nations Sustainable Development`
        )}
      </Typography>
      <Typography
        sx={{
          fontFeatureSettings: "'case' on",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {renderLanguage(
          `ACT Georgia-ს ინიციატივები მჭიდროდ შეესაბამება გაეროს მდგრად განვითარებას
მიზნები (SDGs), კერძოდ:`,
          `ACT Georgia's initiatives are closely aligned with the United Nations Sustainable Development
Goals (SDGs), particularly:`
        )}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          "@media (max-width: 1200px)": {
            display: "flex",
            flexDirection: "row",
            gap: "16px",
          },
          "@media (max-width: 900px)": {
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            "@media (max-width: 1200px)": {
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              width: "404px",
              "@media (max-width: 1200px)": {
                width: "100%",
              },
              padding: "24px",
              height: "300px",
              backgroundImage: `url(/assets/Goals.png)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></Box>
          {goals.map((item, idx) =>
            idx < 3 ? (
              <Box
                sx={{
                  width: "404px",
                  padding: "24px",
                  height: "300px",
                  backgroundColor: "#232C65",
                  color: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  "@media (max-width: 1200px)": {
                    width: "100%",
                  },
                }}
              >
                {item.icon}
                <Typography
                  width="170px"
                  sx={{
                    "@media (max-width: 1500px)": {
                      width: "100%",
                    },
                  }}
                >
                  {item.description_eng}
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
          {goals.map((item, idx) =>
            idx >= 3 ? (
              <Box
                sx={{
                  width: "404px",
                  padding: "24px",
                  height: "300px",
                  backgroundColor: "#232C65",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                  color: "white",
                  "@media (max-width: 1200px)": {
                    width: "100%",
                  },
                }}
              >
                {item.icon}
                <Typography
                  width="170px"
                  sx={{
                    "@media (max-width: 1500px)": {
                      width: "100%",
                    },
                  }}
                >
                  {item.description_eng}
                </Typography>
              </Box>
            ) : null
          )}
        </Box>
      </Box>
    </Box>
  );
}
