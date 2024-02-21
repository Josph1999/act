import { Box, Button, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";
import GoogleMaps from "../GoogleMap/GoogleMap";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";
import SendIcon from "../icons/SendIcon";
import Subscribe from "../subscribe/subscribe";

export default function Contact() {
  const { renderLanguage, renderFontFamily } = useLanguage();

  return (
    <>
      <Box
        sx={{
          padding: "128px",
          "@media (max-width: 800px)": {
            padding: "20px",
            marginTop: "120px",
          },
        }}
      >
        <Typography sx={{ fontFeatureSettings: "'case' on" }} fontSize={32}>
          {renderLanguage("კონტაქტი", "Contact")}
        </Typography>
        <Typography sx={{ fontFeatureSettings: "'case' on" }}>
          {renderLanguage(
            "ინფორმაციის მისაღებად ან ნებისმიერ სხვა საკითხთან დაკავშირებით, დაგვიკავშირდით: ",
            "For information or any other matter, contact us:"
          )}
        </Typography>
        <Box
          marginTop={5}
          marginBottom={5}
          sx={{
            display: "flex",
            gap: "20px",
            "@media (max-width: 800px)": {
              flexDirection: "column",
            },
          }}
        >
          <Button
            fullWidth
            sx={{
              borderBottom: "1px solid #232C65",
              borderRadius: "0px",
              color: "#232C65",
            }}
          >
            <a
              href={`tel:+995577770306`}
              style={{
                color: "#4338CA",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                "@media (max-width: 800px)": {
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                },
              }}
            >
              <PhoneIcon color="#4338CA" /> (+995)577 770 306
            </a>
          </Button>
          <Button
            fullWidth
            sx={{
              borderBottom: "1px solid #232C65",
              borderRadius: "0px",
              textTransform: "none",
              color: "#232C65",
            }}
          >
            <a
              style={{
                color: "#4338CA",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                "@media (max-width: 800px)": {
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                },
              }}
            >
              <SendIcon color="#4338CA" />{" "}
              {renderLanguage(
                "პეკინის გამზირი34/ალ. ყაზბეგის გამზირის2ა",
                "Pekini Avenue 34/al. 2a of Kazbegi Ave"
              )}
            </a>
          </Button>
          <Button
            fullWidth
            sx={{
              borderBottom: "1px solid #232C65",
              borderRadius: "0px",
              textTransform: "none",
              color: "#232C65",
            }}
          >
            <a
              href={`tel:+995322122115`}
              style={{
                color: "#4338CA",
                textDecoration: "none",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                "@media (max-width: 800px)": {
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                },
              }}
            >
              <MailIcon color="#4338CA" /> Info@dbef.ge
            </a>
          </Button>
        </Box>
        <GoogleMaps />
      </Box>
      <Subscribe />
    </>
  );
}
