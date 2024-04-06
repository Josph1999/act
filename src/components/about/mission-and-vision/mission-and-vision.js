import { Box, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";

export default function AboutMissionAndVision() {
  const { renderLanguage } = useLanguage();

  return (
    <Box
      id="MissionAndVision"
      sx={{
        color: "white",
        backgroundColor: "#232C65",
        padding: "128px 128px",
        "@media (max-width: 1000px)": {
          padding: "64px 64px",
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
        {renderLanguage("მისია და ხედვა", "Mission and Vision")}
      </Typography>
      <Typography>
        {renderLanguage(
          `ორგანიზაციის მიზანია მოახდინოს იმ კომპლექსური გამოწვევებისა და წინააღმდეგობების სისტემური ანალიზი, რომელთან გამკლავებაც საზოგადოების ყველაზე მოწყვლადი ჯგუფებს ყოველდღიურად უწევთ. ორგანიზაციის სამუშაო სამიზნე თემატიკას წარმოადგენს იძულებით გადაადგილებულ პირთა და ლტოლვილთა სოციო-ეკონომიკური გამოწვევები, ეთნიკური უმცირესობებისა და დროებითი მაცხოვრებლების გამოწვევები, ეკომიგრანტებისა და სხვა ბუნებრივი კრიზისებით დაზარალებული ადამიანების მხარდაჭერა, ქალთა და ბავშვთა უფლებების დაცვა და გაძლიერება, ახალგაზრდების სამუშაო ბაზარზე ინტეგრაციის პრობლემები და ‘ტვინების გადინების’ გამოწვევასთან ბრძოლა. `,
          `ACT Georgia is dedicated to assessing and addressing complex challenges faced by refugees, internally displaced persons (IDPs), and communities affected by wars, conflicts, political instability, economic constraints, and natural disasters in Georgia. Through comprehensive evaluation and an inclusive approach, we prioritize the needs of youth affected by the pervasive issue of brain drain. With nwavering commitment, we strive to educate, empower, and foster resilience within these communities, staunchly advocating for their fundamental rights and well-being. At the heart of our mission is the drive to ensure equal access to vital resources and create an environment that fosters ample opportunities, empowering individuals to construct meaningful lives and contribute actively to a more inclusive and promising global future.`
        )}
      </Typography>
      <Typography sx={{ marginTop: "16px" }}>
        {renderLanguage(
          `ჩვენი მიზანია ხელი შევუწყოთ სოციალური ტრანსფორმაციის პროცესებს, რომელიც თავის მხრივ განაპირობებს თანაბარმნიშვნელოვანი, ჰორიზონტალური მედეგობის პრინციპზე დაფუძნებული ინკლუზიური სოციალური სისტემების ჩამოყალიბებას როგორც სათემო აგრეთვე რეგიონალურ სოციალურ დონეებზე. `,
          `Our vision is to create a country where all vulnerable communities, including refugees, IDPs, and marginalized groups, can thrive despite challenging circumstances. We envision a future where every individual has equal access to resources, educational opportunities, and the support necessary to build fulfilling lives and contribute positively to their communities. Through our work, we strive to foster a society that champions inclusivity, resilience, and empowerment, ultimately leading to a more prosperous and equitable Georgia.`
        )}
      </Typography>
    </Box>
  );
}
