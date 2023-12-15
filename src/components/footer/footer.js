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
import GeoLogo from "../icons/LogoKa";
import EngLogo from "../icons/LogoEng";
import { useRouter } from "next/router";
import TwiterIcon from "../icons/Twitter";
import { FooterKa } from "../footer-geo/footer-geo";
import { FooterEng } from "../footer-eng/footer-eng";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Footer() {
  const { renderFontFamily, renderLanguage, language } = useLanguage();

  const [email, setEmail] = useState("");

  const router = useRouter();

  const subscribe = async () => {
    if (email === "" || !email.includes("@")) {
      toast.error(
        language === "KA"
          ? "გთხოვთ შეიყვანოთ სწორი მეილი"
          : "Please enter valid email"
      );
      return;
    }
    const data = await axios.post(
      process.env.NEXT_PUBLIC_API_URL + `/subscribe?email=${email}`
    );
    toast.success(
      renderLanguage(
        "მადლობთ რომ გამოიწერეთ გვერდი!",
        "Thank you for subscribing our page!"
      )
    );

    setEmail("");
  };

  return (
    <Box
      sx={{
        padding: "128px",
        backgroundColor: "#4338CA",
        color: "white",
        marginTop: "150px",
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
              gap: "15px",
              "@media (max-width: 800px)": {
                width: "100%",
              },
            }}
          >
            {language === "KA" ? <FooterKa /> : <FooterEng />}
            <Box sx={{ width: "70%" }}>
              <Typography sx={{fontFeatureSettings: "'case' on"}}>
                {renderLanguage(
                  "საგანმანათლებლო საქველმოქმედო, არამომგებიანი ორგანიზაცია",
                  "Educational charity, non-profit organization"
                )}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{fontFeatureSettings: "'case' on"}}
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
                href={`tel:+995577770306`}
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
                <PhoneIcon /> (+995)577 770 306
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
              sx={{fontFeatureSettings: "'case' on"}}
              marginTop="32px"
              marginBottom="16px"
            >
              {renderLanguage("სასარგებლო ბმულები", "Usefull Links")}
            </Typography>
            <Box sx={{ display: "flex", gap: "15px" }}>
              <Typography
                className={styles.smallInfo}
                fontSize={13}
                onClick={() => router.push(`/about?data=AboutFoundation`)}
              >
                {renderLanguage("ფონდის შესახებ", "About Foundation")}
              </Typography>
              <Typography
                className={styles.smallInfo}
                fontSize={13}
                onClick={() => router.push(`/about?data=Founder`)}
              >
                {renderLanguage("დამფუძნებელი", "Founder")}
              </Typography>
              <Typography
                className={styles.smallInfo}
                fontSize={13}
                onClick={() => router.push(`/about?data=Team`)}
              >
                {renderLanguage("გუნდი", "Team")}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box width="522px">
          <Typography sx={{fontFeatureSettings: "'case' on"}}>
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
              sx={{ color: "white", "& input": { color: "white", padding: '20px' } }}
              type="email"
              fullWidth
              pattern="[^ @]*@[^ @]*"
              placeholder={
                language === "KA"
                  ? "გთხოვთ შეიყვანოთ მეილი"
                  : "Enter your email"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Button
              variant="contained"
              sx={{
                color: "#ffff",
                padding: "16px 32px",
                backgroundColor: "#10B981",
                fontFeatureSettings: "'case' on",
              }}
              onClick={subscribe}
            >
              {renderLanguage("გამოწერა", "Subscribe")}
            </Button>
          </Box>
          <Typography fontSize={10} sx={{fontFeatureSettings: "'case' on"}}>
            {renderLanguage(
              "სიახლეების გამოწერით ეთანხმები ფონდის უსაფრთხოების პოლიტიკას",
              `By subscribing to the newsletter, you agree to the fund's security policy`
            )}
          </Typography>
          <Typography
            sx={{fontFeatureSettings: "'case' on"}}
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
            <a
              className={styles.smallInfo}
              href="https://www.facebook.com/profile.php?id=61552912597176"
              target="_blank"
            >
              <FacebookIcon />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.instagram.com/dbef_foundation/?fbclid=IwAR0EGsNcry8iYIvR3ghARGO_FFVqg-4KY8QcaTdwXCufc71w12t67OaNYf4"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              className={styles.smallInfo}
              href="https://twitter.com/i/flow/login?redirect_after_login=%2FDBEF_Foundation"
              target="_blank"
            >
              <TwiterIcon />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.linkedin.com/company/david-bezhuashvili-education-foundation/about/?viewAsMember=true"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
            <a
              className={styles.smallInfo}
              href="https://www.youtube.com/@davidbezhuashvilieducation6527"
              target="_blank"
            >
              <YouTubeIcon />
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
        <Typography fontSize="10px" sx={{fontFeatureSettings: "'case' on"}}>
          {renderLanguage(
            "© 2023 დავით ბეჟუაშვილის განათლების ფონდი. ყველა უფლება დაცულია.",
            "© 2023 Davit Bezhuashvili Education Foundation. all rights reserved."
          )}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: "20px" }}>
          <Typography fontSize="10px" sx={{fontFeatureSettings: "'case' on"}}>
            {renderLanguage("უსაფრთხოების პოლიტიკა", "Security Policy")}
          </Typography>
          <Typography fontSize="10px" sx={{fontFeatureSettings: "'case' on"}}>
            {renderLanguage("წესები და პირობები", "Terms and Conditions")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
