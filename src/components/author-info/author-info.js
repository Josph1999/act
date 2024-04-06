import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";

export default function FounderInfo() {
  const { renderLanguage, renderFontFamily, language } = useLanguage();

  return (
    <Box
      sx={{
        padding: "128px",
        "@media (max-width: 800px)": {
          padding: "20px",
        },
      }}
    >
      <Typography sx={{fontFeatureSettings: "'case' on"}} fontSize={25}>
        {renderLanguage("დამფუძნებლის მიმართვა", `Founder's Address`)}
      </Typography>
      <br></br>
      <Typography>
        {renderLanguage(
          `უკანასკნელი წლებია საქართველო მნიშვნელოვან სახეცვლილებას განიცდის, რაც, პირველ რიგში, მისი ეკონომიკური, პოლიტიკური და კულტურული პოტენციალის ათვისებასა და ამ გზით ქვეყნის მოდერნიზებას გულისხმობს. ამასთან, დაუშვებელია აღნიშნულის პროცესის მხოლოდ ინვესტიციების მოზიდვასა თუ გარე დახმარებას მიღებაზე იყო მიმართული. მნიშვნელოვანი ძალისხმევა პოზიტიური საინვესტიციო კლიმატის შესაქმნელად, მაღალი ტექნოლოგიების დანერგვა სოციო-ეკონომიკური ცხოვრების ყველა საფეხურზე და განათლების დასავლური მოდელების ინტეგრირება გახლავთ ქვეყნის განვითარების გრძელვადიანი და მედეგი სტრატეგია. ამასთანავე, აღნიშნულ პროცესს უნდა უძღვებოდნენ პროფესიონალები, რომელთა მოზიდვა და გადამზადება ჩვენი ორგანიზაციის ერთერთ უმთავრეს ამოცანას წარმოადგენს.`,
          `For the last few years, Georgia has been undergoing significant changes, which, first of all, involves the utilization of its economic, political and cultural potential and thus the modernization of the country. However, modernization of the country cannot be connected only with attracting investments or external assistance. A positive investment climate, imported technologies and education are necessary prerequisites for a country's development, but such development will be sustainable only if industrial, political and cultural progress is the result of a knowledge-driven process.`
        )}
      </Typography>
      <br></br>
      <Typography>
        {renderLanguage(
          `ჩემს მიერ დაფუძნებული განათლების ფონდი მოწოდებულია, შექმნას მნიშვნელოვანი წინაპირობა, რათა ცოდნა გახდეს საქართველოს მოდერინიზების საფუძველი. ჩვენი ხედვით, დღეს აუცილებელია მოტივირებული ახალგაზრდების წახალისება და ისეთი სიახლეების დამკვიდრება, რომელიც მომავალში „საკუთარი“  ცოდნის გენერირების მყარ გარანტიას შექმნის საქართველოში.`,
          `The education foundation founded by me is committed to creating an important prerequisite for knowledge to become the basis of Georgia's modernization. In our view, today it is necessary to encourage motivated young people and establish such innovations that will create a solid guarantee of generating "own" knowledge in Georgia in the future.`
        )}
      </Typography>
      <br></br>
      <Typography>
        {renderLanguage(
          `შესაბამისად, ჩემი მიზანია, მხარი დავუჭირო ახალგაზრდების სურვილს, დაეუფლონ იმ ცოდნას, რომელიც საქართველოში შეუქცევადს გახდის სვლას თანამედროვე, ევროპული, განვითარებული და განათლებული საზოგადოებისკენ, რაც, თავის მხრივ, ასევე, გულისხმობს ტექნოლოგიების მომხმარებელი ქვეყნიდან ტექნოლოგიებისა და ინოვაციების შემქმნელ ქვეყნად გარდაქმნასაც.`,
          `Accordingly, my goal is to support the desire of young people to acquire the knowledge that will make Georgia's move towards a modern, European, developed and educated society irreversible, which, in turn, also means transforming from a technology-consuming country into a technology- and innovation-creating country.
          `
        )}
      </Typography>
      <br></br>
      <br></br>
      <Typography fontSize={25} sx={{fontFeatureSettings: "'case' on"}}>
        {renderLanguage(
          "დავით ბეჟუაშვილის შესახებ:",
          "About Davit Bezhuashvili:"
        )}
      </Typography>
      <br></br>
      <br></br>
      <Accordion sx={{ backgroundColor: "#4338CA", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontFamily: "UpperCaseGeo", color: "white" }}>
            {renderLanguage(`განათლება`, "Education")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white", color: "black" }}>
          {language === "KA" ? (
            <Typography>
              1993 – ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო
              უნივერსიტეტი; ეკონომიკის ფაკულტეტი (სპეციალობა: მაკროეკონომიკა),
              ბაკალავრი; ეკონომიკის მაგისტრი
              <br></br>
              <br></br>
              1993 – ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო
              უნივერსიტეტი; ხელოვნებისა და ჰუმანიტარულ მეცნიერებათა
              ფაკულტეტიხელოვნებისა და ჰუმანიტარულ მეცნიერებათა ბაკალავრი.
              <br></br>
              <br></br>
              1999 – დოქტორის ხარისხი ეკონომიკაში, ეკონომიკის მეცნიერებათა
              დოქტორი
            </Typography>
          ) : (
            <Typography>
              Dr. David Bezhuashvili is a distinguished public figure,
              recognized for his achievements as a successful businessman,
              politician, philanthropist, and author. He embarked on his
              academic journey, culminating in an M.A. and Ph.D. in economics
              from Ivane Javakhishvili Tbilisi State University. Following the
              completion of his doctoral studies, Dr. Bezhuashvili authored a
              noteworthy book titled, 'National Bank’s Monetary and Credit
              Policy and the Prospects for the Development of the Banking
              System.'
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ backgroundColor: "#4338CA", color: "white", marginTop: "20px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography sx={{ fontFamily: "UpperCaseGeo", color: "white" }}>
            {renderLanguage(`პროფესიული გამოცდილება`, `Business Career `)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white", color: "black" }}>
          {language === "KA" ? (
            <Typography>
              07.12.2016 – დან დღემდე შპს ,,საქართველოს ინდუსტრიული ჯგუფის “
              დირექტორთა საბჭოს თავმჯდომარე;<br></br>
              <br></br>
              07.12.2016 – დან დღემდე შპს ,,საქართველოს საერთაშორისო
              ენერგეტიკული კორპორაციის“ სამეთვალყურეო საბჭოს თავმჯდომარე;
              <br></br>
              <br></br>
              21.10.2012 – 18.11.2016 საქართველოს მერვე მოწვევის პარლამენტის
              წევრი, თეთრიწყაროს   რაიონის (ერთმანდატიან ოლქში) მაჟორიტარი
              დეპუტატი საქართველოს პარლამენტში.<br></br>
              <br></br>
              07.06.2008 – 21.10.2012 – საქართველოს მეშვიდე მოწვევის პარლამენტის
              წევრი, თეთრიწყაროს რაიონის (ერთმანდატიან ოლქში) მაჟორიტარი
              დეპუტატი საქართველოს პარლამენტში.<br></br>
              <br></br>
              22.04.2004 – 07.06.2008 – საქართველოს მეექვსე მოწვევის პარლამენტის
              წევრი, თეთრიწყაროს რაიონის (ერთმანდატიან ოლქში) მაჟორიტარი
              დეპუტატი საქართველოს პარლამენტში.<br></br>
              <br></br>
              20.11.1999 – 22.04.2004 – საქართველოს მეხუთე მოწვევის პარლამენტის
              წევრი, თეთრიწყაროს რაიონის (ერთმანდატიან ოლქში) მაჟორიტარი
              დეპუტატი საქართველოს პარლამენტში.<br></br>
              <br></br>
              1998 – 1999 – სს. „საქგაზის“ დირექტორთა საბჭოს თავმჯდომარე და
              გენერალური დირექტორი.<br></br>
              <br></br>
              1997 – 1998 – სს. „საქტრანსგაზმრეწვი“-ს სამეთვალყურეო საბჭოს
              თავმჯდომარე<br></br>
              <br></br>
              1994 – 1998 – შპს ,,ინტერპაკის“ კომერციული დირექტორი<br></br>
              <br></br>
              1994 წ. – ბ-მა დავით ბეჟუაშვილმა დააარსა კომპანია შპს. “Chemexim
              International”, რომელიც ფლობს ფართო ბიზნეს-პორტფელს საქართველოში
              („საქართველოს ინდუსტრიული ჯგუფი“).<br></br>
              <br></br>
              1991 – 1994 – შპა ,,იმედი“ – დირექტორი.<br></br>
              <br></br>
            </Typography>
          ) : (
            <Typography>
              In 2016, following his departure from parliament, Dr. Bezhuashvili
              transitioned into a successful career as a businessman and
              entrepreneur. He founded Georgian Industrial Group (GIG), the
              largest holding company in Georgia, and has since assumed the role
              of Chairman of the Board of Directors.
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ backgroundColor: "#4338CA", color: "white", marginTop: "20px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ fontFamily: "UpperCaseGeo", color: "white" }}>
            {renderLanguage(`საპარლამენტო საქმიანობა`, `Political Career`)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white", color: "black" }}>
          {language === "KA" ? (
            <Typography>
              2013 – 2016 – საქართველოს პარლამენტის ევროპასთან ინტეგრაციის
              კომიტეტის წევრი.<br></br>
              <br></br>
              2008 – 2013 – ფრაქცია „ერთიანი ნაციონალური მოძრაობის“ წევრი,
              პარლამენტის რეგიონული პოლიტიკის, თვითმმართველობისა და მაღალმთიანი
              რეგიონების კომიტეტის წევრი<br></br>
              <br></br>
              2008 – 2012 – საქართველოს პარლამენტის სპორტისა და ახალგაზრდულ
              საქმეთა კომიტეტის წევრი<br></br>
              <br></br>
              2003 – 2008 – საქართველოს პარლამენტის საგარეო ურთიერთობათა
              კომიტეტის წევრი<br></br>
              <br></br>
              1999 – 2002 – საქართველოს პარლამენტის დარგობრივი ეკონომიკის
              კომიტეტის წევრი<br></br>
              <br></br>
              1999 – 2004 – საქართველოს პარლამენტის გადასახადებისა და
              საგადასახადო შემოსავლების ქვეკომიტეტის თავმჯდომარე<br></br>
              <br></br>
              2002 – 2014 – საქართველოს ძალოსნობის ეროვნული ფედერაციის
              პრეზიდენტი
              <br></br>
              <br></br>
            </Typography>
          ) : (
            <Typography>
              His career trajectory took a dynamic turn when he assumed the role
              of Chairman of the Supervisory Board at JSC Saktransgazmretsvi. In
              1999, he was elected to the parliament, representing the
              single-mandate constituency of the Tetritskaro region, under the
              banner of the United National Movement party. During his tenure as
              a Member of Parliament (MP), Dr. Bezhuashvili made significant
              contributions, particularly through his involvement in key
              committees. Notable among these were his roles in the Committee
              for European Integration (2013-2016), the Regional and
              Self-Government Committee (2004-2013), and the Foreign Affairs
              Committee (2002-2008). Additionally, he served as the Chairman of
              the Parliamentary Subcommittee on Tax and Taxation from 1994 to
              2004. Dr. Bezhuashvili's enduring commitment to public service led
              to his reelection to parliament on three separate occasions,
              totaling a remarkable sixteen years of dedicated service to his
              constituents. His outstanding contributions to the nation's
              development and progress were acknowledged with the prestigious
              St. George’s Order of Victory.
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{ backgroundColor: "#4338CA", color: "white", marginTop: "20px" }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography sx={{ fontFamily: "UpperCaseGeo", color: "white" }}>
            {renderLanguage(
              `საპარლამენტო დელეგაციები`,
              `Charity and Philantrophy`
            )}
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "white", color: "black" }}>
          {language === "KA" ? (
            <Typography>
              2008 – 2016 – საპარლამენტთაშორისო კავშირი (IPU) ძირითადი
              შემადგენლობის საპარლამენტო დელეგაციის წევრი <br></br>
              <br></br>
              2008 – 2012 – ყაზახეთის პარლამენტთან მეგობრობის ჯგუფის
              ხელმძღვანელი <br></br>
              <br></br>
              2000 – 2004 – საქართველოს პარლამენტის მუდმივმოქმედი უკრაინის
              საპარლამენტო დელეგაციის ხელმძღვანელი. <br></br>
              <br></br>
              1999 წელს, გამოსცა წიგნი „ეროვნული ბანკის მონეტარული საკრედიტო
              პოლიტიკა და საბანკო სისტემის განვითარების პერსპექტივები“.{" "}
              <br></br>
              <br></br>
              2013 წელს, საქართველოს პრეზიდენტის 15 ოქტომბრის დადგენილებით
              #15/10/01, დაჯილდოვდა წმინდა გიორგის სახელობის გამარჯვების ორდენით
              (#073) ქვეყნის განვითარებასა და წინსვლაში შეტანილი განსაკუთრებული
              წვლილისთვის. <br></br>
              <br></br>
            </Typography>
          ) : (
            <Typography>
              Dr. Bezhuashvili's dedication to Georgia's future continues to
              guide his endeavors. He leverages his resources to empower the
              country's youth, nurturing them into educated and engaged members
              of society. In 2015, he founded the David Bezhuashvili Education
              Organization (ACT), a non-profit organization dedicated to
              supporting education and preserving cultural heritage.
            </Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
