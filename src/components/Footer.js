import { styled } from "styled-components";

import { colors } from "@/config/colors";

const Foot = styled.div`
  position: ${({ position }) => position};
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 7px;
  background-color: ${colors.footerBg};
  p {
    color: ${colors.mainText};
    font-size: 16px;
    text-align: center;
    font-weight: 700;
  }
`;

const Footer = ({ position = "absolute" }) => {
  return (
    <Foot position={position}>
      <p>{`©${new Date().getFullYear()}. Created by Karine Morozova. All Rights Reserved.`}</p>
    </Foot>
  );
};

export default Footer;
