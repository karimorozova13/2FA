import { styled } from "styled-components";

import { snakeBg } from "@/config/images";

const SectionBg = styled.div`
  background-image: url(${snakeBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: ${({ fb }) => fb};
  @media only screen and (max-width: 767px) {
    flex-basis: 0;
  }
`;

const BgSection = ({ fb = "calc(100% / 2)", children }) => {
  return <SectionBg fb={fb}>{children}</SectionBg>;
};

export default BgSection;
