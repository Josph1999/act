import { Box, Button, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";
import GoogleMaps from "../GoogleMap/GoogleMap";
import PhoneIcon from "../icons/PhoneIcon";
import MailIcon from "../icons/MailIcon";

export default function Contact() {
  const { renderLanguage, renderFontFamily } = useLanguage();

  return (
    <Box
      sx={{
        padding: "128px",
        "@media (max-width: 800px)": {
          padding: "20px",
          marginTop: "120px",
        },
      }}
    >
      <Typography sx={{fontFeatureSettings: "'case' on"}} fontSize={32}>
        {renderLanguage("კონტაქტი", "Contact")}
      </Typography>
      <Typography sx={{fontFeatureSettings: "'case' on"}}>
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
            flexDirection:'column'
          },
        }}
      >
        <Button
          variant="outlined"
        >
          <a
            href={`tel:+995577770306`}
            style={{
              color: "#4338CA",
              textDecoration: "none",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              "@media (max-width: 800px)": {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
          >
            <PhoneIcon color="#4338CA"/> (+995)577 770 306
          </a>
        </Button>
        <Button
          variant="outlined"
        >
          <a
            href={`tel:+995322122115`}
            style={{
              color: "#4338CA",
              textDecoration: "none",
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              "@media (max-width: 800px)": {
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              },
            }}
          >
            <MailIcon color="#4338CA"/> Info@dbef.ge
          </a>
        </Button>
      </Box>
      <GoogleMaps />
      <Box sx={{ backgroundColor: "#4338CA", padding: "32px", color: '#fff' }}>
        <Typography sx={{fontFeatureSettings: "'case' on"}}>
          {renderLanguage(
            "ქ. თბილისი, გაზაფხულის ქუჩა, N18",
            "St. N18, Gazapkhuli Street, Tbilisi"
          )}
        </Typography>
      </Box>
    </Box>
  );
}
