import { styled } from "styled-components";

import { snakeBg } from "@/config/images";

const Section = styled.div`
  background-image: url(${snakeBg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  flex-basis: calc(100% / 2);
  @media only screen and (max-width: 767px) {
    flex-basis: 0;
  }
`;

const BgSection = () => {
  return <Section />;
};

export default BgSection;
