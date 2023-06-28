import Container from "@/components/Container";
import LogOut from "@/components/LogOut";
import Section from "@/components/Section";
import Title from "@/components/Title";
import React from "react";

const welcome = () => {
  return (
    <>
      <LogOut />

      <Section h={"100vh"} bg={"teal"}>
        <Container>
          <Title title={"Welcome"} />
        </Container>
      </Section>
    </>
  );
};

export default welcome;
