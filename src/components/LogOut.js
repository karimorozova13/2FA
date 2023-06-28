import { colors } from "@/config/colors";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";
const Btn = styled.p`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  background-color: transparent;
  font-size: 18px;
  color: ${colors.mainWhite};
  padding: 7px;
  cursor: pointer;
  pointer-events: auto;
`;
const LogOut = () => {
  const fn = () => {
    console.log(33);
  };
  return <Btn onClick={fn}>Log out</Btn>;
};

export default LogOut;
