import { snakeBg } from "@/config/images";
import styled from "styled-components";

const Wrap = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 140px 0;
  background-color: ${({ bg }) => bg};
  min-height: ${({ h }) => h};
  @media only screen and (max-width: 767px) {
    background-image: url(${snakeBg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

const Section = ({ children, bg = "", h = "auto" }) => {
  return (
    <Wrap h={h} bg={bg}>
      {children}
    </Wrap>
  );
};

export default Section;
