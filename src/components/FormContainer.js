import styled from "styled-components";

import { colors } from "@/config/colors";

const Form = styled.div`
  background-color: ${colors.loginBg};
  flex-basis: calc(100% / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px;

  form {
    width: 100%;
    max-width: 450px;
  }
  @media only screen and (max-width: 991px) {
    padding: 40px 15px;
  }
  @media only screen and (max-width: 767px) {
    flex-basis: 100%;
    border-radius: 4px;
    box-shadow: ${colors.boxSahdow} 0px 8px 24px;
  }
`;

const FormContainer = ({ children }) => {
  return <Form>{children}</Form>;
};

export default FormContainer;
