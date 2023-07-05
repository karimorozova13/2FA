import styled from "styled-components";

import { colors } from "@/config/colors";

const Input = styled.div`
  width: 45px;
  height: 80px;
  border-radius: 3px;
  box-shadow: 0 0 12px ${colors.loginBg} inset;

  input {
    width: 100%;
    height: 100%;
    background-color: ${colors.inputBg};
    color: ${colors.mainWhite};
    border: none;
    outline: none;
    font-size: 40px;
    padding: 7px;
    text-align: center;
    &:focus {
      transform: scale(1.1);
    }
  }
`;

const VerifyInput = ({ children }) => {
  return <Input>{children}</Input>;
};

export default VerifyInput;
