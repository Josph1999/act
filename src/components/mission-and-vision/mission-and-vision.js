import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useLanguage } from "src/contexts/language-context";
import missionAndVision from "../../../public/assets/MissionAndVision.jpeg";

export default function MissionAndVision() {
  const { renderLanguage } = useLanguage();

  return (
    <>
      <Box
        sx={{
          padding: "64px 128px",
          color: "white",
          display: "flex",
          gap: "20px",
        }}
      >
        <Box sx={{ padding: "24px", backgroundColor: "#232C65" }}>
          <Typography
            sx={{
              fontFeatureSettings: "'case' on",
              fontSize: "20px",
              fontWeight: 700,
              textTransform: "uppercase",
              color: "white",
            }}
          >
            {" "}
            {renderLanguage(`მისია და ხედვა`, `Mission and Vision`)}
          </Typography>
          <br />
          <Typography>
            {renderLanguage(
              `ეისითი საქართველოს საქმიანობა მიმართულია ლტოლვილების, იძულებით გადაადგილებულ პირთა (დევნილთა) და ომების, კონფლიქტების, პოლიტიკური არასტაბილურობის, ეკონომიკური შეზღუდვებისა და ბუნებრივი კატასტროფების შედეგად დაზარალებული ჯგუფების პრობლემათა შეფასებასა და გადაჭრას.`,
              `ACIT Georgia's activities are aimed at assessing and solving the problems of refugees, internally displaced persons (IDPs) and groups affected by wars, conflicts, political instability, economic restrictions and natural disasters.`
            )}
          </Typography>
          <Typography>
            <br />
            {renderLanguage(
              `ჩვენ წარმოვიდგენთ მომავალს, სადაც თითოეულ ინდივიდს ექნება თანაბარი წვდომა რესურსებზე, საგანმანათლებლო შესაძლებლობებზე და მხარდაჭერაზე, რომელიც აუცილებელია სრულფასოვანი ცხოვრების ასაშენებლად და პოზიტიური წვლილისთვის მათ თემებში.`,
              `
            We envision a future where every individual has equal access to the resources, educational opportunities, and supports necessary to build fulfilling lives and make positive contributions to their communities.`
            )}
          </Typography>
        </Box>

        <Image src={missionAndVision} width={584} height={406} />
      </Box>
    </>
  );
}
