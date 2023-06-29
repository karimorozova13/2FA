import BgSection from "@/components/BgSection";
import Container from "@/components/Container";
import LogOut from "@/components/LogOut";
import Section from "@/components/Section";
import Title from "@/components/Title";
import React from "react";

const welcome = () => {
  return (
    <>
      <LogOut />

      <BgSection fb={"100%"} h={"100vh"}>
        <Container>
          <Title title={"Welcome"} />
        </Container>
      </BgSection>
    </>
  );
};

export default welcome;
