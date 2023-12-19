import { Box, Button, TextField, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";

export default function Subscribe() {
  const { renderLanguage } = useLanguage();

  return (
    <Box sx={{ padding: "64px 128px", backgroundColor: "#F0F5FE",  "@media (max-width: 760px)": {
      padding: '24px'
    }, }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "256px",
          "@media (max-width: 1224px)": {
            flexWrap: 'wrap',
            gap: '16px'
          },
          "@media (max-width: 760px)": {
            padding: '24px'
          },
        }}
      >
        <Typography
          fontSize={22}
          fontWeight={700}
          sx={{ fontFeatureSettings: "'case' on" }}
        >
          {renderLanguage(
            `გამოიწერე სიახლეები ორგანიზაციის საქმიანობის შესახებ`,
            `Subscribe to news about the organization's activities`
          )}
        </Typography>
        <Box sx={{display: 'flex', width: '100%', gap: '16px'}}>
          <TextField
            fullWidth
            id="standard-basic"
            sx={{ "& label": { fontFeatureSettings: "'case' on" } }}
            label={renderLanguage(
              `თქვენი ელფოსტის მისამართი`,
              `Your email address`
            )}
            variant="standard"
          />
          <Button variant="contained">
            {renderLanguage(`გამოწერა`, `Subscribe`)}
          </Button>
        </Box>
      </Box>
      <Typography fontSize={16} fontWeight={200} sx={{ marginTop: "48px" }}>
        {renderLanguage(
          `თქვენი ელფოსტის მისამართის შეყვანით, თქვენ თანახმა ხართ მიიღოთ განახლებები ეისითი საქართველოს მუშაობის შესახებ. მეტი ინფორმაციის მისაღებად, თუ როგორ ვიყენებთ და დავიცვათ თქვენი პერსონალური მონაცემები, გთხოვთ, იხილოთ ჩვენი კონფიდენციალურობის პოლიტიკა.`,
          `By entering your e-mail address, you agree to receive updates about the work of Easit Georgia. For more information on how we use and protect your personal data, please see our privacy policy.`
        )}
      </Typography>
    </Box>
  );
}
