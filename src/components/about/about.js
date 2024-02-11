import { Box, Typography } from "@mui/material";
import {
  aboutData,
  additionalFocus,
  goals,
  targetGroups,
  teamInfo,
  valuesData,
} from "./data";
import { useEffect, useState } from "react";
import { useLanguage } from "src/contexts/language-context";
import { useWindowWidth } from "../helpers/useWindowWidth";
import { useRouter } from "next/router";
import Subscribe from "../subscribe/subscribe";
import AboutMissionAndVision from "./mission-and-vision/mission-and-vision";
import Values from "./values/values";
import UnitedNations from "./united-nations/united-nations";
import TargetGroups from "./target-groups/target-groups";
import TeamInfo from "./team/team";

export default function About() {
  const [selected, setSelected] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (router.query.data) {
      setSelected(
        aboutData.findIndex(
          (item) => item.title_eng.replace(/\s/g, "") === router.query.data
        )
      );
    }
  }, [router]);

  const { renderLanguage } = useLanguage();

  useEffect(() => {
    const targetElement = document.getElementById(router.query.data);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [router.query.data]);

  return (
    <>
      <Box>
        <Box
          id="AboutUs"
          sx={{
            padding: "128px",
            "@media (max-width: 1000px)": {
              padding: "64px",
              marginTop: "70px",
            },
            "@media (max-width: 760px)": {
              padding: "24px !important",
              marginTop: "100px",
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
            {renderLanguage("ჩვენს შესახებ", "About Us")}
          </Typography>
          <Typography>
            {renderLanguage(
              `ქმედება საზოგადოებრივი ცვლილებებისთვის - საქართველო (ACT Georgia) არის  არასამთავრობო ორგანიზაცია, რომელიც დაარსდა 2023 წელს, ქალაქ თბილისში. ორგანიზაცია უპირველეს ყოვლისა ფოკუსირებულია საზოგადოებრივი კეთილდღეობის გაძლიერებაზე და სოციო-ეკონომიკურად მოწყვლადი თემების მხარდაჭერაზე. 
              ACT Georgia-ს გუნდი მუშაობს იმ გამოწვევებისა და პრობლემების გადაჭრის გზებზე, რომლებიც პირდაპირ გავლენას ახდენენ სახელმწიფოში სოციო-ეკონომიკურ, დემოგრაფიულ და საზოგადოებრივ მარკერებზე. ორგანიზაციის სამუშაო სამიზნე თემატიკას წარმოადგენს იძულებით გადაადგილებულ პირთა და ლტოლვილთა სოციო-ეკონომიკური გამოწვევები, ეთნიკური უმცირესობებისა და დროებითი მაცხოვრებლების გამოწვევები, ეკომიგრანტებისა და სხვა ბუნებრივი კრიზისებით დაზარალებული ადამიანების მხარდაჭერა, ქალთა და ბავშვთა უფლებების დაცვა და გაძლიერება, ახალგაზრდების სამუშაო ბაზარზე ინტეგრაციის პრობლემები და ‘ტვინების გადინების’ გამოწვევასთან ბრძოლა. `,
              `ACT Georgia is an independent non-governmental organization established in 2023 in Tbilisi, Georgia. ACT Georgia primarily focuses on enhancing public welfare and supporting vulnerable communities impacted by various challenges such as wars, conflicts, instability, poverty, limited opportunities, and restricted access to resources. The organization achieves this through knowledge dissemination, educational initiatives, empowerment programs, professional development assistance, and policy advocacy, aiming to uplift their overall well-being and quality of life.`
            )}
          </Typography>
          <Box
            sx={{
              width: "100%",
              backgroundImage: `url(/assets/AboutBack.png)`,
              height: "300px",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "32px",
            }}
          ></Box>
        </Box>
        <AboutMissionAndVision />
        <Values />
        <UnitedNations />
        <TargetGroups />
        <TeamInfo />
        <Subscribe />
      </Box>
    </>
  );
}
