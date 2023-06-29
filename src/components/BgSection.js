import styled from "styled-components";

import { snakeBg } from "@/config/images";

const SectionBg = styled.div`
  background-image: url(${snakeBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: ${({ fb }) => fb};
  height: ${({ h }) => h};
  @media only screen and (max-width: 767px) {
    flex-basis: 0;
  }
`;

const BgSection = ({ fb = "calc(100% / 2)", children, h }) => {
  return (
    <SectionBg h={h} fb={fb}>
      {children}
    </SectionBg>
  );
};

export default BgSection;
