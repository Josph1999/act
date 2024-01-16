import { Box, Button, Typography } from "@mui/material";
import { aboutData, goals, valuesData } from "./data";
import styles from "./about.module.css";
import { useEffect, useState } from "react";
import LeftIcon from "../icons/LeftIcon";
import { useLanguage } from "src/contexts/language-context";
import AboutInfo from "../about-info/about-info";
import FounderInfo from "../author-info/author-info";
import TeamInfo from "../team-info.js/team-info";
import AnnualReports from "../year-calculation/year-calculation";
import { useWindowWidth } from "../helpers/useWindowWidth";
import MobileAbout from "../mobile-about/mobile-about";
import { useRouter } from "next/router";

export default function About() {
  const [selected, setSelected] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    if (selected >= aboutData.length - 1) {
      return setSelected(0);
    }

    return setSelected(selected + 1);
  };

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

  const windowSize = useWindowWidth();

  const handlePrev = () => {
    if (selected <= 0) {
      return setSelected(aboutData.length - 1);
    }

    return setSelected(selected - 1);
  };

  const { renderLanguage } = useLanguage();

  const renderInfo = (info) => {
    let component = <AboutInfo />;

    switch (info) {
      case "About Foundation":
        component = <AboutInfo />;
        break;
      case "Annual Reports":
        component = <AnnualReports />;
        break;
      case "Team":
        component = <TeamInfo />;
        break;
      case "Founder":
        component = <FounderInfo />;
        break;
    }

    return component;
  };

  const renderPadding = () => {
    if (selected < 1) {
      return "0px 0px 0px 128px";
    }
    if (aboutData[selected]?.title_eng === "Annual Reports") {
      return "0px 128px 0px 0px";
    }
  };

  return (
    <>
      <Box>
        <Box
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
              fontSize: "40px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {renderLanguage("ჩვენს შესახებ", "About Us")}
          </Typography>
          <Typography>
            {renderLanguage(
              `ACT Georgia არის დამოუკიდებელი არასამთავრობო ორგანიზაცია, რომელიც დაარსდა 2023 წელს
თბილისი, საქართველო. ACT Georgia უპირველეს ყოვლისა ფოკუსირებულია საზოგადოებრივი კეთილდღეობის გაძლიერებაზე და დაუცველი თემების მხარდაჭერაზე, რომლებიც გავლენას ახდენენ სხვადასხვა გამოწვევებით, როგორიცაა ომები, კონფლიქტები, არასტაბილურობა, სიღარიბე, შეზღუდული შესაძლებლობები და რესურსებზე შეზღუდული წვდომა. The
ორგანიზაცია ამას აღწევს ცოდნის გავრცელებით, საგანმანათლებლო ინიციატივებით,
გაძლიერების პროგრამები, პროფესიული განვითარების დახმარება და პოლიტიკის ადვოკატირება,
მიზნად ისახავს მათი საერთო კეთილდღეობისა და ცხოვრების ხარისხის ამაღლებას.`,
              `ACT Georgia is an independent non-governmental organization established in 2023 in
Tbilisi, Georgia. ACT Georgia primarily focuses on enhancing public welfare and supporting vulnerable communities impacted by various challenges such as wars, conflicts, instability, poverty, limited pportunities, and restricted access to resources. The
organization achieves this through knowledge dissemination, educational initiatives,
empowerment programs, professional development assistance, and policy advocacy,
aiming to uplift their overall well-being and quality of life.`
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
        <Box
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
              fontSize: "40px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {renderLanguage("მისია და ხედვა", "Mission and Vision")}
          </Typography>
          <Typography>
            {renderLanguage(
              `ACT Georgia ეძღვნება კომპლექსური გამოწვევების შეფასებას და მათ მოგვარებას
ლტოლვილები, იძულებით გადაადგილებული პირები (დევნილები) და ომებით, კონფლიქტებით, პოლიტიკური არასტაბილურობით, ეკონომიკური შეზღუდვებითა და სტიქიური უბედურებებით დაზარალებული თემები საქართველოში.
ყოვლისმომცველი შეფასებითა და ინკლუზიური მიდგომით, ჩვენ პრიორიტეტს ვაძლევთ საჭიროებებს
ტვინების გადინების ყოვლისმომცველი საკითხით დაზარალებული ახალგაზრდები. ურყევი ვალდებულებით,
ჩვენ ვცდილობთ გავანათლოთ, გავაძლიეროთ და გავაძლიეროთ გამძლეობა ამ თემებში,
მტკიცედ უჭერს მხარს მათ ფუნდამენტურ უფლებებსა და კეთილდღეობას. გულში ჩვენი
მისიაა სასიცოცხლო რესურსების თანაბარი ხელმისაწვდომობის უზრუნველსაყოფად და ისეთი გარემოს შექმნა, რომელიც ხელს უწყობს უამრავ შესაძლებლობებს, აძლევს ინდივიდებს უფლებას შექმნან აზრიანი ცხოვრება და აქტიური წვლილი შეიტანონ უფრო ინკლუზიურ და პერსპექტიულ გლობალურ მომავალში.`,
              `ACT Georgia is dedicated to assessing and addressing complex challenges faced by
refugees, internally displaced persons (IDPs), and communities affected by wars, conflicts, political instability, economic constraints, and natural disasters in Georgia.
Through comprehensive evaluation and an inclusive approach, we prioritize the needs
of youth affected by the pervasive issue of brain drain. With nwavering commitment,
we strive to educate, empower, and foster resilience within these communities,
staunchly advocating for their fundamental rights and well-being. At the heart of our
mission is the drive to ensure equal access to vital resources and create an environment that fosters ample opportunities, empowering individuals to construct meaningful lives and contribute actively to a more inclusive and promising global future.`
            )}
          </Typography>
          <Typography sx={{ marginTop: "16px" }}>
            {renderLanguage(
              `ჩვენი ხედვაა შევქმნათ ქვეყანა, სადაც ყველა დაუცველი თემი, მათ შორის ლტოლვილები,
დევნილებს და მარგინალიზებულ ჯგუფებს შეუძლიათ აყვავდნენ რთული გარემოებების მიუხედავად. ჩვენ
წარმოიდგინეთ მომავალი, სადაც ყველა ინდივიდს ექნება თანაბარი წვდომა რესურსებზე, საგანმანათლებლო
შესაძლებლობები და მხარდაჭერა, რომელიც აუცილებელია სრულფასოვანი ცხოვრების შესაქმნელად და პოზიტიური წვლილისთვის მათ თემებში. ჩვენი საქმიანობით, ჩვენ ვცდილობთ ხელი შევუწყოთ საზოგადოებას, რომელიც მხარს უჭერს ინკლუზიურობას, გამძლეობასა და გაძლიერებას, რაც საბოლოოდ მიგვიყვანს უფრო აყვავებულ და სამართლიან საქართველომდე.`,
              `Our vision is to create a country where all vulnerable communities, including refugees,
IDPs, and marginalized groups, can thrive despite challenging circumstances. We
envision a future where every individual has equal access to resources, educational
opportunities, and the support necessary to build fulfilling lives and contribute positively to their communities. Through our work, we strive to foster a society that champions inclusivity, resilience, and empowerment, ultimately leading to a more prosperous and equitable Georgia.`
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "128px 0px",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 1200px)": {
              flexDirection: "column",
            },
            "@media (max-width: 1000px)": {
              padding: "64px 64px",
            },
            "@media (max-width: 760px)": {
              padding: "24px !important",
            },
          }}
        >
          {windowSize > 1200 ? (
            <Box sx={{ height: "616px" }}>
              <Typography
                sx={{
                  fontFeatureSettings: "'case' on",
                  textTransform: "uppercase",
                  writingMode: "vertical-rl",
                  transform: "rotate(180deg)",
                  fontSize: "40px",
                }}
              >
                {renderLanguage(`ღირებულებები`, `Values`)}
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography
                sx={{
                  fontFeatureSettings: "'case' on",
                  textTransform: "uppercase",
                  fontSize: "40px",
                }}
              >
                {renderLanguage(`ღირებულებები`, `Values`)}
              </Typography>
            </Box>
          )}

          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                "@media (max-width: 1200px)": {
                  flexDirection: "column",
                },
              }}
            >
              {valuesData.map((item, idx) =>
                idx === 0 || idx === 1 ? (
                  <Box
                    key={item.id}
                    sx={{
                      width: "480px",
                      height: "300px",
                      padding: "32px",
                      backgroundColor: "#F0F5FE",
                      "@media (max-width: 1200px)": {
                        width: "100%",
                        padding: "64px",
                      },
                      "@media (max-width: 1000px)": {
                        padding: "64px",
                      },
                      "@media (max-width: 760px)": {
                        padding: "24px !important",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        gap: "12px",
                        fontWeight: 500,
                        fontSize: "20px",
                        alignItems: "center",
                      }}
                    >
                      {item.icon}{" "}
                      {renderLanguage(item.title_ka, item.title_eng)}
                    </Typography>
                    <Typography sx={{ color: "black", marginTop: "16px" }}>
                      {renderLanguage(
                        item.description_ka,
                        item.description_eng
                      )}
                    </Typography>
                  </Box>
                ) : null
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                "@media (max-width: 1200px)": {
                  flexDirection: "column",
                },
              }}
            >
              {valuesData.map((item, idx) =>
                idx === 2 || idx === 3 ? (
                  <Box
                    key={item.id}
                    sx={{
                      width: "480px",
                      height: "300px",
                      padding: "32px",
                      backgroundColor: "#F0F5FE",
                      "@media (max-width: 1200px)": {
                        width: "100%",
                      },
                      "@media (max-width: 1000px)": {
                        padding: "64px",
                      },
                      "@media (max-width: 760px)": {
                        padding: "24px !important",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        display: "flex",
                        gap: "12px",
                        fontWeight: 500,
                        fontSize: "20px",
                        alignItems: "center",
                      }}
                    >
                      {item.icon}{" "}
                      {renderLanguage(item.title_ka, item.title_eng)}
                    </Typography>
                    <Typography sx={{ color: "black", marginTop: "16px" }}>
                      {renderLanguage(
                        item.description_ka,
                        item.description_eng
                      )}
                    </Typography>
                  </Box>
                ) : null
              )}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
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
              fontSize: "40px",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            {renderLanguage(
              `გაეროს მდგრადი განვითარება`,
              `United Nations Sustainable Development`
            )}
          </Typography>
          <Typography
            sx={{
              fontFeatureSettings: "'case' on",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            {renderLanguage(
              `ACT Georgia-ს ინიციატივები მჭიდროდ შეესაბამება გაეროს მდგრად განვითარებას
მიზნები (SDGs), კერძოდ:`,
              `ACT Georgia's initiatives are closely aligned with the United Nations Sustainable Development
Goals (SDGs), particularly:`
            )}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              "@media (max-width: 1200px)": {
                display: "flex",
                flexDirection: "row",
                gap: "16px",
              },
              "@media (max-width: 900px)": {
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                "@media (max-width: 1200px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Box
                sx={{
                  width: "404px",
                  "@media (max-width: 1200px)": {
                    width: "100%",
                  },
                  padding: "24px",
                  height: "300px",
                  backgroundImage: `url(/assets/Goals.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              ></Box>
              {goals.map((item, idx) =>
                idx < 3 ? (
                  <Box
                    sx={{
                      width: "404px",
                      padding: "24px",
                      height: "300px",
                      backgroundColor: "#C4D7F9",
                      "@media (max-width: 1200px)": {
                        width: "100%",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFeatureSettings: "'case' on",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {renderLanguage(item.goal_ka, item.goal_eng)}
                    </Typography>
                    <Typography
                      sx={{
                        fontFeatureSettings: "'case' on",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {renderLanguage(item.title_ka, item.title_eng)}
                    </Typography>
                    <Typography
                      sx={{
                        fontFeatureSettings: "'case' on",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {renderLanguage(
                        item.description_ka,
                        item.description_eng
                      )}
                    </Typography>
                  </Box>
                ) : null
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                gap: "16px",
                "@media (max-width: 1200px)": {
                  flexDirection: "column",
                },
              }}
            >
              {goals.map((item, idx) =>
                idx >= 3 ? (
                  <Box
                    sx={{
                      width: "404px",
                      padding: "24px",
                      height: "300px",
                      backgroundColor: "#C4D7F9",
                      "@media (max-width: 1200px)": {
                        width: "100%",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFeatureSettings: "'case' on",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {renderLanguage(item.goal_ka, item.goal_eng)}
                    </Typography>
                    <Typography
                      sx={{
                        fontFeatureSettings: "'case' on",
                        textTransform: "uppercase",
                        fontWeight: 500,
                        fontSize: "20px",
                      }}
                    >
                      {renderLanguage(item.title_ka, item.title_eng)}
                    </Typography>
                    <Typography
                      sx={{
                        fontFeatureSettings: "'case' on",
                        textTransform: "uppercase",
                        fontWeight: 500,
                      }}
                    >
                      {renderLanguage(
                        item.description_ka,
                        item.description_eng
                      )}
                    </Typography>
                  </Box>
                ) : null
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
