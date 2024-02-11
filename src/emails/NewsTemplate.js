import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";
import parse from "html-react-parser";

export const NewsTemplate = ({ link, url, title_eng, description_eng }) => {
  return (
    <Html>
      <Head />
      <Preview>Dbef Added News!</Preview>
      <Body style={main}>
        <Container>
          <Section>
            <Heading
              as="h2"
              style={{
                fontSize: 26,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Check out our news!
            </Heading>
            <Img
              width={620}
              src={url}
              height={420}
              style={{ objectFit: "contain" }}
            />

            <Row style={{ ...boxInfos, paddingBottom: "0" }}>
              <Column>
                <Heading
                  as="h2"
                  style={{
                    fontSize: 26,
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {title_eng}
                </Heading>
              </Column>
            </Row>
            <Row style={{ width: "100%" }}>
              <Text
                style={{
                  color: "black",
                  marginTop: -5,
                  padding: "32px !important",
                }}
              >
                {parse(description_eng.substring(0, 400))}
              </Text>
            </Row>
            <Row style={{ ...boxInfos, paddingTop: "0" }}>
              <Column
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                colSpan={2}
              >
                <a
                  href={process.env.NEXT_PUBLIC_URL + link}
                  target="_blank"
                  style={button}
                >
                  See More
                </a>
              </Column>
            </Row>
          </Section>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2023 | Davit Bezhuashvili Education Organization. Geogia |
            www.dbef.ge
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            If you don't want to receive emails from us please reply to us "I
            don't want to receive emails anymore"
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default NewsTemplate;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
  padding: "32px",
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center !important",
  width: "100%",
  alignItems: "center !important",
};

const button = {
  backgroundColor: "#e00707",
  padding: "12px 30px",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  marginLeft: '100px'
};

const boxInfos = {
  padding: "20px 40px",
  with: "100%",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
