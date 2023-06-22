import { colors } from "@/config/colors";
import React from "react";
import { styled } from "styled-components";
const CtaBtn = styled.button`
  width: 100%;
  min-height: 40px;
  border-radius: 4px;
  padding: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${colors.mainWhite};
  background-color: ${colors.cta};
  transition: 250ms cubic-bezier(0.39, 0.575, 0.565, 1);
  border: 1px solid ${colors.cta};
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${colors.cta};
    background-color: ${colors.mainWhite};
  }
`;

const CTA = ({ onClick = () => {}, text = "", type = "submit" }) => {
  return (
    <CtaBtn type={type} onClick={onClick}>
      {text}
    </CtaBtn>
  );
};

export default CTA;
