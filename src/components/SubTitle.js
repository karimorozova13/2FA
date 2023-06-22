import { colors } from "@/config/colors";
import React from "react";
import { styled } from "styled-components";

const Sub = styled.p`
  color: ${colors.text};
  font-size: 16px;
  font-weight: 700;
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const SubTitle = ({ title, mb = 0 }) => {
  return <Sub mb={mb}>{title}</Sub>;
};

export default SubTitle;
