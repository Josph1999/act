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
import { useRouter } from "next/router";

export default function Footer() {
  const { renderFontFamily, renderLanguage, language } = useLanguage();

  const router = useRouter();

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
              href="https://www.facebook.com/profile.php?id=61556407674820"
              target="_blank"
            >
              <FacebookIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.instagram.com/act_georgia/?fbclid=IwAR0OeB3z_TTq3EzfdwWiE2xA76yzpjRcXhMar_ASzpYZa4pYelhnWrTNVFg"
              target="_blank"
            >
              <InstagramIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            <a
              className={styles.smallInfo}
              href="https://twitter.com/act_georgia_?fbclid=IwAR2ugXoF6o7JVa0iuqNPiqxHwwRd2zgm60uAWcqWozXTpiBphB_kvaJawf"
              target="_blank"
            >
              <TwiterIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.linkedin.com/company/actgeorgia/about/"
              target="_blank"
            >
              <LinkedInIcon sx={{ color: "white", opacity: "50%" }} />
            </a>
            {/* <a
              className={styles.smallInfo}
              href="https://www.youtube.com/@davidbezhuashvilieducation6527"
              target="_blank"
            >
              <YouTubeIcon sx={{ color: "white", opacity: "50%" }} />
            </a> */}
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
              {renderLanguage(`ფონდი`, "Organization")}
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
              <Typography
                sx={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => router.push("/about?data=MissionAndVision")}
              >
                {renderLanguage(`მისია და ხედვა`, "Mission And Vision")}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => router.push("/about?data=Values")}
              >
                {renderLanguage(`ღირებულებები`, "Values")}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => router.push("/about?data=ExecutiveTeam")}
              >
                {renderLanguage(`გუნდი`, "Team")}
              </Typography>
              <Typography
                sx={{ fontSize: "12px", cursor: "pointer" }}
                onClick={() => router.push("/news")}
              >
                {renderLanguage(`სიახლეები`, "Articles")}
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
            <a
              href={`mailto:info@act.org.ge`}
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                "@media (max-width: 800px)": {
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <MailIcon />{" "}
                {renderLanguage(`info@act.org.ge`, "info@act.org.ge")}
              </Typography>
            </a>

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
                "მერაბ კოსტავას ქუჩა, 75ბ, 0112, თბილისი, საქართველო",
                "75B, Merab Kostava Street, 0112, Tbilisi, Georgia"
              )}
            </Typography>

            <a
              href={`tel:+995595330057`}
              style={{
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                "@media (max-width: 800px)": {
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <PhoneIcon />
                {renderLanguage(`+995 595 33 00 57`, "+995 595 33 00 57")}
              </Typography>
            </a>
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
            `ⓒ“ქმედება საზოგადოებრივი ცვლილებებისთვის საქართველო”, ყველა უფლება დაცულია`,
            `ⓒ"Action for Community Transformation Georgia", all rights reserved`
          )}
        </Typography>
      </Box>
    </Box>
  );
}
