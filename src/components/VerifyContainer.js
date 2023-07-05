import styled from "styled-components";

const Verify = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const VerifyContainer = ({ children }) => {
  return <Verify>{children}</Verify>;
};

export default VerifyContainer;
