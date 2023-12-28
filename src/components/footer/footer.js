import { Box, Button, TextField, Typography } from "@mui/material";
import { Logo } from "../logo";
import FBIcon from "../icons/FBIcon";
import InstaIcon from "../icons/InstaIcon";
import { useLanguage } from "src/contexts/language-context";
import SvgLogo from "../icons/Logo";
import styles from "./footer.module.css";
import SendIcon from "../icons/SendIcon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import TwiterIcon from "../icons/Twitter";
import FooterLogo from "../icons/FooterLogo";
import FooterLogoEng from "../icons/FooterLogoEng";

export default function Footer() {
  const { renderFontFamily, renderLanguage, language } = useLanguage();

  return (
    <Box
      sx={{
        backgroundImage: `url(assets/FooterEng.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#232C65",
        transition: "0.5s",
        width: "100%",
        padding: "64px 128px",
        display: "flex",
        flexDirection: "column",
        gap: "64px",
        "@media (max-width: 760px)": {
          padding: "24px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          "@media (max-width: 1224px)": {
            flexWrap: "wrap",
            gap: "32px",
          },
          "@media (max-width: 760px)": {
            justifyContent: "center",
          },
        }}
      >
        <Box>
          {language === "ENG" ? <FooterLogoEng /> : <FooterLogo />}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "60px",
              width: "284px",
            }}
          >
            <a
              className={styles.smallInfo}
              href="https://www.facebook.com/profile.php?id=61552912597176"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.instagram.com/dbef_foundation/?fbclid=IwAR0EGsNcry8iYIvR3ghARGO_FFVqg-4KY8QcaTdwXCufc71w12t67OaNYf4"
              target="_blank"
            >
              <InstagramIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            <a
              className={styles.smallInfo}
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FDBEF_Foundation"
              target="_blank"
            >
              <TwiterIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.linkedin.com/company/david-bezhuashvili-education-foundation/about/?viewAsMember=true"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.youtube.com/@davidbezhuashvilieducation6527"
              target="_blank"
            >
              <YouTubeIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "64px",
            "@media (max-width: 760px)": {
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "center",
            },
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                fontFeatureSettings: "'case' on",
                color: "white",
                marginBottom: "16px",
                "@media (max-width: 760px)": {
                  textAlign: "center",
                },
              }}
            >
              {renderLanguage(`ფონდი`, "Foundation")}
            </Typography>
            <Box
              color="white"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "107px",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <Typography sx={{ fontSize: "12px" }}>
                {renderLanguage(`მისია და ხედვა`, "Mission And Vision")}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {renderLanguage(`ღირებულებები`, "Values")}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {renderLanguage(`გუნდი`, "Team")}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {renderLanguage(`სიახლეები`, "Articles")}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                {renderLanguage(`პროექტები`, "Projects")}
              </Typography>
            </Box>
          </Box>
          <Box
            color="white"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "171px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                fontFeatureSettings: "'case' on",
                display: "flex",
                alignItems: "center",
                "@media (max-width: 760px)": {
                  justifyContent: "center",
                },
              }}
            >
              {renderLanguage(`კონტაქტი`, "Contact")}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MailIcon /> {renderLanguage(`info@act.org`, "info@act.org")}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <SendIcon />{" "}
              {renderLanguage(
                `ქ. თბილისი, გაზაფხულის 18`,
                "Tbilisi, Gazapkhuli street 18"
              )}
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PhoneIcon />
              {renderLanguage(`+995 56 56 24`, "+995 56 56 24")}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          sx={{
            color: "white",
            fontFeatureSettings: "'case' on",
            fontSize: "12px",
          }}
        >
          {renderLanguage(
            `ⓒ“მოქმედება საზოგადოებრივი ცვლილებებისთვის”, ყველა უფლება დაცულია`,
            `ⓒ"Action for Community Transformation", all rights reserved`
          )}
        </Typography>
      </Box>
    </Box>
  );
}
