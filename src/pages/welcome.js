import Container from "@/components/Container";
import Section from "@/components/Section";
import Title from "@/components/Title";
import React from "react";

const welcome = () => {
  return (
    <Section h={"100vh"} bg={"teal"}>
      <Container>
        <Title title={"Welcome"} />
      </Container>
    </Section>
  );
};

export default welcome;
