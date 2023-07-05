import { colors } from "@/config/colors";
import React from "react";
import styled from "styled-components";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.backdrop};
  opacity: 1;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Modal = ({ children, onClick }) => {
  return <Backdrop onClick={onClick}>{children}</Backdrop>;
};

export default Modal;
