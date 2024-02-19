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
            src="https://firebasestorage.googleapis.com/v0/b/act-georgia.appspot.com/o/act%20georgia%20edited.mp4?alt=media&token=20662a46-a5ef-4630-ad82-9759e4c5382b"
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
                paddingLeft: "24px",
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
              {renderLanguage("ქმედება", "Action")} <br />{" "}
              {renderLanguage("საზოგადოებრივი", "For Community")}
              <br />
              {renderLanguage("ცვლილებებისთვის", "Transformation")}
              <br />
              {renderLanguage("საქართველო", "Georgia")}
            </Typography>
            <Typography
              variant="h6"
              fontWeight={500}
              sx={{
                color: "white",
                "@media (min-width: 800px)": {
                  width: "384px",
                },
              }}
            >
              {renderLanguage(
                "ორგანიზაციის მიზანია ხელი შეუწყოს საზოგადოებრივ გაძლიერებას ინკლუზიურობის, თანაბარმნიშვნელოვან ჩართულობისა და სოციო-ეკონომიკური ინოვაციების მხარდაჭერის მექანიზმებით.",
                "Organization on a mission to uplift and strengthen vulnerable communities through inclusive, transparent and holistic engagement. Making impact by driving socio-economic development and policy entrepreneurship for all members of society!"
              )}{" "}
            </Typography>
          </Box>
        </Box>
      </>
    </>
  );
}
