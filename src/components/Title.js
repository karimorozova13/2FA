import { colors } from "@/config/colors";
import React from "react";
import { styled } from "styled-components";

const Text = styled.h1`
  font-size: clamp(24px, 2.5vw, 30px);
  color: ${colors.text};
  margin-bottom: 10px;
  text-align: center;
`;

const Title = ({ title }) => {
  return <Text>{title}</Text>;
};

export default Title;
