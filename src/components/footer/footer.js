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

export default function Footer() {
  const { renderFontFamily, renderLanguage } = useLanguage();

  return (
    <Box
      sx={{
        padding: "128px",
        backgroundColor: "#2F2F2F",
        color: "white",
        marginTop: "50px",
        "@media (max-width: 800px)": {
          padding: "20px",
          marginTop: "50px",
        },
      }}
    >
      <Box
        sx={{
          gap: "20px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Box>
          <Box
            sx={{
              borderBottom: "1px solid #FDFDFD",
              paddingBottom: "32px",
              width: "522px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "@media (max-width: 800px)": {
                width: "100%",
              },
            }}
          >
            <SvgLogo />
            <Box sx={{ width: "70%" }}>
              <Typography fontFamily={renderFontFamily()}>
                {renderLanguage(
                  "საგანმანათლებლო საქველმოქმედო, არამომგებიანი ორგანიზაცია",
                  "Educational charity, non-profit organization"
                )}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              fontFamily={renderFontFamily()}
              marginTop="32px"
              marginBottom="16px"
            >
              {renderLanguage("კონტაქტი", "Contact")}
            </Typography>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Typography
                className={styles.smallInfo}
                fontSize={13}
                sx={{
                  "@media (max-width: 800px)": {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  },
                }}
              >
                <SendIcon />{" "}
                {renderLanguage(
                  "გაზაფხულის ქუჩა, N18",
                  "Gazapkhuli street, N18"
                )}
              </Typography>
              <a
                className={styles.smallInfo}
                href={`tel:+995322122115`}
                style={{
                  color: "white",
                  textDecoration: "none",
                  "@media (max-width: 800px)": {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  },
                }}
              >
                <PhoneIcon /> (+995 32) 212 21 15
              </a>
              <Typography
                className={styles.smallInfo}
                fontSize={13}
                sx={{
                  "@media (max-width: 800px)": {
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  },
                }}
              >
                <MailIcon /> info@dbef.ge
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              fontFamily={renderFontFamily()}
              marginTop="32px"
              marginBottom="16px"
            >
              {renderLanguage("სასარგებლო ბმულები", "Usefull Links")}
            </Typography>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Typography className={styles.smallInfo} fontSize={13}>
                {renderLanguage("ფონდის შესახებ", "About Foundation")}
              </Typography>
              <Typography className={styles.smallInfo} fontSize={13}>
                {renderLanguage("დამფუძნებელი", "Founder")}
              </Typography>
              <Typography className={styles.smallInfo} fontSize={13}>
                {renderLanguage("გუნდი", "Team")}
              </Typography>
              <Typography className={styles.smallInfo} fontSize={13}>
                {renderLanguage("კარიერა", "Career")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box width="522px">
          <Typography fontFamily={renderFontFamily()}>
            {renderLanguage(
              "გამოიწერე ჩვენი სიახლეები და იყავი ყოველთვის ინფორმირებული ფონდის საქმიანობის შესახებ",
              `Subscribe to our news and be always informed about the fund's activities`
            )}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
              paddingTop: "24px",
              paddingBottom: "16px",
            }}
          >
            <TextField
              sx={{ color: "white", "& input": { color: "white" } }}
              type="email"
              fullWidth
            />

            <Button
            variant="contained"
              sx={{
                color: "#ffff",
                padding: "16px 32px",
              }}
            >
              {renderLanguage("გამოწერა", "Subscribe")}
            </Button>
          </Box>
          <Typography fontSize={10} fontFamily={renderFontFamily()}>
            {renderLanguage(
              "სიახლეების გამოწერით ეთანხმები ფონდის უსაფრთხოების პოლიტიკას",
              `By subscribing to the newsletter, you agree to the fund's security policy`
            )}
          </Typography>
          <Typography
            fontFamily={renderFontFamily()}
            sx={{ paddingTop: "46px" }}
          >
            {renderLanguage("გამოგვყევი", "Follow")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              paddingTop: "16px",
            }}
          >
            <a className={styles.smallInfo}>
              <FacebookIcon /> Facebook
            </a>
            <a className={styles.smallInfo}>
              <InstagramIcon /> Instagram
            </a>
            <a className={styles.smallInfo}>
              <LinkedInIcon /> LinkedIn
            </a>
            <a className={styles.smallInfo}>
              <YouTubeIcon /> YouTube
            </a>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          borderTop: "1px solid white",
          marginTop: "32px",
          paddingTop: "32px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography fontSize="10px" fontFamily={renderFontFamily()}>
          {renderLanguage(
            "© 2023 დავით ბეჟუაშვილის განათლების ფონდი. ყველა უფლება დაცულია.",
            "© 2023 Davit Bezhuashvili Education Center. all rights reserved."
          )}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Typography fontSize="10px" fontFamily={renderFontFamily()}>
            {renderLanguage("უსაფრთხოების პოლიტიკა", "Security Policy")}
          </Typography>
          <Typography fontSize="10px" fontFamily={renderFontFamily()}>
            {renderLanguage("წესები და პირობები", "Terms and Conditions")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
