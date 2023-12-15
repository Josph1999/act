import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Container } from "@react-email/container";
import { Button } from "@mui/material";

export default function WelcomeTemplate() {
  return (
    <Html>
      <Section style={main}>
        <Container style={container}>
          <Button>Hello</Button>
          <Text style={heading}>მოგესალმებით!</Text>
          <Text style={paragraph}>
            დიდი მადლობა რომ გამოიწერეთ ჩვენი გვერდი სიახლეებისთვის{" "}
          </Text>
          <Text style={paragraph}>
            დაელოდეთ და იყავით პირველი ვინც სიახლეს გაიგებს!{" "}
          </Text>
          <Text style={heading}>Hello!</Text>
          <Text style={paragraph}>Thanks for your subscription!</Text>
          <Text style={paragraph}>
            Please wait for our news and we will inform you first!{" "}
          </Text>
        </Container>
      </Section>
    </Html>
  );
}

// Styles for the email template
const main = {
  backgroundColor: "#ffffff",
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  width: "580px",
};

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#484848",
};

const paragraph = {
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};
