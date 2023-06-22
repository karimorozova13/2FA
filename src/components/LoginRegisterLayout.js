import { styled } from "styled-components";

import { colors } from "@/config/colors";

import Container from "./Container";
import Section from "./Section";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border-radius: 10px;
  overflow: hidden;
  @media only screen and (max-width: 767px) {
    border-radius: 0;
  }
`;

const LoginRegisterLayout = ({ children }) => {
  return (
    <Section h={"100vh"} bg={`${colors.sectionbg}`}>
      <Container>
        <Wrap>{children}</Wrap>
      </Container>
    </Section>
  );
};

export default LoginRegisterLayout;
