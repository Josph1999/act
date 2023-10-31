import { Box, Typography } from "@mui/material";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { useRouter } from "next/router";
import styles from "./main.module.css";
import { useLanguage } from "src/contexts/language-context";

export default function MainSlider() {
  const router = useRouter();
  const windowSize = useWindowWidth();

  const { renderLanguage, renderFontFamily } = useLanguage();

  return (
    <>
      {windowSize > 800 ? (
        <>
          <video autoPlay muted loop className={styles.videoBackground}>
            <source
              src="https://firebasestorage.googleapis.com/v0/b/georaffal.appspot.com/o/2%20versia%20efectis%20gareshe.mp4?alt=media&token=e13627ae-af4f-423c-ab2b-97d92f033257&_gl=1*1609ues*_ga*MTMyOTM3MzgzNC4xNjk3MjE1Nzc3*_ga_CW55HF8NVT*MTY5NzgyNTM2Mi4xMS4xLjE2OTc4MjY0MTAuMTEuMC4w"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <Box
            sx={{
              width: "100%",
              height: "1000px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "60px",
              zIndex: 2,
              paddingLeft: '128px',
              position: "relative",
              background: `var(--Hero-Overlay,
                linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.17%, rgba(0, 0, 0, 0) 100%),
                url("https://firebasestorage.googleapis.com/v0/b/georaffal.appspot.com/o/2%20versia%20efectis%20gareshe.mp4?alt=media&token=e13627ae-af4f-423c-ab2b-97d92f033257&_gl=1*1609ues*_ga*MTMyOTM3MzgzNC4xNjk3MjE1Nzc3*_ga_CW55HF8NVT*MTY5NzgyNTM2Mi4xMS4xLjE2OTc4MjY0MTAuMTEuMC4w") lightgray 50% / cover no-repeat
              )`
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: "10px",
                "@media (max-width: 800px)": {
                  fontSize: "12px",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "white",
                  textAlign: "left",
                  fontFamily: "UpperCaseGeo !important",
                  "@media (max-width: 800px)": {
                    fontSize: "32px",
                    justifyContent: "center",
                    fontFamily: "UpperCaseGeo !important",
                    alignItems: "center",
                    textAlign: "center",
                  },
                }}
              >
                {renderLanguage("დავით ბეჟუაშვილის", "David Bezhuashvili")}{" "}
                <br /> {renderLanguage("განათლების ცენტრი", "Education Center")}
              </Typography>
              <Typography variant="h6" fontWeight={500} sx={{ color: "white" }}>
                {renderLanguage(
                  "განათლება განვითარებული, თანამედროვე, დემოკრატიული ქვეყნის",
                  "Education is the main value of a developed, modern"
                )}{" "}
                <br />{" "}
                {renderLanguage("მთავარი ღირებულებაა", "democratic country")}
              </Typography>
            </Box>
          </Box>
        </>
      ) : (
        <Box
          sx={{
            backgroundImage: `url(/assets/Sliderbg.png)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "612px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "20px",
            padding: "20px",
          }}
        >
          <Typography
            fontSize={24}
            fontFamily={renderFontFamily()}
            color="#ffff"
          >
            {renderLanguage(
              "დავით ბეჟუაშვილის განათლების ფონდი",
              "David Bezhuashvili Education Foundation"
            )}
          </Typography>
          <Typography
            fontSize={16}
            fontFamily={renderFontFamily()}
            color="#ffff"
          >
            {renderLanguage(
              "განათლება განვითარებული, თანამედროვე, დემოკრატიული ქვეყნის მთავარი ღირებულებაა",
              "Education is the key to a developed, modern, democratic country is the value"
            )}
          </Typography>
        </Box>
      )}
    </>
  );
}
