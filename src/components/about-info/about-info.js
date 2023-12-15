import { Box, Typography } from "@mui/material";
import { useLanguage } from "src/contexts/language-context";

export default function AboutInfo() {
  const { renderLanguage } = useLanguage();

  return (
    <Box
      sx={{
        padding: "64px 128px",
        width: "100%",
        marginTop: "80px",
        transition: "0.5s",
        "@media (max-width: 800px)": {
          padding: "20px",
          marginTop: "20px",
        },
      }}
    >
      <Typography>
        {renderLanguage(
          `„დავით ბეჟუაშვილის განათლების ფონდი,“ საგანმანათლებლო საქველმოქმედო, არამომგებიანი ორგანიზაციაა, რომელიც 2015 წელს დაარსდა დავით და გელა ბეჟუაშვილების მიერ. ფონდის დამფუძნებლები თვლიან, რომ განათლება განვითარებული, თანამედროვე, დემოკრატიული ქვეყნის მთავარი ღირებულებაა, ამიტომაც აქ ჩადებული ინვესტიციები ამ ღირებულებების დამკვიდრებისათვის გაღებული ის წვლილია, რომელიც მთლიანად ქვეყნის განვითარებაში იდება.`,
          `The 'David Bezhuashvili Education Foundation' is a non-profit charitable organization dedicated to education, established in 2015 in Tbilisi, Georgia. It was founded by Dr. David Bezhuashvili and Ambassador Gela Bezhuashvili, who share a profound belief in the fundamental importance of education as a cornerstone of a developed, modernized, and democratic society. They recognize that investments in education yield immeasurable benefits for both society and the state.`
        )}
        <br></br>
        <br></br>
        {renderLanguage(
          `ფონდის დამფუძნებლების უმთავრეს მიზანს პროგრესული, თანამედროვე ევროპული ღირებულებების მქონე საზოგადოების ჩამოყალიბების ხელშეწყობა წარმოადგენს. განათლება კი ამ მიზნისკენ მიმავალი უახლოესი გზა გახლავთ.`,
          `At its core, the Foundation's primary objective is to contribute to the formation of a progressive society rooted in European values. To this end, they view investment in education as the most effective means to achieve this noble aspiration. In their vision, an educated society and empowered communities stand as pivotal pillars in fostering sustainable and continuous national growth.`
        )}
        <br></br>
        <br></br>
        {renderLanguage(
          `სწორედ განათლებული საზოგადოება უნდა იყოს ქვეყნის მამოძრავებელი ძალა. თავისმხრივ, პროგრესულ წინსვლას უნდა აძლიერებდეს ის ისტორიული წარსული, რომელიც ეროვნული იდენტობის ამსახველია. ამიტომაც საკუთარ წარსულზე - კულტურულ მემკვიდრეობაზე ზრუნვა და მომავალი თაობებისათვის გადაცემა, უმთავრეს მოვალეობად მიგვაჩნია.`,
          `Moreover, the Foundation is deeply committed to ensuring that progress and development are harmoniously aligned with the nation's historical heritage and rich cultural identity. They emphasize the profound importance of preserving this cultural heritage and passing it down to future generations as an invaluable legacy.`
        )}
        <br></br>
        <br></br>
        {renderLanguage(
          `თანამედროვე მსოფლიოს მთელი რიგი გამოწვევები აქვს. მაღალტექნოლოგიური განვითარების პირობებში საბუნებისმეტყველო და ტექნიკური მიმართულებები გახლავთ ის პრიორიტეტული სფოერები, რომელშიც ჩვენს ახალგაზრდებს უნდა მიეცეთ ღირსეული ასპარეზის შესაძლებლობა. განათლების ფონდს გააჩნია ამბიცია იყოს აქტიურად ჩართულ ამ პროცესის მხარდაჭერაში.`,
          `In the face of the complex challenges posed by the modern world, advanced societies have adeptly harnessed cutting-edge technology, scientific knowledge, and technical expertise as indispensable tools for navigating the evolving landscape. The Foundation prioritizes these fields as key areas of focus and is considering investing in the talented youth of Georgia, equipping them with the latest knowledge and educational opportunities.`
        )}
        <br></br>
        <br></br>
        {renderLanguage(
          `გასული წლების განმავლობაში ფონდმა არაერთ განვითარებაზე ორიენტირებულ თანამოქალაქეს მისცა შესაძლებლობა მიეღოთ ხარისხიანი განათლება და აღნიშნული ტენდენცია მომავალ წლებშიც გაგრძელდება. ჩვენ გვჯერა, რომ ძლიერ საზოგადოებას შესწევს უნარი თავად მართოს საკუთარი მომავალი, მომავალი კი იქმნება დღეს!`,
          `Ultimately, the Foundation believes in the capacity of a strong society to shape its own destiny through their actions today.`
        )}
      </Typography>
    </Box>
  );
}
