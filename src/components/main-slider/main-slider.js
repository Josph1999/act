import { Box, Typography } from "@mui/material";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { useRouter } from "next/router";
import styles from "./main.module.css";
import { useLanguage } from "src/contexts/language-context";
import { useEffect, useRef } from "react";

export default function MainSlider() {
  const router = useRouter();
  const windowSize = useWindowWidth();
  const videoRef = useRef(null);
  const { renderLanguage, renderFontFamily } = useLanguage();

  useEffect(() => {
    const playVideo = async () => {
      const video = videoRef.current;

      try {
        if (video) {
          // Add the playsinline attribute
          video.setAttribute("playsinline", "");

          await video.play();
          console.log("Video started playing");
        }
      } catch (error) {
        console.error("Autoplay failed:", error.message);
      }
    };

    playVideo();
  }, []);

  return (
    <>
      <>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className={styles.videoBackground}
        >
          <source
            src="https://firebasestorage.googleapis.com/v0/b/dbef-de772.appspot.com/o/Sequence%2001.mp4?alt=media&token=441a981e-98eb-4685-8e2e-a7da2458b17f"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "60px",
            zIndex: 2,
            paddingLeft: "128px",
            "@media (max-width: 800px)": {
              padding: "0px",
              justifyContent: "center",
              alignItems: "center",
            },
            position: "relative",
            background: `var(--Hero-Overlay,
                linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.17%, rgba(0, 0, 0, 0) 100%),
                url("https://firebasestorage.googleapis.com/v0/b/georaffal.appspot.com/o/2%20versia%20efectis%20gareshe.mp4?alt=media&token=e13627ae-af4f-423c-ab2b-97d92f033257&_gl=1*1609ues*_ga*MTMyOTM3MzgzNC4xNjk3MjE1Nzc3*_ga_CW55HF8NVT*MTY5NzgyNTM2Mi4xMS4xLjE2OTc4MjY0MTAuMTEuMC4w") lightgray 50% / cover no-repeat
              )`,
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
                justifyContent: "flex-start",
                alignItems: "left",
                textAlign: "left",
                paddingLeft: "30px",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: "white",
                textAlign: "left",
                fontFamily: "UpperCaseGeo",
                fontFeatureSettings: "'case' on",
                "@media (max-width: 800px)": {
                  fontSize: "32px",
                  justifyContent: "left",
                  alignItems: "left",
                  textAlign: "left",
                },
              }}
            >
              {renderLanguage("მოქმედება", "Action")} <br />{" "}
              {renderLanguage("საზოგადოებრივი", "For Community")}
              <br />
              {renderLanguage("ცვლილებებისთვის", "Transformation")}
            </Typography>
            <Typography variant="h6" fontWeight={500} sx={{ color: "white" }}>
              {renderLanguage(
                "ACT საქართველო უმთავრესად ორიენტირებულია საზოგადოებრივი კეთილდღეობის გაძლიერებაზე და მოწყვლადი ჯგუფების მხარდაჭერაზე.",
                "ACT Georgia is primarily focused on strengthening public welfare and supporting vulnerable groups."
              )}{" "}
              <br />{" "}
              {renderLanguage("მთავარი ღირებულებაა", "democratic country")}
            </Typography>
          </Box>
        </Box>
      </>
    </>
  );
}
