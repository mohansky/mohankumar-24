import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  senderName: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  senderName,
  email,
  message,
}) => (
  //   <div>
  //     <h1>Welcome, {senderName}!</h1>
  //     <h3>Your email is {email}</h3>
  //     <p>{message}</p>
  //   </div>
  // );
  <Html>
    <Head />
    <Preview>Enquiry from {senderName}.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
        <Text style={heading1}>Enquiry from {senderName}! </Text>
          
          <Text style={paragraph}>
            Email:{" "}
            <Link style={anchor} href={`mailto:${email}`}>
              {email}
            </Link>
          </Text>
          <Hr style={hr} />
          <Text style={paragraph}>{message}</Text>

          <Hr style={hr} />
          <Text style={footer}>
            Mohan S Kumar +91 886 139 8666 {""}
            <Link style={anchor} href="mailto:mohansky@gmail.com">
              mohansky@gmail.com
            </Link> 
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const heading1 = {
  color: "#525f7f",
  fontSize: "32px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const paragraph = {
  color: "#525f7f",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#556cd6",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
