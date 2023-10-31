import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

export default function AuthorInfo() {
  return (
    <Box
      sx={{
        padding: "128px",
        "@media (max-width: 800px)": {
          padding: "20px",
        },
      }}
    >
      <Accordion sx={{ backgroundColor: "#4338CA", color: "white" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ fontFamily: "UpperCaseGeo", color: "white" }}>
            განათლება
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
            1999 – დოქტორის ხარისხი ეკონომიკაში, ეკონომიკის მეცნიერებათა დოქტორი
          </Typography>
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
            პროფესიული გამოცდილება
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
            1999 – დოქტორის ხარისხი ეკონომიკაში, ეკონომიკის მეცნიერებათა დოქტორი
          </Typography>
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
            საპარლამენტო საქმიანობა
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
            1999 – დოქტორის ხარისხი ეკონომიკაში, ეკონომიკის მეცნიერებათა დოქტორი
          </Typography>
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
            საპარლამენტო დელეგაციები
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
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
            1999 – დოქტორის ხარისხი ეკონომიკაში, ეკონომიკის მეცნიერებათა დოქტორი
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
