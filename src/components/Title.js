import styled from "styled-components";

import { colors } from "@/config/colors";

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
