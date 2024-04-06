import { Box, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";
import { targetGroups } from "../data";
import styles from './target-groups.module.css'

export default function TargetGroups() {
  const { renderLanguage } = useLanguage();
  return (
    <Box
      id="TargetGroups"
      sx={{
        padding: "128px",
        "@media (max-width: 1200px)": {
          padding: "64px",
        },
        "@media (max-width: 760px)": {
          padding: "24px !important",
        },
      }}
    >
      <Typography
        sx={{
          fontFeatureSettings: "'case' on",
          fontSize: "30px",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {renderLanguage("სამიზნე ჯგუფები", "Target Groups")}
      </Typography>
      <Typography>
        {renderLanguage(
          `ACT Georgia-ს სამოქმედო პლატფორმა დაფუძნებულია სამიზნე ჯგუფების ინტერესებისა და საჭირობების მაქსიმალურ ინტეგრაციაზე. თანამშრომლობების ფართო სპექტრი მოიცავს პრაქტიკული და თეორიული ცოდნის, უნარებისა და შესაძლებლობების გაზიარებას როგორც ლოკალურ, აგრეთვე საერთაშორისო დონეებზე. ჩვენი ამოცანაა მაქსიმალური ხელმისაწვდომობისა და ღიაობის პრინციპით შევძლოთ ყველაზე მოწყვლადი სოციალური ჯგუფების მხარდაჭერა, მათი საჭირობების წინა პლანზე გამოკვეთით, გადაჭრის გზების შეთავაზებითა თუ რელევანტური გარე აქტორების მოზიდვისა და ჩართულობის მექანიზმებით. ჩვენი გუნდი აერთიანებს სხვადასხვა სფეროების ტოპ პროფესიონალებს, რომელთაც გააჩნიათ საერთო მისიისა და ხედვის მიმართ ვალდებულების ურყევი განცდა. `,
          `At ACT Georgia, our organizational framework for engaging with diverse groups is grounded in a comprehensive methodology that integrates practical aid, robust research, and humanitarian initiatives. Our unwavering dedication to reliability and professionalism is bolstered by the profound expertise of our highly skilled team members, each bringing a wealth of experience and unwavering commitment to our mission.`
        )}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: "16px",
          marginTop: "32px",
          "@media (max-width: 1000px)": {
            flexDirection: "column",
          },
        }}
      >
        {targetGroups.map((item) => (
          <Box key={item.id}>
            <Box
              className={styles.image}
              sx={{
                backgroundImage: `url(${item.image})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%), url(${item.image})`,
                height: "300px",
                padding: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Typography
                color="white"
                sx={{
                  position: "relative",
                  top: "0px",
                  fontFeatureSettings: "'case' on",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                {renderLanguage(item.title_ka, item.title_eng)}
              </Typography>
            </Box>
            <Typography sx={{ padding: "16px" }}>
              {" "}
              {renderLanguage(item.description_ka, item.description_eng)}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
